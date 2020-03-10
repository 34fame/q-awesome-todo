<template>
   <q-layout view="hHh lpR fFf">
      <q-header elevated>
         <q-toolbar>
            <q-toolbar-title class="absolute-center">
               Awesome Todo
            </q-toolbar-title>
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
         show-if-above
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
         </q-list>
      </q-drawer>

      <q-page-container>
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script>
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
</style>
