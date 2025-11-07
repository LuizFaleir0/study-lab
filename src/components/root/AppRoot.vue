<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  if (import.meta.env.DEV) {
    console.info('⚙️ AppRoot mounted')
  }
})
</script>

<template>
  <div class="flex flex-col min-h-svh">
    <slot />
  </div>
</template>
