<template>
  <div class="grid grid-cols-1 gap-2 sm:grid-cols-12 px-8 py-2">
    <div v-for="(file, index) in files" :key="file.id" class="sm:col-span-4">
      <img class="block w-full border-0 p-0 focus:ring-0 sm:text-sm" style="height: 200px; object-fit: cover;"
        :src="mediaURL + file.name" :alt="file.name" />
      <!--two icon buttons one select and other remove -->
      <div class="grid grid-cols-1 gap-0 sm:grid-cols-2">
        <button @click="selectFile(file)"
          class="sm:col-span-1 border border-gray-300 text-gray-600 font-bold py-1 px-2 rounded inline-flex items-center">
          <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 11.917 9.724 16.5 19 7.5" />
          </svg>
          <span>Select</span>
        </button>
        <button @click="deleteFile(file, index)"
          class="sm:col-span-1 border border-gray-300 text-gray-600 font-bold py-1 px-2 rounded inline-flex items-center">
          <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
              clip-rule="evenodd" />
          </svg>
          <span>Remove</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mediaURL = `https://serv.restohub.us/storage/v1/object/public/resto-${useBusiness().getBusiness.id}/`

const { data } = await useSupabaseClient().storage.from(`resto-${useBusiness().getBusiness.id}`).list('', {
  limit: 100,
  offset: 0,
  sortBy: { column: 'name', order: 'asc' },
})

const files = ref(data)

const emit = defineEmits(["selected"]);

const deleteFile = async (file, index) => {
  await useSupabaseClient().storage.from(`resto-${useBusiness().getBusiness.id}`).remove([file.name])
  files.value.splice(index, 1)
};

const selectFile = (file) => {
  emit("selected", mediaURL + file.name);
};
</script>
