<script lang="ts" setup>

import CardList from "@/components/CardList.vue";
import {supabase} from "@/services/supabase";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore()

supabase.auth.onAuthStateChange((_, session) => {
  console.log(session)

  authStore.setUser(session)
})
</script>

<template>
  <CardList/>
</template>