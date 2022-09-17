<script lang="ts" setup>
import FormInput from "@/components/FormInput.vue";
import {supabase} from "@/services/supabase";
import {useRouter} from "vue-router";
import type {User} from "@/types/user.types";
import {computed} from "vue";
import {TYPE, useToast} from "vue-toastification";
import useVuelidate from "@vuelidate/core";
import {email, minLength, required, sameAs} from "@vuelidate/validators";

const router = useRouter();
const toast = useToast();


const formData = $ref({
  email: '',
  password: '',
  confirmPassword: ''
})

const rules = computed(() => {
  return {
    email: {required, email},
    password: {required, minLength: minLength(6)},
    confirmPassword: {required, sameAs: sameAs(formData.password)}
  }
})

const v$ = $(useVuelidate(rules, formData))

const singUp = async () => {

  // client side validation
  const result = await v$.$validate()
  if (!result) return;

  const user: User = {...formData}

  const {error} = await supabase.auth.signUp(user)

  if (error) {
    toast(error.message, {
      type: TYPE.ERROR
    })
    return;
  }


  toast(`
  Account created successfully.
   Please, check your mail to confirm your email.`, {
    type: TYPE.SUCCESS
  })
  await router.push({name: "Login"})
}


</script>

<template>
  <div class="bg-indigo-600 mx-4 my-8 px-6 py-6 rounded-lg sm:mx-auto sm:max-w-sm md:max-w-lg">
    <h2 class="text-gray-50 text-xl font-medium mb-6 sm:mb-8 sm:text-2xl">Sign Up</h2>

    <!--    sign up form -->
    <form
        class="flex flex-col gap-y-6 mb-6"
        @submit.prevent="singUp"
    >

      <div>
        <FormInput
            label="Email"
            type="text"
            placeholder="you@example.com"
            v-model="formData.email"
            :className="v$.email.$error ? 'ring ring-red-500 focus:ring-red-500' : ''"
        />
        <div class="mt-3 text-red-500" v-if="v$.email.$error" v-for="error in v$.email.$errors" :key="error.$uid">
          {{ error.$message }}
        </div>
      </div>

      <div>
        <FormInput
            label="Password"
            type="password"
            placeholder="Type your password"
            v-model="formData.password"
            :className="v$.password.$error ? 'ring ring-red-500 focus:ring-red-500' : ''"
        />
        <div class="mt-3 text-red-500" v-if="v$.password.$error" v-for="error in v$.password.$errors" :key="error.$uid">
          {{ error.$message }}
        </div>
      </div>

      <div>
        <FormInput
            label="Password"
            type="password"
            placeholder="Confirm your password"
            v-model="formData.confirmPassword"
            :className="v$.confirmPassword.$error ? 'ring ring-red-500 focus:ring-red-500' : ''"
        />
        <div class="mt-3 text-red-500" v-if="v$.confirmPassword.$error" v-for="error in v$.confirmPassword.$errors"
             :key="error.$uid">
          {{ error.$message }}
        </div>
      </div>


      <button
          type="submit"
          class="mt-2 transition-all ease-out duration-300 w-full px-4 py-2.5 flex justify-center items-center text-gray-50 bg-indigo-700 rounded-lg hover:bg-indigo-900/50"
      >
        Sign Up
      </button>
    </form>

    <!--    Already have an account -->
    <div class="flex justify-center items-center gap-x-2 text-gray-50 text-sm tracking-wide">
      <span>Already have an account? </span>
      <router-link :to="{name:'Login'}" class="bg-indigo-700/90 px-4 py-2 rounded-lg hover:opacity-90">Login
      </router-link>
    </div>
  </div>
</template>
