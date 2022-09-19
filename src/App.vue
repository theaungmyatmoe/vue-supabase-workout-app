<script lang="ts" setup>
import StickyNavBar from "@/views/StickyNavBar.vue";
import LoadingPulse from "@/components/LoadingPulse.vue";
</script>

<template>
  <section>
    <!--    Navbar -->
    <StickyNavBar/>
    <main class="container mt-8 sm:max-w-lg md:max-w-3xl lg:max-w-4xl">
      <Suspense>
        <template #default>
          <RouterView/>
        </template>
        <template #fallback>
          <LoadingPulse/>
        </template>
      </Suspense>
    </main>
  </section>
</template>