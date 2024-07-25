<template>
<div id="img-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900/50 dark:bg-gray-900/80">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Media library
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="close">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
        <!-- Modal body -->
        <div class=" border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap justify-center items-center -mb-px text-sm font-medium text-center" role="tablist">
            <li v-for="(tab, index) in tabs" :key="index" class="me-2" role="presentation">
              <button :class="['inline-block p-4 border-b-2 rounded-t-lg', { 'border-[#E10A23] text-[#E10A23]': tab.current }]" 
                      @click="selectTab(index)"
                      type="button" 
                      role="tab" 
                      :aria-selected="tab.current">
                {{ tab.name }}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div v-if="tabs[0].current" class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel">
            <MediaBrowser @selected="selected" />
          </div>
          <div v-if="tabs[1].current" class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel">
            <MediaUpload @added="added" />
          </div>
        </div>
        <!-- Modal footer -->
      </div>
    </div>
  </div>
</template>



<script setup>
import { onMounted, ref } from 'vue';
import { initModals, Modal } from 'flowbite';

let modal;

const props = defineProps({
  modelValue: Object,
});

const tabs = ref([
  { name: "Gallery", current: true },
  { name: "Upload", current: false },
]);

onMounted(() => {
  initModals();

  const $modalElement = document.querySelector('#img-modal');
  const modalOptions = {
    closable: false,
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-auto',
  };
  if ($modalElement) {
    modal = new Modal($modalElement, modalOptions);
  }
  modal.show();
});

const emit = defineEmits(["selected", "close"]);
const selected = (data) => {
  modal.hide();
  emit("selected", data);
};
const close = () => {
  modal.hide();
  emit("close");
};

const selectTab = (index) => {
  tabs.value.forEach((tab, idx) => {
    tab.current = idx === index;
  });
};
</script>