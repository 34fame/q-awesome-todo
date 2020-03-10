<template>
   <q-item
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
      clickable
      v-ripple
      v-touch-hold:1000.mouse="showEditDialogModal"
      @click="updateTask({ id: id, updates: { completed: !task.completed } })"
   >
      <q-item-section side top>
         <q-checkbox
            class="no-pointer-events"
            v-model="task.completed"
            :value="task.completed"
         />
      </q-item-section>

      <q-item-section>
         <q-item-label
            v-html="$options.filters.highlightSearchTerm(task.name, search)"
            :class="{ 'text-strikethrough': task.completed }"
         />
      </q-item-section>

      <q-item-section side v-if="task.dueDate">
         <div class="row">
            <div class="column justify-center">
               <q-icon class="q-mr-sm" name="event" size="32px" />
            </div>
            <div class="column">
               <q-item-label class="row justify-end" caption>{{
                  task.dueDate | naturalDate
               }}</q-item-label>
               <q-item-label class="row justify-end" caption
                  ><small>{{ taskDueTime }}</small></q-item-label
               >
            </div>
         </div>
      </q-item-section>

      <q-item-section side>
         <div class="row">
            <q-btn
               flat
               round
               dense
               color="primary"
               icon="edit"
               @click.stop="showEditDialogModal()"
            />
            <q-btn
               flat
               round
               dense
               color="red"
               icon="delete"
               @click.stop="promptToDelete(id)"
            />
         </div>
      </q-item-section>

      <q-dialog persistent v-model="showEditDialog">
         <editTask :id="id" :task="task" @close="showEditDialog = false" />
      </q-dialog>
   </q-item>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import moment from "moment"

export default {
   props: ["task", "id"],
   data() {
      return {
         showEditDialog: false
      }
   },
   computed: {
      ...mapState("tasks", ["search"]),
      ...mapGetters("settings", ["settings"]),
      taskDueTime() {
         if (this.settings.show12HourTimeFormat) {
            return moment(this.task.dueTime, "HH:mm").format("h:mm A")
         }
         return this.task.dueTime
      }
   },
   methods: {
      ...mapActions("tasks", ["updateTask", "deleteTask"]),
      promptToDelete(id) {
         this.$q
            .dialog({
               title: "Confirm",
               message: "Are you sure you want to delete?",
               ok: {
                  push: true
               },
               cancel: {
                  push: true,
                  color: "negative"
               },
               persistent: true
            })
            .onOk(() => {
               this.deleteTask(id)
            })
      },
      showEditDialogModal() {
         this.showEditDialog = true
      }
   },
   filters: {
      naturalDate(value) {
         let prettyDate = moment(value, "YYYYMMDD").fromNow()
         return prettyDate
      },
      highlightSearchTerm(value, search) {
         if (search) {
            let regexp = new RegExp(search, "ig")
            return value.replace(regexp, match => {
               return '<span class="bg-yellow-6">' + match + "</span>"
            })
         }
         return value
      }
   },
   components: {
      editTask: require("./EditTask.vue").default
   }
}
</script>

<style></style>
