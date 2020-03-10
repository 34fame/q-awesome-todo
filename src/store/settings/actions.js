import { LocalStorage } from "quasar"

export function updateSettings({ commit, dispatch }, payload) {
   commit("updateSettings", payload)
   dispatch("saveSettings")
}

export function saveSettings({ state }) {
   LocalStorage.set("settings", state.settings)
}

export function getSettings({ commit }) {
   let settings = LocalStorage.getItem("settings")
   if (settings) {
      commit("setSettings", settings)
   }
}
