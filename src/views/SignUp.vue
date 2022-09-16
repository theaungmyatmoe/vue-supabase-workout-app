<script lang="ts" setup>
import FormInput from "@/components/FormInput.vue";
import type {User} from "@/global/user.types";
import {supabase} from "@/services/supabase";
import {useRouter} from "vue-router";

const user = $ref<User>({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const router = useRouter();

const login = async () => {

  // no email confirmation
  const {error} = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  })

  if (error) {
    alert(error.message)
    return
  }

  await router.push({name: "Login"})

}

</script>

<template>
  <div class="bg-indigo-600 mx-4 px-6 py-8 rounded-lg md:max-w-2xl md:mx-auto ">
    <h2 class="text-gray-50 text-xl font-medium mb-6 sm:mb-8 sm:text-2xl">Sign Up</h2>

    <!--    sign up form -->
    <form
        class="flex flex-col gap-y-6 mb-6"
        @click.prevent="login"
    >
      <FormInput
          label="Username"
          type="text"
          placeholder="@username"
          v-model="user.username"
      />

      <FormInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          v-model="user.email"
      />

      <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          v-model="user.password"
      />

      <FormInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          v-model="user.confirmPassword"
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
