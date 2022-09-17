<script lang="ts" setup>
import FormInput from "@/components/FormInput.vue";
import type {User} from "@/types/user.types";
import {supabase} from "@/services/supabase";
import {useRouter} from "vue-router";

const router = useRouter();

const user = $ref<User>({
  email: '',
  password: '',
})

const login = async () => {

  let {error} = await supabase.auth.signInWithPassword(user)

  if (error) {
    // TODO: handle error with ui
    alert(error.message)
    return;
  }

  await router.push({name: 'Home'})
}

</script>

<template>
  <div class="bg-indigo-600 mx-4 px-6 py-8 rounded-lg md:max-w-2xl md:mx-auto ">
    <h2 class="text-gray-50 text-xl font-medium mb-6 sm:mb-8 sm:text-2xl">Login</h2>
    <form
        class="flex flex-col gap-y-6 mb-6"
        @submit.prevent="login"
    >
      <FormInput
          label="Email"
          type="text"
          placeholder="you@example.com"
          v-model="user.email"
      />

      <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          v-model="user.password"
      />


      <button type="submit"
              class="mt-2 transition-all ease-out duration-300 w-full px-4 py-2.5 flex justify-center items-center text-gray-50 bg-indigo-700 rounded-lg hover:bg-indigo-900/50">
        Login
      </button>
    </form>

    <!--    Already have an account -->
    <div class="flex justify-center items-center gap-x-2 text-gray-50 text-sm tracking-wide">
      <span>Dont't have an account? </span>
      <router-link :to="{name:'SignUp'}" class="bg-indigo-700/90 px-4 py-2 rounded-lg hover:opacity-90">Sign Up
      </router-link>
    </div>

  </div>
</template>
