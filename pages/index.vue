<template>



    test


</template>
<script setup>
definePageMeta({
  middleware: ["auth"]
});
const navigation = [
  {
    name: 'menu',
    children: [
      { name: 'Menus', href: '/menu/menus' },
      { name: 'Items', href: '/menu/items' },
      { name: 'Modifiers', href: '/menu/modifiers' },
      { name: 'Categories', href: '/menu/categories' },
    ],
  },
  {
    name: 'shop',
    children: [
      { name: 'Locations', href: '/shop/locations' },
      { name: 'Orders', href: '/shop/orders' },
      { name: 'Location Settings', href: '/shop/location_settings' },
      { name: 'Working Hours', href: '/shop/working_hours' },
    ],
    href: '/shop/locations',
  },
  {
    name: 'finance',
    children: [
      { name: 'Charges', href: '/finance/charges' },
      { name: 'Merchants', href: '/finance/merchants' },
      { name: 'Payouts', href: '/finance/payouts' },
    ],
    href: '/finance/charges',
  },

]
</script>