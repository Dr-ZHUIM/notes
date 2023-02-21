# electron

**electron render process cannot use node.js, you can pass some api into render process depending on a proloader script.**

**contextBridge.exposeInMainWorld暴露的参数会被添加到renderer进程的window对象中**


ipcMain.on <=> ipcRender.send （渲染进程向主进程通信）

ipcMain.on <=> ipcRender.send （主进程进程向渲染通信）
