<template>
   <q-card-section>
      <div class="row">
         <div class="text-h6"><slot /></div>
         <q-space />
         <q-btn flat round dense icon="close" v-close-popup />
      </div>
   </q-card-section>
</template>

<script>
export default {}
</script>

<style></style>
