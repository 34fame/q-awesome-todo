import { app } from "electron"
import { mainWindow } from "./electron-main"

const isMac = process.platform === "darwin"

export const menuTemplate = [
   {
      label: "File",
      submenu: [
         isMac ? { role: "close" } : { role: "quit" },
         {
            label: "Settings",
            click() {
               mainWindow.webContents.send("show-settings")
            },
            accelerator: "CmdOrCtrl+,"
         }
      ]
   },
   ...(isMac
      ? [
           {
              label: app.name,
              submenu: [
                 { role: "about" },
                 { type: "separator" },
                 { role: "quit" }
              ]
           }
        ]
      : [])
]
