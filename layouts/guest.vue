<template>
    <slot/>
</template>
<script setup>
useHead({
  htmlAttrs: {
    class: 'h-full'
  },
  bodyAttrs: {
    class: 'h-full bg-gray-100'
  }
})</script>