<script lang="ts" setup>

import CardList from "@/components/CardList.vue";
import {supabase} from "@/services/supabase";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore()

// listen supabase auth state
supabase.auth.onAuthStateChange((_, session) => {
  if (!session) return;

  authStore.setUser(session)
})

</script>

<template>
  <CardList/>
</template>