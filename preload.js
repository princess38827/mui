const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  connectIRC: (config) => ipcRenderer.invoke('connect-irc', config)
});