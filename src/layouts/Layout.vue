<template>
   <q-layout view="hHh lpR fFf">
      <q-header elevated>
         <q-toolbar>
            <q-toolbar-title class="absolute-center">
               Awesome Todo
            </q-toolbar-title>
            <q-space />
            <q-btn
               v-if="!authenticated"
               flat
               icon-right="account_circle"
               label="Login"
               to="/auth"
            />
            <q-btn
               v-if="authenticated"
               flat
               icon-right="account_circle"
               label="Logout"
               @click="logout"
            />
         </q-toolbar>
      </q-header>

      <q-footer>
         <q-tabs>
            <q-route-tab
               v-for="(moduleLink, idx) in moduleLinks"
               exact
               :key="idx"
               :to="moduleLink.to"
               :icon="moduleLink.icon"
               :label="moduleLink.label"
            />
         </q-tabs>
      </q-footer>

      <q-drawer
         v-model="leftDrawerOpen"
         v-if="authenticated"
         bordered
         content-class="bg-primary"
         :breakpoint="767"
         :width="240"
      >
         <q-list dark>
            <q-item-label header>
               Navigation
            </q-item-label>

            <q-item
               v-for="(moduleLink, idx) in moduleLinks"
               clickable
               exact
               class="text-grey-5"
               :key="idx"
               :to="moduleLink.to"
            >
               <q-item-section avatar>
                  <q-icon :name="moduleLink.icon" />
               </q-item-section>
               <q-item-section>
                  <q-item-label>{{ moduleLink.label }}</q-item-label>
               </q-item-section>
            </q-item>

            <q-item
               v-if="$q.platform.is.electron"
               clickable
               class="text-grey-5 absolute-bottom"
               @click="quitApp"
            >
               <q-item-section avatar>
                  <q-icon name="power_settings_new" />
               </q-item-section>
               <q-item-section>
                  <q-item-label>Quit</q-item-label>
               </q-item-section>
            </q-item>
         </q-list>
      </q-drawer>

      <q-page-container>
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
   data() {
      return {
         leftDrawerOpen: true,
         moduleLinks: [
            {
               label: "Todo",
               icon: "list",
               to: "/"
            },
            {
               label: "Settings",
               icon: "settings",
               to: "/settings"
            }
         ]
      }
   },
   computed: {
      ...mapState("auth", ["authenticated"])
   },
   methods: {
      ...mapActions("auth", ["logout"]),
      quitApp() {
         this.$q
            .dialog({
               title: "Confirm",
               message: "Are you sure you want to quit?",
               cancel: true,
               persistent: true
            })
            .onOk(() => {
               if (this.$q.platform.is.electron) {
                  require("electron").ipcRenderer.send("quit-app")
               }
            })
      }
   }
}
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
   .q-footer {
      display: none;
   }
}
.q-drawer {
   .q-router-link--exact-active {
      color: white !important;
   }
}

.platform-ios {
   .q-header {
      padding-top: constant(safe-area-insert-top);
      padding-top: env(safe-area-inset-top);
   }
   .q-footer {
      padding-bottom: constant(safe-area-insert-bottom);
      padding-bottom: env(safe-area-inset-bottom);
   }
}
</style>
