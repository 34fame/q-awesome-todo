import Vue from "vue"
import Vuex from "vuex"

import auth from "./auth"
import tasks from "./tasks"
import settings from "./settings"

Vue.use(Vuex)

export default function(/* { ssrContext } */) {
   const Store = new Vuex.Store({
      modules: {
         auth,
         tasks,
         settings
      },

      // enable strict mode (adds overhead!)
      // for dev mode only
      strict: process.env.DEV
   })

   return Store
}
