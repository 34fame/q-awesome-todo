<template>
   <q-select
      class="col q-ml-sm"
      emit-value
      label="Sort By"
      map-options
      outlined
      v-model="sortByField"
      :options="options"
      @change="setSort(sortBy)"
   />
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
   data() {
      return {
         options: [
            { label: "Name", value: "name" },
            { label: "Due Date", value: "dueDate" }
         ]
      }
   },
   computed: {
      ...mapState("tasks", ["sortBy"]),
      sortByField: {
         get() {
            return this.sortBy
         },
         set(value) {
            this.setSort(value)
         }
      }
   },
   methods: {
      ...mapActions("tasks", ["setSort"])
   }
}
</script>

<style scoped>
.q-select {
   flex: 0 0 160px;
}
</style>
