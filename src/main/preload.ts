// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;

// ------------- CUSTOM PRELOADS  ---------------

const apiHandler = {
  getFilesPath: () => ipcRenderer.invoke('dialog:openFile'), // use in mainConent
  exportAsPDF: (data: string) => ipcRenderer.invoke('dialog:savePDF', data), // use in Export PDF btn
  exportAsTex: (data: string) => ipcRenderer.invoke('dialog:saveTex', data), // not Implemented
  sendLatex: (data: string) => ipcRenderer.invoke('request-stream', data),

  onError: (callback: Function) =>
    ipcRenderer.on('error', (event, err) => {
      callback(err);
    }),

  onFinish: (callback: Function) =>
    ipcRenderer.on('finish', () => {
      callback();
    }),

  onCancel: (callback: Function) => {
    ipcRenderer.on('cancel', () => {
      callback();
    });
  },

  onPDFBuffer: (callback: Function) =>
    ipcRenderer.on('pdf-stream', (event, chunk) => {
      callback(chunk);
    }),

  // ----------- NOT IN USE ------------
  loadPDF: (filepath: string) => ipcRenderer.invoke('load:pdf', filepath),
  saveLoc: () => ipcRenderer.invoke('saveLoc:pdf'),
  // ------------------------------------
};

contextBridge.exposeInMainWorld('electronAPI', apiHandler);

export type ElectronAPI = typeof apiHandler;
