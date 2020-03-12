export const autofocus = {
   inserted(el) {
      let input = el.querySelector(".q-field__native")
      setTimeout(() => {
         input.focus()
      }, 700)
   }
}
