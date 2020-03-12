import { app } from "electron"
import { mainWindow } from "./electron-main"

const isMac = process.platform === "darwin"

export const menuTemplate = [
   {
      label: "File",
      submenu: [
         {
            label: "Settings",
            click() {
               mainWindow.webContents.send("show-settings")
            },
            accelerator: "CmdOrCtrl+,"
         },
         { type: "separator" },
         isMac ? { role: "close" } : { role: "quit" }
      ]
   },
   ...(isMac
      ? [
           {
              label: app.name,
              submenu: [
                 { role: "about" },
                 { type: "separator" },
                 { role: "services" },
                 { type: "separator" },
                 { role: "hide" },
                 { role: "hideothers" },
                 { role: "unhide" },
                 { type: "separator" },
                 { role: "quit" }
              ]
           }
        ]
      : [])
]
