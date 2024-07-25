<template>
  <div
    id="add-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ modelValue.id ? "Edit" : "Add" }} Menu
          </h3>
          <button
            type="button"
            @click="close()"
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form @submit.prevent="save()">
          <div class="p-4 md:p-5 space-y-4">
            <input
              type="text"
              id="default-input"
              placeholder="Menu Name"
              v-model="menu.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center justify-center items-center"
              id="default-styled-tab"
              data-tabs-toggle="#add-tab-content"
              data-tabs-active-classes="text-[#E10A23] hover:text-[#E10A23] dark:text-purple-500 dark:hover:text-[#E10A23] border-[#E10A23] dark:border-[#E10A23]"
              data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
              role="tablist"
            >
              <li class="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="profile-styled-tab"
                  data-tabs-target="#add-Categorie"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Categories
                </button>
              </li>
              <li class="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-styled-tab"
                  data-tabs-target="#add-item"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Items
                </button>
              </li>
            </ul>
          </div>
          <div id="add-tab-content">
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="add-Categorie"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <button
                id="addCatdropdownSearchButton"
                data-dropdown-toggle="addCatdropdownSearch"
                class="w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#E10A23] rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                type="button"
              >
                Categories Search<svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="addCatdropdownSearch"
                class="w-[50vw] hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
              >
                <div class="p-3">
                  <label for="input-group-search1" class="sr-only"
                    >Search</label
                  >
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="input-group-search1"
                      v-model="searchFilter"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Categorie"
                    />
                  </div>
                </div>
                <ul
                  class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownSearchButton"
                >
                  <li v-for="(category, index) in Categories" :key="index">
                    <div
                      class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <input
                        id="checkbox-item-111"
                        type="checkbox"
                        class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 rounded focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        :checked="
                          menu.categories.find((c) => c.id === category.id)
                        "
                        @click="toggleCategory(category)"
                      />

                      <label
                        :for="'checkbox-item-' + category.id"
                        class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >{{ category.name }}</label
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <div class="m-[1%]">
                <draggable
                  v-model="menu.categories"
                  handle=".item-handle"
                  tag="ul"
                  role="list"
                  item-key="categories-list"
                  class="mt-3 grid gap-5 grid-cols-1 gap-3"
                >
                  <template #item="{ element, index }">
                    <li
                      :key="index"
                      class="mb-2 p-2 border border-gray-300 bg-white rounded"
                    >
                      <div
                        class="flex flex-1 items-center justify-between truncate rounded-md bg-white"
                      >
                        <div
                          class="flex-shrink-0 flex items-center justify-center w-16 text-black text-sm font-medium rounded-l-md item-handle"
                        >
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M5 7h14M5 12h14M5 17h14"
                            />
                          </svg>
                        </div>
                        <div
                          class="flex-1 truncate px-2 py-2 text-sm leading-5"
                        >
                          <p
                            class="text-black truncate dark:text-gray-100 text-center"
                          >
                            {{ element.name }}
                          </p>
                        </div>
                        <div class="flex-shrink-0 pr-2">
                          <button
                            @click="removeCategory(index, element)"
                            class="text-red-600 hover:text-red-900 dark:hover:text-red-500"
                          >
                            <svg
                              class="w-6 h-6 justify-center text-[#E10A23] dark:text-white inline"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  </template>
                </draggable>
              </div>
            </div>
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="add-item"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <button
                id="addItedropdownSearchButton"
                data-dropdown-toggle="addItedropdownSearch"
                class="w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#E10A23] rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                type="button"
              >
                Items Search<svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                id="addItedropdownSearch"
                class="w-[50vw] hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
              >
                <div class="p-3">
                  <label for="input-group-search2" class="sr-only"
                    >Search</label
                  >
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="input-group-search2"
                      v-model="searchitemsFilter"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Item"
                    />
                  </div>
                </div>
                <ul
                  class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownSearchButton"
                >
                  <li v-for="(item, index) in Items" :key="index">
                    <div
                      class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <input
                        id="checkbox-item-222"
                        type="checkbox"
                        class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 rounded focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        :checked="menu.items.find((i) => i.id === item.id)"
                        @click="toggleItem(item)"
                      />

                      <label
                        :for="'checkbox-item-' + item.id"
                        class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        {{ item.name }}
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                id="dropdownRadioBgHoverButton"
                data-dropdown-toggle="dropdownRadioBgHover"
                class="mt-2 w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-gray-200 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                type="button"
              >
                {{
                  selectedCategory ? selectedCategory.name : "Select Category"
                }}
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                id="dropdownRadioBgHover"
                class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownRadioBgHoverButton"
                >
                  <!-- Add the 'non' option -->
                  <li>
                    <div
                      class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <input
                        id="radio-item-none"
                        type="radio"
                        value=""
                        name="category-radio"
                        class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        @change="resetSelectedCategory()"
                      />
                      <label
                        for="radio-item-none"
                        class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >None</label
                      >
                    </div>
                  </li>
                  <!-- Iterate over categories -->
                  <li v-for="(category, index) in menu.categories" :key="index">
                    <div
                      class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <input
                        :id="'radio-item-' + category.id"
                        type="radio"
                        :value="category.id"
                        name="category-radio"
                        class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        @change="updateSelectedCategory(category)"
                      />
                      <label
                        :for="'radio-item-' + category.id"
                        class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >{{ category.name }}</label
                      >
                    </div>
                  </li>
                </ul>
              </div>

              <div class="m-[1%]">
                <draggable
                  v-model="menu.items"
                  handle=".item-handle"
                  tag="ul"
                  role="list"
                  item-key="menu-items"
                  class="mt-3 grid gap-5 grid-cols-1 gap-3"
                >
                  <template #item="{ element, index }">
                    <li
                      v-if="
                        (selectedCategory &&
                          element.categories.includes(selectedCategory.id)) ||
                        !selectedCategory
                      "
                      :key="index"
                      class="mb-2 p-2 border border-gray-300 bg-white rounded"
                    >
                      <div
                        class="flex flex-1 items-center justify-between truncate rounded-md bg-white"
                      >
                        <div
                          class="flex-shrink-0 flex items-center justify-center w-16 text-black text-sm font-medium rounded-l-md item-handle"
                        >
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M5 7h14M5 12h14M5 17h14"
                            />
                          </svg>
                        </div>
                        <div
                          class="flex-1 truncate px-2 py-2 text-sm leading-5"
                        >
                          <p
                            class="text-black truncate dark:text-gray-100 text-center"
                          >
                            {{ element.name }}
                          </p>
                        </div>
                        <div class="flex-shrink-0 pr-2">
                          <button
                            @click="removeItem(index)"
                            class="text-red-600 hover:text-red-900 dark:hover:text-red-500"
                          >
                            <svg
                              class="w-6 h-6 justify-center text-[#E10A23] dark:text-white inline"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  </template>
                </draggable>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              type="submit"
              class="text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              {{ modelValue.id ? "Edit" : "Add" }} Menu
            </button>
            <button
              type="button"
              @click="close()"
              class="text-[#E10A23] hover:text-white border-2 border-[#E10A23] hover:bg-[#E10A23] focus:ring-4 focus:outline-none focus:ring-[#E10A23] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#E10A23] dark:text-[#E10A23] dark:hover:text-white dark:hover:bg-[#E10A23] dark:focus:ring-[#E10A23]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { initModals, initTabs, initDropdowns, Modal } from "flowbite";
