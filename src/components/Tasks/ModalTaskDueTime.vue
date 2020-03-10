<template>
   <div class="row q-mb-sm">
      <q-input
         clearable
         outlined
         label="Due time"
         :value="dueTime"
         @input="$emit('update:dueTime', $event)"
      >
         <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
               <q-popup-proxy>
                  <q-time
                     mask="hh:mm A"
                     :value="dueTime"
                     @input="$emit('update:dueTime', $event)"
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
                  </q-time>
               </q-popup-proxy>
            </q-icon>
         </template>
      </q-input>
   </div>
</template>

<script>
export default {
   props: ["dueTime"]
}
</script>

<style></style>
