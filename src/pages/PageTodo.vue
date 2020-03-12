<template>
   <q-page>
      <div class="q-pa-md absolute full-width full-height column">
         <template v-if="tasksDownloaded">
            <div class="row q-mb-lg">
               <search />
               <sort />
            </div>

            <div
               v-if="
                  !Object.keys(openTasks).length &&
                     !Object.keys(completedTasks).length &&
                     search.length
               "
            >
               <no-search-results />
            </div>

            <q-scroll-area class="q-scroll-area-tasks">
               <div v-if="!Object.keys(openTasks).length && !search.length">
                  <no-open-tasks />
               </div>

               <transition
                  appear
                  enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut absolute-top"
               >
                  <div v-if="Object.keys(openTasks).length">
                     <q-banner
                        class="bg-orange-4 text-center"
                        v-if="!settings.showTasksInOneList"
                     >
                        <span class="text-white text-bold text-subtitle1">
                           Open Tasks
                        </span>
                     </q-banner>
                     <task-list :tasks="openTasks" />
                  </div>
               </transition>

               <transition
                  appear
                  enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut"
               >
                  <div
                     :class="{ 'q-mt-lg': !settings.showTasksInOneList }"
                     v-if="Object.keys(completedTasks).length"
                  >
                     <q-banner
                        class="bg-green-4 text-center"
                        v-if="!settings.showTasksInOneList"
                     >
                        <span class="text-white text-bold text-subtitle1">
                           Completed Tasks
                        </span>
                     </q-banner>
                     <task-list :tasks="completedTasks" />
                  </div>
               </transition>
            </q-scroll-area>

            <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
               <q-btn
                  class="all-pointer-events"
                  fab
                  color="primary"
                  icon="add"
                  @click="showAddDialog = true"
               />
            </div>
         </template>

         <template v-else>
            <span class="absolute-center">
               <q-spinner color="primary" size="3em"
            /></span>
         </template>
      </div>

      <q-dialog persistent v-model="showAddDialog">
         <add-task @close="showAddDialog = false" />
      </q-dialog>
   </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex"

export default {
   data() {
      return {
         showAddDialog: false
      }
   },
   computed: {
      ...mapGetters("tasks", ["completedTasks", "openTasks"]),
      ...mapState("tasks", ["search", "tasksDownloaded"]),
      ...mapGetters("settings", ["settings"])
   },
   components: {
      "add-task": require("components/Tasks/AddTask.vue").default,
      "task-list": require("components/Tasks/TaskList.vue").default,
      "no-open-tasks": require("components/Tasks/NoOpenTasks.vue").default,
      "no-search-results": require("components/Tasks/NoSearchResults").default,
      search: require("components/Tasks/Search.vue").default,
      sort: require("components/Tasks/Sort.vue").default
   },
   mounted() {
      this.$root.$on("showAddDialog", () => {
         this.showAddDialog = true
      })
   }
}
</script>

<style lang="scss">
.q-banner {
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
}
.q-scroll-area-tasks {
   display: flex;
   flex-grow: 1;
   .mobile & {
      flex-basis: 100px;
   }
}
.electron {
   .q-scroll-area-tasks {
      height: auto !important;
   }
}
</style>
