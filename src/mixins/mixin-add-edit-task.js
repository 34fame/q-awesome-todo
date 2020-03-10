export default {
   methods: {
      submitForm() {
         this.$refs.modalTaskName.$refs.name.validate()
         if (!this.$refs.modalTaskName.$refs.name.hasError) {
            this.submitTask()
         }
      }
   }
}
