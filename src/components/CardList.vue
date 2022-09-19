<script lang="ts" setup>
import Card from "@/components/Card.vue";
import {supabase} from "@/services/supabase";
import {useAuthStore} from "@/stores/auth";
import {data} from "autoprefixer";


let {data: workouts, error} = await supabase
    .from('workouts')
    .select('*')
    .order('id', {ascending: false})

const hasWorkouts = workouts!.length > 0 ?? false;

</script>

<template>
  <div
      class="grid mx-4 my-8 gap-y-4 sm:mx-auto sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
      v-if="hasWorkouts"
  >
    <Card
        v-for="workout in workouts"
        :key="workout.id"
        :workout="workout"
    />
  </div>
  <div v-else
       class="flex flex-col mx-3 items-center gap-y-6 px-8 py-9 md:py-12 rounded-lg border border-4 border-indigo-600 bg-indigo-300/30">
    <p class="text-indigo-800 text-center text-xs md:text-lg tracking-wide">There is no exercise records.</p>
    <router-link
        :to="{name:'CreateWorkout'}"
        class="transition-colors duration-200 bg-indigo-700/95 text-gray-50 px-4 py-2 rounded-lg hover:opacity-95">
      Create exercise
    </router-link>
  </div>
</template>



