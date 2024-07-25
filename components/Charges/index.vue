<template>
  <section class="">
    <div class="mx-auto ">
      <!-- Start coding here -->
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="text" id="simple-search" v-model="searchFilter"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E10A23] dark:focus:border-[#E10A23]"
                  placeholder="Search" required>
              </div>
            </form>
          </div>
          <div class="relative">
            <button type="button" @click="toggleDropdown"
              class="text-[#E10A23] hover:text-white border-2 border-[#E10A23] hover:bg-[#E10A23] focus:ring-4 focus:outline-none focus:ring-[#E10A23] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#E10A23] dark:text-[#E10A23] dark:hover:text-white dark:hover:bg-[#E10A23] dark:focus:ring-[#E10A23]">
              Export
            </button>
            <div v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-20">
              <button @click="exportData('csv')"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                Export as CSV
              </button>
              <button @click="exportData('xls')"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                Export as XLS
              </button>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-4 py-3">Charge ID</th>
                <th scope="col" class="px-4 py-3">Amount</th>
                <th scope="col" class="px-4 py-3">Currency</th>
                <th scope="col" class="px-4 py-3">Date</th>
                <th scope="col" class="px-4 py-3">Fee</th>
                <th scope="col" class="px-4 py-3">Status</th>
                <th scope="col" class="px-4 py-3">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-gray-700" v-for="(charge, index) in filteredCharges" :key="index">
                <td class="px-4 py-3">{{ charge.id }}</td>
                <td class="px-4 py-3">{{ charge.amount }}</td>
                <td class="px-4 py-3">{{ charge.currency }}</td>
                <td class="px-4 py-3">{{ charge.created_at }}</td>
                <td class="px-4 py-3">{{ charge.fee }}</td>
                <td class="px-4 py-3">{{ charge.status }}</td>
                <td class="px-4 py-3">{{ charge.payment_method }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const searchFilter = ref('');
const charges = ref([]);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const fetchCharges = async () => {
  let { data, error } = await useSupabaseClient().from('charges').select('*').order('created_at', { ascending: false });
  if (error) console.error(error);
  charges.value = data;
};

const filteredCharges = computed(() => {
  if (searchFilter.value) {
    return charges.value.filter(item =>
      String(item.id).toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      String(item.amount).includes(searchFilter.value) ||
      String(item.currency).toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      String(item.status).toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      String(item.payment_method).toLowerCase().includes(searchFilter.value.toLowerCase())
    );
  } else {
    return charges.value;
  }
});

const exportData = (format) => {
  const data = filteredCharges.value.map(charge => ({
    'Charge ID': charge.id,
    'Amount': charge.amount,
    'Currency': charge.currency,
    'Date': charge.created_at,
    'Fee': charge.fee,
    'Status': charge.status,
    'Payment Method': charge.payment_method,
  }));

  if (format === 'csv') {
    const csv = data.map(row => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    saveAs(blob, 'charges.csv');
  } else if (format === 'xls') {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Charges');
    XLSX.writeFile(workbook, 'charges.xlsx');
  }

  isDropdownOpen.value = false;
};

onMounted(() => {
  initFlowbite();
  fetchCharges();
});
</script>

<style>
.overflow-x-auto {
  min-height: calc(70vh);
  /* Adjust the height as needed */
}
</style>
