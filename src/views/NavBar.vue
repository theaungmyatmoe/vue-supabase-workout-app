<script setup>
import {useToggle} from "@/composables/toggle";

const {on: is_open, toggle} = $(useToggle())

</script>

<template>
  <div>
    <nav
        class="bg-indigo-600 px-12 py-3 sm:py-2  backdrop-filter backdrop-blur-sm bg-opacity-90"
        :class="!is_open ? 'shadow shadow-indigo-50/20' : ''"
    >
      <div class="container md:max-w-4xl flex justify-between items-center ">
        <!--    Logo -->
        <div class="group flex items-center gap-x-2 md:gap-x-3 ">
          <!--        Logo img -->
          <div
              class="transition-colors duration-300 bg-white rounded-full p-2 shadow-sm ring ring-indigo-400 group-hover:opacity-95">
            <svg class="w-9 h-9 text-indigo-600" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.4 7H4.6C4.26863 7 4 7.26863 4 7.6V16.4C4 16.7314 4.26863 17 4.6 17H7.4C7.73137 17 8 16.7314 8 16.4V7.6C8 7.26863 7.73137 7 7.4 7Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                  d="M19.4 7H16.6C16.2686 7 16 7.26863 16 7.6V16.4C16 16.7314 16.2686 17 16.6 17H19.4C19.7314 17 20 16.7314 20 16.4V7.6C20 7.26863 19.7314 7 19.4 7Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                  d="M1 14.4V9.6C1 9.26863 1.26863 9 1.6 9H3.4C3.73137 9 4 9.26863 4 9.6V14.4C4 14.7314 3.73137 15 3.4 15H1.6C1.26863 15 1 14.7314 1 14.4Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                  d="M23 14.4V9.6C23 9.26863 22.7314 9 22.4 9H20.6C20.2686 9 20 9.26863 20 9.6V14.4C20 14.7314 20.2686 15 20.6 15H22.4C22.7314 15 23 14.7314 23 14.4Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>

          <h1 class="text-lg text-white font-bold md:font-bold group-hover:opacity-95">Workout Tracker</h1>
        </div>

        <!--      Desktop nav -->
        <div class="hidden sm:flex gap-x-8">
          <router-link :to="{name:'Home'}" class="transition-colors duration-300 text-white hover:text-indigo-50">Home
          </router-link>
          <router-link :to="{name:'Login'}" class="transition-colors duration-300 text-white hover:text-indigo-50">
            Login
          </router-link>
          <router-link :to="{name:'SignUp'}" class="transition-colors duration-300 text-white hover:text-indigo-50">Sign
            Up
          </router-link>
        </div>

        <!--      Mobile menu btn -->
        <button
            class="group sm:hidden"
            @click="toggle"
        >
          <svg class="w-8 h-8 text-white group-hover:opacity-90" aria-hidden="true" fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </nav>

    <!--      Mobile Nav -->
    <div
        class="absolute w-full bg-indigo-600 pb-4  shadow-lg sm:opacity-0 sm:invisible sm:sr-only backdrop-filter backdrop-blur-sm bg-opacity-90 shadow shadow-indigo-50/20"
        v-show="is_open"
    >
      <ul class="px-10 py-3 flex flex-col gap-y-2">
        <router-link :to="{name:'Home'}" class="text-white bg-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-700/90">
          Home
        </router-link>
        <router-link :to="{name:'Home'}" class="text-white bg-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-700/90">
          Login
        </router-link>
        <router-link :to="{name:'SignUp'}" class="text-white bg-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-700/90">
          Sign Up
        </router-link>
      </ul>
    </div>
  </div>
</template>