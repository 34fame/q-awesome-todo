import { app, BrowserWindow, Menu, nativeTheme, ipcMain } from "electron"
import { menuTemplate } from "./electron-main-menu-template"

try {
   if (
      process.platform === "win32" &&
      nativeTheme.shouldUseDarkColors === true
   ) {
      require("fs").unlinkSync(
         require("path").join(app.getPath("userData"), "DevTools Extensions")
      )
   }
} catch (_) {}

if (process.env.PROD) {
   global.__statics = require("path")
      .join(__dirname, "statics")
      .replace(/\\/g, "\\\\")
}

export let mainWindow
const menu = Menu.buildFromTemplate(menuTemplate)

app.on("ready", () => {
   mainWindow = new BrowserWindow({
      width: 1000,
      height: 600,
      minWidth: 500,
      minHeight: 600,
      useContentSize: true,
      webPreferences: {
         nodeIntegration: QUASAR_NODE_INTEGRATION
      }
   })

   mainWindow.loadURL(process.env.APP_URL)

   mainWindow.on("closed", () => {
      mainWindow = null
   })

   Menu.setApplicationMenu(menu)
})

app.on("window-all-closed", () => {
   app.quit()
})

/*
   ipc events
*/
ipcMain.on("quit-app", () => {
   app.quit()
})
