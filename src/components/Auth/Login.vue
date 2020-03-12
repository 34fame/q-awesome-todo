<template>
   <form @submit.prevent="submitForm">
      <div class="row q-mb-md">
         <q-banner class="bg-grey-3 col">
            <template v-slot:avatar>
               <q-icon name="account_circle" color="primary" />
            </template>
            Login to access your ToDos!
         </q-banner>
      </div>

      <div class="row q-mb-md">
         <q-input
            class="col"
            label="Email"
            outlined
            type="email"
            v-model="formData.email"
            stack-label
         />
      </div>

      <div class="row q-mb-md">
         <q-input
            type="password"
            class="col"
            label="Password"
            outlined
            v-model="formData.password"
            stack-label
         />
      </div>

      <div class="row q-mb-md">
         <q-space />
         <q-btn type="submit" color="primary" label="Login" />
      </div>
   </form>
</template>

<script>
import { mapActions } from "vuex"

export default {
   data() {
      return {
         formData: {
            email: "",
            password: ""
         }
      }
   },
   methods: {
      ...mapActions("auth", ["login"]),
      submitForm() {
         this.login(this.formData)
      }
   }
}
</script>

<style></style>
