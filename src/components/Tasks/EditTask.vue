<template>
   <q-card>
      <modal-header>Edit Task</modal-header>

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
   props: ["id", "task"],
   data() {
      return {
         taskSubmit: {
            name: this.task.name,
            dueDate: this.task.dueDate,
            dueTime: this.task.dueTime,
            completed: false
         }
      }
   },
   methods: {
      ...mapActions("tasks", ["updateTask"]),
      submitForm() {
         this.$refs.modalTaskName.$refs.name.validate()
         if (!this.$refs.modalTaskName.$refs.name.hasError) {
            this.submitTask()
         }
      },
      submitTask() {
         this.updateTask({ id: this.id, updates: this.taskSubmit })
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
