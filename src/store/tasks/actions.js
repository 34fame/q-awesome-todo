import { firebaseAuth, firebaseDb } from "boot/firebase"
import { uid } from "quasar"

export function addTask({ dispatch }, task) {
   let id = uid()
   let payload = {
      id: id,
      task
   }

   dispatch("fbAddTask", payload)
}

export function updateTask({ dispatch }, payload) {
   dispatch("fbUpdateTask", payload)
}

export function deleteTask({ dispatch }, id) {
   dispatch("fbDeleteTask", id)
}

export function setSearch({ commit }, value) {
   commit("setSearch", value)
}

export function setSort({ commit }, value) {
   commit("setSort", value)
}

export function fbReadData({ commit }) {
   // initiated in store/auth/actions
   let userTasks = firebaseDb.ref("tasks/" + firebaseAuth.currentUser.uid)

   userTasks.once("value", snapshot => {
      commit("setTasksDownloaded", true)
   })

   userTasks.on("child_added", snapshot => {
      let task = snapshot.val()
      let payload = {
         id: snapshot.key,
         task: task
      }
      commit("addTask", payload)
   })

   userTasks.on("child_changed", snapshot => {
      let task = snapshot.val()
      let payload = {
         id: snapshot.key,
         updates: task
      }
      commit("updateTask", payload)
   })

   userTasks.on("child_removed", snapshot => {
      commit("deleteTask", snapshot.key)
   })
}

export function fbAddTask({}, payload) {
   let taskRef = firebaseDb.ref(
      "tasks/" + firebaseAuth.currentUser.uid + "/" + payload.id
   )
   taskRef.set(payload.task)
}

export function fbUpdateTask({}, payload) {
   let taskRef = firebaseDb.ref(
      "tasks/" + firebaseAuth.currentUser.uid + "/" + payload.id
   )
   taskRef.update(payload.updates)
}

export function fbDeleteTask({}, id) {
   let taskRef = firebaseDb.ref(
      "tasks/" + firebaseAuth.currentUser.uid + "/" + id
   )
   taskRef.remove()
}
