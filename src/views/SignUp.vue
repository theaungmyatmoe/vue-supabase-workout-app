<script lang="ts" setup>
import FormInput from "@/components/FormInput.vue";
import {supabase} from "@/services/supabase";
import {useRouter} from "vue-router";
import {$ref} from "vue/macros";
import type {User} from "@/types/user.types";

const email = $ref('')
const password = $ref('')
const confirmPassword = $ref('')

const router = useRouter();

const login = async () => {

  const user: User = {email, password, confirmPassword}

  const {error} = await supabase.auth.signUp(user)

  if (error) {
    // TODO: handle error
    alert(error.message)
    return
  }

  await router.push({name: "Login"})

}

</script>

<template>
  <div class="bg-indigo-600 mx-4 my-8 px-6 py-6 rounded-lg sm:mx-auto sm:max-w-sm md:max-w-lg">
    <h2 class="text-gray-50 text-xl font-medium mb-6 sm:mb-8 sm:text-2xl">Sign Up</h2>

    <!--    sign up form -->
    <form
        class="flex flex-col gap-y-6 mb-6"
        @click.prevent="login"
    >

      <FormInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          v-model="email"
      />

      <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          v-model="password"
      />

      <FormInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          v-model="confirmPassword"
      />

      <button type="submit"
              class="mt-2 transition-all ease-out duration-300 w-full px-4 py-2.5 flex justify-center items-center text-gray-50 bg-indigo-700 rounded-lg hover:bg-indigo-900/50"
      >
        Submit
      </button>
    </form>

    <!--    Already have an account -->
    <div class="flex justify-center items-center gap-x-2 text-gray-50 text-sm tracking-wide">
      <span>Already have an account? </span>
      <router-link to="/" class="bg-indigo-700/90 px-4 py-2 rounded-lg hover:opacity-90">Login</router-link>
    </div>
  </div>
</template>
