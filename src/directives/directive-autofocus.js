import { Platform } from "quasar"

export const autofocus = {
   inserted(el, binding) {
      let input = el.querySelector(".q-field__native")
      let delay = 0
      if (Platform.is.cordova) {
         delay = binding.value.delayCordova ? binding.value.delayCordova : 700
      }
      setTimeout(() => {
         input.focus()
      }, delay)
   }
}
