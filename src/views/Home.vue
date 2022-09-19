<script lang="ts" setup>

import CardList from "@/components/CardList.vue";</script>


<template>
  <Suspense>
    <template #default>
      <CardList/>
    </template>
    <template #fallback>
      Loading
    </template>
  </Suspense>
</template>