<template>
   <div class="row q-mb-sm">
      <q-input
         v-autofocus
         class="col"
         clearable
         outlined
         label="Task name"
         ref="name"
         v-select-all
         :value="name"
         :rules="[val => !!val || 'Field is required']"
         @input="$emit('update:name', $event)"
      />
   </div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all"
import { autofocus } from "src/directives/directive-autofocus"
export default {
   props: ["name"],
   directives: {
      autofocus,
      selectAll
   }
}
</script>

<style></style>
