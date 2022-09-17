<script lang="ts" setup>
import FormInput from "@/components/FormInput.vue";
import type {User} from "@/types/user.types";
import {supabase} from "@/services/supabase";
import {useRouter} from "vue-router";
import useVuelidate from '@vuelidate/core'
import {email, required} from '@vuelidate/validators'
import {TYPE, useToast} from "vue-toastification";
import {useAuthStore} from "@/stores/auth";

const router = useRouter();
const toast = useToast();
const authStore = useAuthStore()


let user = $ref<User>({
  email: '',
  password: '',
})

const rules = {
  email: {required, email},
  password: {required}
}

const v$ = $(useVuelidate(rules, user))

const login = async () => {

  const result = await v$.$validate()

  if (!result) return;

  let {data, error} = await supabase.auth.signInWithPassword(user)


  if (error) {
    user = {
      ...user
    }
    toast(error.message, {
      type: TYPE.ERROR
    })
    return;
  }

  if (!data || !data.session) {
    toast("Please login again.", {
      type: TYPE.ERROR
    })
    return;
  }

  // set session token
  await authStore.setUser(data.session)

  toast("Account logged in successfully.", {
    type: TYPE.SUCCESS
  })
  await router.push({name: 'Home'})
}
</script>

<template>
  <div class="bg-indigo-600 mx-4 px-6 py-8 rounded-lg sm:mx-auto sm:max-w-sm md:max-w-lg">

    <h2 class="text-gray-50 text-xl font-medium mb-6 sm:mb-8 sm:text-2xl">Login</h2>

    <form
        class="flex flex-col gap-y-6 mb-6"
        @submit.prevent="login"
    >
      <div>
        <FormInput
            label="Email"
            type="text"
            placeholder="you@example.com"
            v-model="user.email"
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
            v-model="user.password"
            :className="v$.password.$error ? 'ring ring-red-500 focus:ring-red-500' : ''"
        />
        <div class="mt-3 text-red-500" v-if="v$.password.$error" v-for="error in v$.password.$errors" :key="error.$uid">
          {{ error.$message }}
        </div>
      </div>


      <button
          type="submit"
          class="mt-2 transition-all ease-out duration-300 w-full px-4 py-2.5 flex justify-center items-center text-gray-50 bg-indigo-700 rounded-lg hover:bg-indigo-900/50"
      >
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
