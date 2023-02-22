const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron');
const {
  createMenu
} = require('./config/config')
const path = require('path');
const mode = process.argv[2];
const submode = process.argv[3];

const productURL = path.join(__dirname, '../build/index.html');

app.whenReady().then(() => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    x: 200,
    y: 200,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  if (mode === 'dev' || submode === 'dev') {
    mainWindow.loadURL("http://localhost:8080/");
  } else {
    mainWindow.loadFile(productURL)
  }

  // Open the DevTools.
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.on('saveFile', () => {
    console.log("saveFile");
  })
  createMenu(mainWindow);
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})