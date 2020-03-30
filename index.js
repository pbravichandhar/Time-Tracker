const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const url = require('url')
const path = require("path")

function createWindow () {
  // Create the browser window.
  const loginScreen = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  const second = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  loginScreen.loadURL(url.format({
    pathname: path.join(__dirname, 'src/LoginScreen/index.html'),
    protocol: 'file:',
    slashes: true
}));
//   second.loadFile('second.html')

  ipcMain.on('request-update-label-in-second-window', (event, arg) => {
    // Request to update the label in the renderer process of the second window
    second.webContents.send('action-update-label', arg)
  })

  // Emitted when the window is closed.
  loginScreen.on('closed', function () {
    mainWindow = null
    secondWindow = null
  })

  // Open the DevTools.
  loginScreen.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
