<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
useHead({
  htmlAttrs: {
    class: 'h-full bg-gray-100'
  },
  bodyAttrs: {
    class: 'h-full'
  }
})
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>