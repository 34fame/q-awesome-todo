import { firebaseAuth } from "boot/firebase"
import { LocalStorage, Loading } from "quasar"
import { showErrorMessage } from "src/functions/function-show-error-message"

export function register({}, payload) {
   Loading.show()
   firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
         console.log("response", response)
      })
      .catch(err => {
         showErrorMessage(err.message)
      })
}

export function login({}, payload) {
   Loading.show()
   firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
         console.log("response", response)
      })
      .catch(err => {
         showErrorMessage(err.message)
      })
}

export function logout({}) {
   firebaseAuth
      .signOut()
      .then(response => {
         console.log("response", response)
      })
      .catch(err => {
         console.error(err.message)
      })
}

export function handleAuthStateChange({ commit, dispatch }) {
   firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
         commit("setAuthenticated", true)
         LocalStorage.set("authenticated", true)
         this.$router.push("/").catch(err => {})
         dispatch("tasks/fbReadData", null, { root: true })
      } else {
         commit("tasks/clearTasks", null, { root: true })
         commit("tasks/setTasksDownloaded", false, { root: true })
         commit("setAuthenticated", false)
         LocalStorage.clear()
         this.$router.replace("/auth").catch(err => {})
      }
   })
}
