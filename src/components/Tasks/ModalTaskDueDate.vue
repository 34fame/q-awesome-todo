<template>
   <div class="row q-mb-sm">
      <q-input
         clearable
         outlined
         label="Due date"
         :value="dueDate"
         @input="$emit('update:dueDate', $event)"
      >
         <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
               <q-popup-proxy>
                  <q-date
                     :value="dueDate"
                     @input="$emit('update:dueDate', $event)"
                  >
                     <div class="row items-center justify-end q-gutter-sm">
                        <q-btn
                           label="Cancel"
                           color="primary"
                           flat
                           v-close-popup
                        />
                        <q-btn label="OK" color="primary" flat v-close-popup />
                     </div>
                  </q-date>
               </q-popup-proxy>
            </q-icon>
         </template>
      </q-input>
   </div>
</template>

<script>
export default {
   props: ["dueDate"]
}
</script>

<style></style>
