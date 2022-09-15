<script lang="ts" setup>
import FormInput from "@/components/FormInput.vue";
import {reactive} from "vue";

interface User {
  username: string,
  email: string,
  password: string,
  confirmPassword?: string,
}

const user = $ref<User>({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

</script>

<template>
  <div class="bg-indigo-600 mx-4 px-6 py-8 rounded-lg md:max-w-2xl md:mx-auto ">
    <h2 class="text-gray-50 text-xl font-medium mb-6 sm:mb-8 sm:text-2xl">Sign Up</h2>
    <form class="flex flex-col gap-y-6">
      <FormInput
          label="Email"
          type="text"
          placeholder="you@example.com"
          v-model="user.username"
      />

      <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          v-model="user.email"
      />

      <FormInput
          label="Confirm Password"
          type="password"
          placeholder="Cofirm your password"
          v-model="user.confirmPassword"
      />

      <button type="submit"
              class="mt-2 transition-all ease-out duration-300 w-full px-4 py-2.5 flex justify-center items-center text-gray-50 bg-indigo-700 rounded-lg hover:bg-indigo-900/50">
        Submit
      </button>
    </form>

  </div>
</template>
