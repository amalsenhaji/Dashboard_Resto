<template>
  <div class="antialiased">
    <NavBar/><!-- Navbar -->

<!-- Sidebar -->

<SideBar />

    <main class="p-4 md:ml-64 h-auto pt-20 h-full">
      <slot />
    </main>
  </div>
</template>
<script setup>
  useHead({
    htmlAttrs: {
      class: 'h-full bg-gray-100 dark:bg-gray-900'
    },
    bodyAttrs: {
      class: 'h-full bg-gray-100 dark:bg-gray-900'
    }
  })
</script>