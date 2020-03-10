<template>
   <q-list v-if="Object.keys(tasks).length" bordered separator>
      <task v-for="(task, key) in tasks" :key="key" :id="key" :task="task" />
   </q-list>
</template>

<script>
export default {
   props: ["tasks"],
   components: {
      task: require("./Task.vue").default
   }
}
</script>

<style></style>
