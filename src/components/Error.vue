<script lang="ts" setup>
const {error} = defineProps<{ error: string }>()
</script>

<template>
  <div class="bg-red-500/95 rounded-lg text-white px-4 py-2 mb-6">
    {{ error }}
  </div>
</template>

