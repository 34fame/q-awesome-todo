<template>
   <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
   >
      <q-banner class="bg-grey-2">
         <template v-slot:avatar>
            <q-icon name="check" color="primary" />
         </template>
         Congratulations! You have no open tasks... (but is that really true??)
         <template v-slot:action>
            <q-btn
               color="primary"
               flat
               label="Create a new task"
               @click="$root.$emit('showAddDialog')"
            />
         </template>
      </q-banner>
   </transition>
</template>

<script>
export default {}
</script>

<style></style>
