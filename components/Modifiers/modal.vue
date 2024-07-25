<template>
  <div id="ModifierModal" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 max-h-screen overflow-y-auto">
        <!-- Modal header -->
        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ modelValue.id ? 'Edit' : 'Add' }} Modifier
          </h3>
          <button type="button" @click="close"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form @submit.prevent="save">
          <div class="grid gap-4 sm:grid-cols-2 mb-[1%]">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" name="name" id="name" v-model="modelValue.name" required
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E10A23] dark:focus:border-[#E10A23]"
                placeholder="Name" />
            </div>
            <div>
              <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
              <button id="ModifierType" data-dropdown-toggle="TypeModifier"
                class="text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full p-2.5 text-center inline-flex items-center justify-between dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                type="button">
                {{ modelValue.type ? modelValue.type : "Select Type" }}
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="TypeModifier"
              style="width: 300px;"
                class="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="ModifierType">
                  <li v-for="type in Types" :key="type.id">

                    <a @click.prevent="selectType(type.id)"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ type.id
                      }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="items-left justify-left text-left grid  grid-cols-2  gap-4">
            <div class="flex flex-col  p-4">
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">Is it Required?</span>
              <label class="flex items-left justify-left text-left cursor-pointer">
                <input type="checkbox" v-model="modelValue.required" class="sr-only peer" />
                <div
                  class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E10A23]">
                </div>

              </label>
            </div>

            <div v-if="modelValue.type == 'multiple'" class="flex flex-col items-center justify-center p-4">
              <label for="number-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Limit</label>
              <input type="number" id="number-input" v-model.number="modelValue.limit" min="1" max="10"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Maximum 10" required />
            </div>

          </div>

          <h2 class="text-sm font-medium text-gray-900">Modifier Items</h2>
          <div class="overflow-y-auto max-h-80">
            <div class="grid grid-cols-11 gap-2 px-2 py-2" v-for="(item, idx) in modelValue.items" :key="idx">
              <div class="sm:col-span-5 border border-gray-300 rounded-md px-3 py-2">
                <input type="text" name="name" id="item-name"
                  class="block w-full border-0 p-0 text-gray-900 placeholder-gray-700 focus:ring-0 sm:text-sm"
                  placeholder="Item Name" v-model="item.name" required>
              </div>
              <div class="sm:col-span-5 border border-gray-300 rounded-md px-3 py-2">
                <input type="number" pattern="[0-9]*" title="Please enter a whole number without any decimal points."
                  name="item-price" id="item-price"
                  class="block w-full border-0 p-0 text-gray-900 placeholder-gray-700 focus:ring-0 sm:text-sm"
                  placeholder="Price in cents" v-model="item.price" required />
              </div>
              <!--delete icon button-->
              <button @click="removeItem(idx)"
                class="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="w-6 h-6 justify-center text-[#E10A23] dark:text-white inline" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 grid grid-cols-2 gap-4">
            <button type="button" @click="addItem"
              class="col-span-2 text-[#E10A23] hover:text-white border border-[#E10A23] hover:bg-[#E10A23] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              ADD Item
            </button>
            <button type="submit"
              class="text-white bg-[#E10A23] w-full hover:bg-[#E10A23] focus:ring-4 focus:outline-none focus:ring-[#E10A23] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#E10A23] dark:hover:bg-[#E10A23] dark:focus:ring-[#E10A23]">
              {{ modelValue.id ? 'Edit' : 'Add' }} Modifier
            </button>
            <button type="button"
              class="text-[#E10A23] bg-white w-full border border-[#E10A23] hover:bg-[#E10A23] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#E10A23] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#E10A23] dark:hover:bg-[#E10A23]-700 dark:focus:ring-[#E10A23]"
              data-modal-toggle="ModifierModal" @click="close">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initModals, initDropdowns, Modal } from "flowbite";

const modal = ref(null);

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(["update", "create", "close"]);

const Types = [
  { name: "single", id: "single" },
  { name: "multiple", id: "multiple" }
];

const selectType = (id) => {
  props.modelValue.type = id;
};

const save = () => {
  if (props.modelValue.id) {
    emit("update", props.modelValue);
  } else {
    emit("create", props.modelValue);
  }
  close();
};

const close = () => {
  if (modal.value) modal.value.hide();
  emit("close");
};

const addItem = () => {
  if (!props.modelValue.items) props.modelValue.items = [];
  props.modelValue.items.push({ name: "", price: null });
};

const removeItem = (index) => {
  props.modelValue.items.splice(index, 1);
};

onMounted(() => {
  initModals();
  initDropdowns();

  const $modalElement = document.querySelector("#ModifierModal");
  const modalOptions = {
    closable: false,
  };
  if ($modalElement) {
    modal.value = new Modal($modalElement, modalOptions);
  }
  if (modal.value) modal.value.show();
});


</script>
