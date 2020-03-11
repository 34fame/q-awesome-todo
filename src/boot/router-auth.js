import { LocalStorage } from "quasar"

export default ({ router }) => {
   router.beforeEach((to, from, next) => {
      let authenticated = LocalStorage.getItem("authenticated")
      console.log("authenticated", authenticated)
      if (!authenticated && to.path !== "/auth") {
         next("/auth")
      } else {
         next()
      }
   })
}
