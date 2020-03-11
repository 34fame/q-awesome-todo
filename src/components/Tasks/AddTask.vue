<template>
   <q-card>
      <modal-header>Add Task</modal-header>

      <q-form @submit.prevent="submitForm()" class="q-gutter-md">
         <q-card-section>
            <modal-task-name ref="modalTaskName" :name.sync="taskSubmit.name" />

            <modal-task-due-date :dueDate.sync="taskSubmit.dueDate" />

            <modal-task-due-time
               v-if="taskSubmit.dueDate"
               :dueTime.sync="taskSubmit.dueTime"
            />
         </q-card-section>

         <modal-buttons />
      </q-form>
   </q-card>
</template>

<script>
import { mapActions } from "vuex"

export default {
   data() {
      return {
         taskSubmit: {
            name: "",
            dueDate: "",
            dueTime: "",
            completed: false
         }
      }
   },
   methods: {
      ...mapActions("tasks", ["addTask"]),
      submitForm() {
         this.$refs.modalTaskName.$refs.name.validate()
         if (!this.$refs.modalTaskName.$refs.name.hasError) {
            this.submitTask()
         }
      },
      submitTask() {
         this.addTask(this.taskSubmit)
         this.$emit("close")
      }
   },
   components: {
      "modal-header": require("./modalHeader.vue").default,
      "modal-task-name": require("./ModalTaskName.vue").default,
      "modal-task-due-date": require("./ModalTaskDueDate.vue").default,
      "modal-task-due-time": require("./ModalTaskDueTime.vue").default,
      "modal-buttons": require("./ModalButtons.vue").default
   }
}
</script>

<style></style>
