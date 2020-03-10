<template>
   <q-input
      class="col"
      clearable
      outlined
      v-model="searchField"
      v-select-all
      label="Search"
      @keyup.esc="searchField = ''"
   >
      <template v-slot:append>
         <q-icon name="search" />
      </template>
   </q-input>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { selectAll } from "src/directives/directive-select-all"

export default {
   computed: {
      ...mapState("tasks", ["search"]),
      searchField: {
         get() {
            return this.search
         },
         set(value) {
            this.setSearch(value)
         }
      }
   },
   methods: {
      ...mapActions("tasks", ["setSearch"])
   },
   directives: {
      selectAll
   }
}
</script>

<style></style>