import draggable from "vuedraggable";

let modal;

const props = defineProps({
  modelValue: Object,
});
const emit = defineEmits(["update", "create", "close"]);
const save = () => {
  if (props.modelValue?.id) {
    emit("update", menu.value);
  } else {
    emit("create", menu.value);
  }
  close();
};

const searchFilter = ref();
const searchitemsFilter = ref();
const selectedCategory = ref();

const updateSelectedCategory = (category) => {
  selectedCategory.value = category;
};

const resetSelectedCategory = () => {
  selectedCategory.value = null;
};

const { data: categorieData, error: categorieError } = await useSupabaseClient()
  .from("categories")
  .select("*")
  .eq("business_id", useBusiness().getBusiness.id);
const { data: itemsData, error: itemsError } = await useSupabaseClient()
  .from("items")
  .select("*")
  .eq("business_id", useBusiness().getBusiness.id);

const menu = ref({});

if (props.modelValue.id) {
  menu.value = {
    ...props.modelValue,
    items: props.modelValue.items
      ? itemsData.filter((item) => props.modelValue.items.includes(item.id))
      : [],
    categories: props.modelValue.categories
      ? categorieData.filter((item) =>
          props.modelValue.categories.includes(item.id)
        )
      : [],
  };
} else {
  menu.value = {
    items: [],
    categories: [],
  };
}

const close = () => {
  modal.hide();
  emit("close");
};

const Categories = computed(() => {
  if (searchFilter.value) {
    return categorieData.filter((item) =>
      item.name.toLowerCase().includes(searchFilter.value.toLowerCase())
    );
  } else {
    return categorieData;
  }
});

const Items = computed(() => {
  if (searchitemsFilter.value) {
    return itemsData.filter((item) =>
      item.name.toLowerCase().includes(searchitemsFilter.value.toLowerCase())
    );
  } else {
    return itemsData;
  }
});

onMounted(() => {
  initModals();
  initTabs();
  initDropdowns();

  const $modalElement = document.querySelector("#add-modal");
  const modalOptions = {
    closable: false,
  };
  if ($modalElement) {
    modal = new Modal($modalElement, modalOptions);
  }
  modal.show();
});

const removeCategory = (index, category) => {
  menu.value.categories.splice(index, 1);

  menu.value.items = menu.value.items.filter(
    (item) => !item.categories.includes(category.id)
  );
};

const removeItem = (index) => {
  menu.value.items.splice(index, 1);
};

const toggleCategory = (category) => {
  if (menu.value.categories.find((c) => c.id === category.id)) {
    menu.value.categories.splice(
      menu.value.categories.findIndex((cat) => cat.id === category.id),
      1
    );
  } else {
    menu.value.categories.push(category);
  }
};

const toggleItem = (item) => {
  if (menu.value.items.find((i) => i.id === item.id)) {
    menu.value.items.splice(
      menu.value.items.findIndex((ite) => ite.id === item.id),
      1
    );
  } else {
    menu.value.items.push(item);
  }
};
</script>
