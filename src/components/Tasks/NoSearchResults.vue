<template>
   <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
   >
      <q-banner class="bg-grey-2">
         <template v-slot:avatar>
            <q-icon name="info" color="primary" />
         </template>
         No search results.
      </q-banner>
   </transition>
</template>

<script>
export default {}
</script>

<style></style>
