export function addTask({ commit }, payload) {
   commit("addTask", payload)
}

export function updateTask({ commit }, payload) {
   commit("updateTask", payload)
}

export function deleteTask({ commit }, id) {
   commit("deleteTask", id)
}

export function setSearch({ commit }, value) {
   commit("setSearch", value)
}

export function setSort({ commit }, value) {
   commit("setSort", value)
}
