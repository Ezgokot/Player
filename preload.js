const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    onDroppedFiles: (callback) => ipcRenderer.on('dropped-files-response', (event, filePaths) => callback(filePaths)),
    sendDroppedFiles: (filePaths) => ipcRenderer.send('dropped-files', filePaths)
});
