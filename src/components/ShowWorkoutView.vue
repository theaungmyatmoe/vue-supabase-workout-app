<script setup lang="ts">

import ShowWorkout from "@/components/ShowWorkout.vue";
import LoadingPulse from "@/components/LoadingPulse.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <ShowWorkout/>
    </template>
    <template #fallback>
      <LoadingPulse/>
    </template>
  </Suspense>
</template>

