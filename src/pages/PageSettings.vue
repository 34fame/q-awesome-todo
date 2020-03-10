<template>
   <q-page padding>
      <q-list bordered padding separator>
         <q-item-label header>Settings</q-item-label>
         <q-item>
            <q-item-section>
               <q-item-label>Show 12-hour time format</q-item-label>
            </q-item-section>
            <q-item-section avatar>
               <q-toggle color="blue" v-model="show12HourTimeFormat" />
            </q-item-section>
         </q-item>

         <q-item>
            <q-item-section>
               <q-item-label>Show tasks in one list</q-item-label>
            </q-item-section>
            <q-item-section avatar>
               <q-toggle color="blue" v-model="showTasksInOneList" />
            </q-item-section>
         </q-item>
      </q-list>

      <q-list class="q-mt-lg" bordered padding separator>
         <q-item-label header>More</q-item-label>

         <q-item to="/settings/help" v-ripple>
            <q-item-section>
               <q-item-label>Help</q-item-label>
            </q-item-section>
            <q-item-section avatar>
               <q-icon name="chevron_right" />
            </q-item-section>
         </q-item>

         <q-item clickable v-ripple @click="visitWebsite()">
            <q-item-section>
               <q-item-label>Visit our website</q-item-label>
            </q-item-section>
            <q-item-section avatar>
               <q-icon name="chevron_right" />
            </q-item-section>
         </q-item>

         <q-item clickable v-ripple @click="emailUs()">
            <q-item-section>
               <q-item-label>Email us</q-item-label>
            </q-item-section>
            <q-item-section avatar>
               <q-icon name="chevron_right" />
            </q-item-section>
         </q-item>
      </q-list>
   </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { openURL } from "quasar"

export default {
   computed: {
      ...mapGetters("settings", ["settings"]),
      show12HourTimeFormat: {
         get() {
            return this.settings.show12HourTimeFormat
         },
         set(value) {
            this.updateSettings({ show12HourTimeFormat: value })
         }
      },
      showTasksInOneList: {
         get() {
            return this.settings.showTasksInOneList
         },
         set(value) {
            this.updateSettings({ showTasksInOneList: value })
         }
      }
   },
   methods: {
      ...mapActions("settings", ["updateSettings"]),
      visitWebsite() {
         openURL("https://www.google.com")
      },
      emailUs() {
         window.location.href =
            "mailto:troy@34fame.com?subject=Awesome Todo Feedback"
      }
   }
}
</script>
