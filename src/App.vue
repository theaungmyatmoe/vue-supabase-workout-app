<script lang="ts" setup>
import StickyNavBar from "@/views/StickyNavBar.vue";
</script>

<template>
  <section>
    <!--    Navbar -->
    <StickyNavBar/>
    <main class="container mt-8 sm:max-w-lg md:max-w-3xl lg:max-w-4xl">
      <RouterView/>
    </main>
  </section>
</template>