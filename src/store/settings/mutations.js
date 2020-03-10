import Vue from "vue"

export function updateSettings(state, payload) {
   Object.assign(state.settings, payload)
}

export function setSettings(state, settings) {
   state.settings = settings
}
