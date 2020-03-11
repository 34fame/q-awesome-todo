<template>
   <form @submit.prevent="submitForm">
      <div class="row q-mb-md">
         <q-banner class="bg-grey-3 col">
            <template v-slot:avatar>
               <q-icon name="account_circle" color="primary" />
            </template>
            Register to access your ToDos anywhere!
         </q-banner>
      </div>

      <div class="row q-mb-md">
         <q-input
            class="col"
            label="Email"
            lazy-rules
            outlined
            v-model="formData.email"
            stack-label
            ref="email"
            :rules="[
               val => isValidEmail(val) || 'Please enter a valid email address'
            ]"
         />
      </div>

      <div class="row q-mb-md">
         <q-input
            type="password"
            class="col"
            label="Password"
            lazy-rules
            outlined
            v-model="formData.password"
            stack-label
            ref="password"
            :rules="[
               val => val.length >= 6 || 'Please enter at least six characters'
            ]"
         />
      </div>

      <div class="row q-mb-md">
         <q-space />
         <q-btn type="submit" color="primary" label="Register" />
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
      ...mapActions("auth", ["register"]),
      submitForm() {
         this.$refs.email.validate()
         this.$refs.password.validate()

         if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
            this.register(this.formData)
         }
      },
      isValidEmail(email) {
         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

         return re.test(String(email).toLowerCase())
      }
   }
}
</script>

<style></style>
