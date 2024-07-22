/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import fs from 'node:fs';
import latex from 'node-latex';
import log from 'electron-log';
import { resolveHtmlPath, toArrayBuffer } from './util';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      { forceDownload, loadExtensionOptions: { allowFileAccess: true } },
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // const menuBuilder = new MenuBuilder(mainWindow);
  // menuBuilder.buildMenu();
  mainWindow.removeMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

// --------------- CUSTOM IPC ------------------
ipcMain.on('test-ipc', () => {
  const input = fs.createReadStream(`${__dirname}/assets/report.tex`, 'utf-8');
  const output = fs.createWriteStream(`${__dirname}/output.pdf`);
  console.log('dirname: ', `${__dirname}/assets/report.tex`);
  const pdf = latex(input, {
    inputs: `${__dirname}/assets`,
  });

  pdf.pipe(output);
  pdf.on('error', (err) => {
    console.log(err);
  });

  pdf.on('finish', () => {
    console.log('PDF GENERATED');
  });
});

// API NAME: getFilesPath
ipcMain.handle('dialog:openFile', () => {
  const filePath = dialog.showOpenDialogSync(mainWindow as BrowserWindow, {
    filters: [{ name: 'Images', extensions: ['jpg', 'jpeg', 'png'] }],
  });
  return filePath;
});

ipcMain.handle('dialog:saveTex', async (event, data) => {
  if (data) {
    const { canceled, filePath } = await dialog.showSaveDialog(
      mainWindow as BrowserWindow,
      {
        defaultPath: 'output.tex',
        filters: [{ extensions: ['tex'], name: 'LaTeX Source File' }],
      },
    );

    if (!canceled) {
      await fs.writeFile(filePath as string, data, (err) => {
        if (err) {
          mainWindow?.webContents.send('error', err);
          console.log(err);
        }

        mainWindow?.webContents.send('finish');
      });
    } else {
      mainWindow?.webContents.send('cancel');
    }
  }
});

// API NAME: saveAsPDF
ipcMain.handle('dialog:savePDF', async (event, data) => {
  if (data) {
    const { canceled, filePath } = await dialog.showSaveDialog(
      mainWindow as BrowserWindow,
      {
        defaultPath: 'output.pdf',
        filters: [{ extensions: ['pdf'], name: 'PDF Document' }],
      },
    );
    if (!canceled) {
      const RESOURCES_PATH = app.isPackaged
        ? path.join(process.resourcesPath, 'assets/latexImages')
        : path.join(__dirname, '../../assets/latexImages');

      const LATEX_COMMAND = app.isPackaged
        ? path.join(
            process.resourcesPath,
            'assets/latexEngine/bin/windows/pdflatex.exe',
          )
        : path.join(
            __dirname,
            '../../assets/latexEngine/bin/windows/pdflatex.exe',
          );

      const pdf = latex(data, {
        inputs: RESOURCES_PATH,
        passes: 2,
        cmd: LATEX_COMMAND,
      });
      console.log(filePath);

      const output = fs.createWriteStream(filePath as string);

      pdf.pipe(output);
      pdf.on('error', (err) => {
        console.log(err);
        mainWindow?.webContents.send('error', err);
        dialog.showErrorBox(err.name, err.message);
        output.end(() => {
          fs.unlink(filePath as string, (delErr) => {
            if (delErr) {
              mainWindow?.webContents.send('error', delErr);
              dialog.showErrorBox(
                delErr?.name || 'Error',
                delErr?.message || "File can't be deleted",
              );
            }
          });
        });
      });

      pdf.on('finish', () => {
        mainWindow?.webContents.send('finish');
        console.log('PDF Generated');
      });
    } else {
      mainWindow?.webContents.send('cancel');
    }
  }
});

// API NAME: loadPDF
// ipcMain.handle('load:pdf', async (event, filepath) => {
//   try {
//     const pdf = fs.readFileSync(filepath);
//     // return pdf;
//     const data = toArrayBuffer(pdf);
//     return data;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// });

// API NAME: saveLoc
// ipcMain.handle('saveLoc:pdf', async () => {
//   const { filePath, canceled } = await dialog.showSaveDialog({
//     defaultPath: 'output.pdf',
//     filters: [{ extensions: ['pdf'], name: 'PDF Document' }],
//   });

//   if (!canceled && filePath) {
//     console.log(filePath);
//     return filePath;
//   }

//   return null;
// });

// API NAME: sendLatex
ipcMain.handle('request-stream', async (event, data) => {
  if (data) {
    const RESOURCES_PATH = app.isPackaged
      ? path.join(process.resourcesPath, 'assets/latexImages')
      : path.join(__dirname, '../../assets/latexImages');

    const LATEX_COMMAND = app.isPackaged
      ? path.join(
          process.resourcesPath,
          'assets/latexEngine/bin/windows/pdflatex.exe',
        )
      : path.join(
          __dirname,
          '../../assets/latexEngine/bin/windows/pdflatex.exe',
        );

    const transformStream = latex(data, {
      inputs: RESOURCES_PATH,
      passes: 2,
      cmd: LATEX_COMMAND,
    });

    const chunks: Buffer[] = [];
    transformStream.on('data', (chunk) => {
      chunks.push(Buffer.from(chunk));
    });

    transformStream.on('error', (err) => {
      if (err) {
        console.log(err);
        mainWindow?.webContents.send('error', err);
      }
    });

    transformStream.on('end', () => {
      const finalBuffer = Buffer.concat(chunks);
      const arrayBuffer = toArrayBuffer(finalBuffer);
      mainWindow?.webContents.send('pdf-stream', arrayBuffer); // API NAME: onPDFBuffer
    });
  }
});
