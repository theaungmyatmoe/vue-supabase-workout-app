<script lang="ts" setup>

import CardList from "@/components/CardList.vue";
import LoadingPulse from "@/components/LoadingPulse.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <CardList/>
    </template>
    <template #fallback>
      <LoadingPulse/>
    </template>
  </Suspense>
</template>