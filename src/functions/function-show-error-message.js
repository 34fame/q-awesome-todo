import { Dialog, Loading } from "quasar"

export function showErrorMessage(message) {
   Loading.hide()
   Dialog.create({
      title: "Error",
      message: message
   })
}
