// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { callbackify } from 'util';

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

contextBridge.exposeInMainWorld('test', {
  clickBtn: (val: { age: string }) => ipcRenderer.send('test-ipc', val),
});

const apiHandler = {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  saveAsPDF: (data: { path: string; latex: string }) =>
    ipcRenderer.invoke('dialog:savePDF', data),
  saveAsTex: () => ipcRenderer.invoke('dialog:saveTex'),
  loadPDF: (filepath: string) => ipcRenderer.invoke('load:pdf', filepath),
  saveLoc: () => ipcRenderer.invoke('saveLoc:pdf'),
  onPdfGen: (callback: Function) =>
    ipcRenderer.on('gen:pdf', (event, filepath) => {
      callback(filepath);
    }),

  sendLatex: (data: string) => ipcRenderer.invoke('request-stream', data),
  onPDFBuffer: (callback: Function) =>
    ipcRenderer.on('pdf-stream', (event, chunk) => {
      callback(chunk);
    }),
};

contextBridge.exposeInMainWorld('electronAPI', apiHandler);

export type ElectronAPI = typeof apiHandler;
