<script lang="ts" setup>
import Card from "@/components/Card.vue";
import {supabase} from "@/services/supabase";


let {data: workouts, error} = await supabase
    .from('workouts')
    .select('*')
    .order('id', {ascending: false})


</script>

<template>
  <div class="flex flex-col justify-center">
    <div
        class="grid mx-4 gap-y-4 sm:mx-auto sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        v-if="false"
    >
      <Card
          v-for="workout in workouts"
          :key="workout.id"
          :name="workout.name"
          :type="workout.type"
      />
    </div>
    <div v-else
         class="flex flex-col mx-3 items-center gap-y-6 px-8 py-9 md:py-12 rounded-lg border border-4 border-indigo-600 bg-indigo-300/30">
      <p class="text-indigo-800 text-lg md:text-xl tracking-wide">There is no exercise records.</p>
      <router-link
          :to="{name:'CreateWorkout'}"
          class="transition-colors duration-200 bg-indigo-700/95 text-gray-50 px-4 py-2 rounded-lg hover:opacity-95">
        Create exercise
      </router-link>
    </div>
  </div>
</template>



