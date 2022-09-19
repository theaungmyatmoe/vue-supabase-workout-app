<script lang="ts" setup>
import Card from "@/components/Card.vue";
import {supabase} from "@/services/supabase";


let {data: workouts, error} = await supabase
    .from('workouts')
    .select('*')
    .order('id', {ascending: false})


</script>

<template>
  <div class="grid mx-4 gap-y-4 sm:mx-auto sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
    <Card
        v-for="workout in workouts"
        :key="workout.id"
        :name="workout.name"
        :type="workout.type"
    />
  </div>
</template>



