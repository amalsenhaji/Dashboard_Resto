<template>
  <aside
    class="fixed top-0 left-0 z-0 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidenav" id="drawer-navigation">
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">

      <ul class=" py-2 space-y-2">
        <li v-for="nav in navigation" :key="nav">
          <button type="button"
            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            :aria-controls="'dropdown-' + nav.name" :data-collapse-toggle="'dropdown-' + nav.name">
            <component :is="nav.icon"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            <span v-if="nav.children" class="flex-1 ml-3 text-left whitespace-nowrap">{{ nav.name }}</span>
            <nuxt-link v-else :to="nav.href"
              class="flex-1 ml-3 text-left whitespace-nowrap">{{
          nav.name
        }}</nuxt-link>
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" v-if="nav.children" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <ul :id="'dropdown-' + nav.name" class="hidden py-2 space-y-2">

            <li v-for="child in nav.children" :key="child">
              <nuxt-link :to="child.href"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{{
          child.name
        }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>

    </div>

  </aside>
</template>
<script setup>
import { initDrawers, initDropdowns } from 'flowbite';
import { onMounted } from 'vue';
initDrawers();
import {
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  BanknotesIcon,
  ClipboardDocumentListIcon
} from '@heroicons/vue/24/solid'
const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Menu',
    children: [
      { name: 'Menus', href: '/menu/menus' },
      { name: 'Items', href: '/menu/items' },
      { name: 'Modifiers', href: '/menu/modifiers' },
      { name: 'Categories', href: '/menu/categories' },
    ],
    icon: ClipboardDocumentListIcon
  },
  {
    name: 'Shop',
    children: [
      { name: 'Locations', href: '/shop/locations' },
      { name: 'Orders', href: '/shop/orders' },
      { name: 'Working Hours', href: '/shop/working_hours' },
    ],
    href: '/shop/locations',
    icon: BuildingStorefrontIcon
  },
  {
    name: 'Finance',
    children: [
      { name: 'Charges', href: '/finance/charges' },
      { name: 'Merchants', href: '/finance/merchants' },
      { name: 'Payouts', href: '/finance/payouts' },
    ],
    href: '/finance/charges',
    icon: BanknotesIcon
  },
  // { name: 'Users',  href: '/users',action: () => pushRoute('/roles'), icon: UsersIcon },
  // { name: 'Orders', href: '#', icon: ShoppingCartIcon },
  // { name: 'Menus', href: '#', icon: InboxIcon },
  // { name: 'Website', href: '#', icon: CursorArrowRippleIcon },
]
onMounted(() => {
  initDrawers();
  initDropdowns();
})
</script>