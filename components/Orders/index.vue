<template>
  <!-- Dropdown menu -->
  <div
    class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
    id="locationsdropdown">
    <ul class=" text-white dark:text-gray-300 border border-[#E10A23] rounded-xl" aria-labelledby="locationsdropdown">
      <li v-for="location in locations" :key="location.id" @click="selectLocation(location)"
        :class="{ 'bg-white': selectedLocation && selectedLocation.id === location.id }"
        class="px-4 py-2 rounded-xl text-[#E10A23] hover:bg-[#E10A23] hover:text-white cursor-pointer">
        {{ location.name }}
      </li>
    </ul>
  </div>
  <section>
    <div class="mx-auto">
      <!-- Start coding here -->
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div
          class="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4">
          <form @submit.prevent="fetchOrders" class="z-50 w-full flex items-center">

            <button type="button"
              class="w-52 text-black border border-[#E10A23] focus:ring-2 focus:outline-none focus:ring-[#E10A23] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-gray-200 dark:hover:bg-[#E10A23] dark:focus:ring-[#E10A23] mr-5"
              id="user-menu-button" aria-expanded="false" data-dropdown-toggle="locationsdropdown">
              {{ selectedLocation ? selectedLocation.name : 'Select Location' }}
            </button>
            <div date-rangepicker id="orderDatePicker" class="flex items-center">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-[#E10A23] dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input v-model="startDate" datepicker datepicker-format="dd/mm/yyyy" name="start" type="text"
                  class="bg-gray-50 border border-[#E10A23] text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E10A23] dark:focus:border-[#E10A23]"
                  placeholder="Select date start" required>
              </div>
              <span class="mx-4 text-gray-500">to</span>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-[#E10A23] dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input v-model="endDate" name="end" type="text"
                  class="bg-gray-50 border border-[#E10A23] text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E10A23] dark:focus:border-[#E10A23]"
                  placeholder="Select date end" required>
              </div>
            </div>

            <div class="relative ml-10">
              <button
                class="w-auto flex items-center justify-center p-2.5 text-white text-sm focus:outline-none rounded-lg bg-[#E10A23] border border-gray-300 hover:bg-gray-100 hover:text-[#E10A23] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-4 py-3">Order ID</th>
                <th scope="col" class="px-4 py-3">Order Number</th>
                <th scope="col" class="px-4 py-3">Status</th>
                <th scope="col" class="px-4 py-3">Source</th>
                <th scope="col" class="px-4 py-3">Total</th>
                <th scope="col" class="px-4 py-3">Created At</th>
                <th scope="col" class="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-gray-700" v-for="(order, index) in filteredOrders" :key="index">
                <td class="px-4 py-3">{{ order.id }}</td>
                <td class="px-4 py-3">{{ order.number }}</td>
                <td class="px-4 py-3">{{ order.status }}</td>
                <td class="px-4 py-3">{{ order.source }}</td>
                <td class="px-4 py-3">{{ order.total }}</td>
                <td class="px-4 py-3">{{ order.created_at }}</td>
                <td><button type="button" @click="loadOrder(order)"
                    class="text-[#E10A23] hover:text-white border border-[#E10A23] hover:bg-[#E10A23] focus:ring-4 focus:outline-none focus:ring-[#E10A23] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-[#E10A23]"><svg
                      class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2"
                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                      <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <OrdersOrdermodal v-if="order" v-model="order" @close="close" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { initFlowbite } from 'flowbite'
import Datepicker from 'flowbite-datepicker/Datepicker';

const orders = ref([]);
const locations = ref([]);
const selectedLocation = ref(null);
const startDate = ref('');
const endDate = ref('');
const order = ref(null);


const close = () => {
  order.value = null
}

const loadOrder = async (o) => {
    if (o?.id) {
        order.value = o
    } else {
        order.value = {}
    }
}

// Computed property for filtered orders
const filteredOrders = computed(() => {
  if (!selectedLocation.value || !startDate.value || !endDate.value) {
    return [];
  }

  let filtered = orders.value.filter(order => {
    return order.location_id === selectedLocation.value.id &&
      new Date(order.created_at) >= new Date(startDate.value) &&
      new Date(order.created_at) <= new Date(endDate.value);
  });

  return filtered;
});

const fetchOrders = async () => {
  if (!selectedLocation.value || !startDate.value || !endDate.value) {
    return;
  }

  const { data, error } = await useSupabaseClient().from('orders')
    .select('*')
    .eq('location_id', selectedLocation.value.id)
    .gte('created_at', startDate.value + ' 00:00')
    .lt('created_at', endDate.value + ' 23:59');

  if (error) {
    console.error(error);
  } else {
    orders.value = data;
  }
};

const fetchLocations = async () => {
  const { data, error } = await useSupabaseClient()
    .from('locations')
    .select('*');

  if (error) {
    console.error(error);
  } else {
    locations.value = data;
  }
};

const selectLocation = (location) => {
  selectedLocation.value = location;
};

onMounted(async () => {
  initFlowbite();
  await fetchLocations();
});
</script>