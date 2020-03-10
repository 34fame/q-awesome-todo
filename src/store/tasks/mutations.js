import Vue from "vue"
import { uid } from "quasar"

export function addTask(state, payload) {
   Vue.set(state.tasks, uid(), payload.task)
}

export function updateTask(state, payload) {
   Object.assign(state.tasks[payload.id], payload.updates)
}

export function deleteTask(state, id) {
   Vue.delete(state.tasks, id)
}

export function setSearch(state, value) {
   state.search = value
}

export function setSort(state, value) {
   state.sortBy = value
}
