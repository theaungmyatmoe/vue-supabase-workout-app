<script lang="ts" setup>
import NavBar from './views/NavBar.vue'
import Card from "@/components/Card.vue";

const {foo} = defineProps(['foo'])
console.log(foo)
</script>

<template>
  <div>
    <header class="sticky top-0 z-10">
      <NavBar/>
    </header>

    <main class="container mt-8 sm:max-w-lg md:max-w-3xl lg:max-w-4xl">
      <div class="grid mx-4 gap-y-4 sm:mx-auto sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        <!--        Card -->
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  </div>
</template>