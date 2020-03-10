export function sortedTasks(state) {
   let sortedTasks = {}
   let taskKeys = Object.keys(state.tasks)

   taskKeys.sort((a, b) => {
      let taskA = state.tasks[a][state.sortBy].toLowerCase()
      let taskB = state.tasks[b][state.sortBy].toLowerCase()

      if (taskA > taskB) return 1
      else if (taskA < taskB) return -1
      else return 0
   })

   taskKeys.map(key => {
      sortedTasks[key] = state.tasks[key]
   })

   return sortedTasks
}

export function openTasks(state, getters) {
   let filteredTasks = getters.filteredTasks
   let openTasks = {}

   Object.keys(filteredTasks).map(key => {
      if (!filteredTasks[key].completed) {
         openTasks[key] = filteredTasks[key]
      }
   })

   return openTasks
}

export function completedTasks(state, getters) {
   let filteredTasks = getters.filteredTasks
   let completedTasks = {}

   Object.keys(filteredTasks).map(key => {
      if (filteredTasks[key].completed) {
         completedTasks[key] = filteredTasks[key]
      }
   })

   return completedTasks
}

export function filteredTasks(state, getters) {
   let tasks = getters.sortedTasks
   let filteredTasks = {}

   if (state.search) {
      Object.keys(tasks).map(key => {
         if (
            tasks[key].name.toLowerCase().includes(state.search.toLowerCase())
         ) {
            filteredTasks[key] = tasks[key]
         }
      })
      return filteredTasks
   }

   return tasks
}
