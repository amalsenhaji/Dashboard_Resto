<template>
  <div
    id="workinghours-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ modelValue.id ? "Edit" : "Add" }} Working Hours
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

        <form class="px-12 my-6">
          <div class="space-y-4 mb-4">
            <input
              type="text"
              v-model="WorkingHours.name"
              id="default-input"
              placeholder="Working Hours Name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            />
          </div>

          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium items-center justify-center text-center"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
              data-tabs-active-classes="text-[#E10A23] hover:text-[#E10A23] dark:text-purple-500 dark:hover:text-[#E10A23] border-[#E10A23] dark:border-[#E10A23]"
              data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
            >
              <li class="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Working Hours
                </button>
              </li>
              <li class="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Holidays
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div
              class="hidden p-4 rounded-lg"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div
                v-for="(day, dayIndex) in WorkingHours.hours"
                :key="day.day"
                class="mb-6"
              >
                <div class="mb-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-[4rem]">
                      <label
                        :for="day"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >{{ day.day }}</label
                      >
                    </div>
                    <label class="inline-flex items-center me-5 cursor-pointer">
                      <input
                        v-model="WorkingHours.hours[dayIndex].open"
                        type="checkbox"
                        class="sr-only peer"
                      />
                      <div
                        class="relative w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
                      ></div>
                      <span
                        class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Open</span
                      >
                    </label>
                  </div>
                  <div v-if="day.open" class="mt-4">
                    <div
                      v-for="(hour, hourIndex) in day.hours"
                      :key="hourIndex"
                      class="flex items-center justify-between mt-2"
                    >
                      <div class="flex items-center min-w-[4rem]">
                        <label class="ms-2 text-sm text-gray-900">From:</label>
                      </div>
                      <div class="w-full max-w-[10rem]">
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-red-500 dark:text-red-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            ></svg>
                          </div>
                          <input
                            type="time"
                            :id="`start-time-${dayIndex}-${hourIndex}`"
                            v-model="
                              WorkingHours.hours[dayIndex].hours[hourIndex].from
                            "
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E10A23] dark:focus:border-[#E10A23]"
                            required
                          />
                        </div>
                      </div>
                      <div class="flex items-center min-w-[4rem]">
                        <label class="ms-2 text-sm text-gray-900">To:</label>
                      </div>

                      <div class="w-full max-w-[10rem]">
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-red-500 dark:text-red-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            ></svg>
                          </div>
                          <input
                            type="time"
                            :id="`end-time-${dayIndex}-${hourIndex}`"
                            v-model="
                              WorkingHours.hours[dayIndex].hours[hourIndex].to
                            "
                            :min="
                              WorkingHours.hours[dayIndex].hours[hourIndex].from
                            "
                            :disabled="
                              !WorkingHours.hours[dayIndex].hours[hourIndex]
                                .from
                            "
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E10A23] dark:focus:border-[#E10A23]"
                            required
                          />
                        </div>
                      </div>
                      <button
                        @click="deleteWorkingHours(dayIndex, hourIndex)"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
                    <div class="flex justify-center items-center mt-6">
                      <button
                        @click="addSchedule(dayIndex)"
                        type="button"
                        class="flex text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Add Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="hidden p-4 rounded-lg"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table
                  class="w-full text-sm text-left rtl:text-right text-black500 dark:text-gray-400"
                >
                  <thead
                    class="text-xs text-red-600 uppercase bg-red-50 dark:bg-red-600 dark:text-red-400"
                  >
                    <tr>
                      <th scope="col" class="px-6 py-3 text-center">Date</th>
                      <th scope="col" class="py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(date, idx) in WorkingHours.hdays"
                      :key="idx"
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {{ getformateddate(date) }}
                      </th>
                      <button
                        @click="deleteHolidaysDay(idx)"
                        class="block py-4 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
                    </tr>
                  </tbody>
                </table>
              </div>
              <form
                v-if="AddShow"
                @submit.prevent="addHolidayDate"
                class="flex items-center text-center justify-center my-4"
              >
                <input
                  class="flex mx-2 items-center justify-center text-red-600 bg-white font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#E10A23] focus:outline-none"
                  type="date"
                  id="Add Date"
                  v-model="selectDate"
                  forma
                  required
                />
                <button
                  type="submit"
                  class="flex text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Submit
                </button>
              </form>
              <div
                v-else
                class="w-full md:w-auto flex flex-col md:flex-row my-5 space-y-2 md:space-y-0 md:items-center items-center justify-center md:space-x-3 flex-shrink-0"
              >
                <button
                  @click="AddShow = true"
                  type="button"
                  class="flex text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Add Date
                </button>
              </div>
            </div>
            <div
              class="flex items-center justify-between p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
            >
              <button
                @click="save()"
                type="button"
                class="flex text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                {{ modelValue.id ? "Edit" : "Add" }} Holidays
              </button>
              <button
                type="button"
                @click="close()"
                class="text-[#E10A23] hover:text-white border-2 border-[#E10A23] hover:bg-[#E10A23] focus:ring-4 focus:outline-none focus:ring-[#E10A23] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#E10A23] dark:text-[#E10A23] dark:hover:text-white dark:hover:bg-[#E10A23] dark:focus:ring-[#E10A23]"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initTabs, initDropdowns, Modal } from "flowbite";

const AddShow = ref(false);
const selectDate = ref();
const props = defineProps({
  modelValue: Object,
});
const emit = defineEmits(["update", "create", "close"]);
const WorkingHours = ref({
  name: "",
  hdays: [],
  hours: [
    { day: "Sunday", open: false, hours: [] },
    { day: "Monday", open: false, hours: [] },
    { day: "Tuesday", open: false, hours: [] },
    { day: "Wednesday", open: false, hours: [] },
    { day: "Thursday", open: false, hours: [] },
    { day: "Friday", open: false, hours: [] },
    { day: "Saturday", open: false, hours: [] },
  ],
});

if (props.modelValue.id) {
  WorkingHours.value = { ...props.modelValue };
}
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const close = () => {
  modal.hide();
  emit("close");
};

const addSchedule = (index) => {
  WorkingHours.value.hours[index].hours.push({ from: "", to: "" });
};

const deleteWorkingHours = (dayIndex, hourIndex) => {
  WorkingHours.value.hours[dayIndex].hours.splice(hourIndex, 1);
};

const deleteHolidaysDay = (index) => {
  WorkingHours.value.hdays.splice(index, 1);
};

const addHolidayDate = () => {add
  if (!selectDate.value) {
    console.error("No date selected.");
    return;
  }
  WorkingHours.value.hdays.push(selectDate.value);
  selectDate.value = null;
  AddShow.value = false;
};
const getformateddate = (date) => {
  return new Intl.DateTimeFormat("default", {
    dateStyle: "full",
  }).format(new Date(date));
};
let modal;
onMounted(() => {
  initTabs();
  initDropdowns();
  const $modalElement = document.querySelector("#workinghours-modal");
  const modalOptions = {
    closable: false,
  };
  if ($modalElement) {
    modal = new Modal($modalElement, modalOptions);
  }
  modal.show();
});

const save = async () => {
  if (!WorkingHours.value.name) {
    console.error("No name provided.");
    return;
  }
  if (!WorkingHours.value.hours.some((h) => h.open)) {
    console.error("No working hours provided.");
    return;
  }
  if (WorkingHours.value.id) {
    emit("update", WorkingHours.value);
  } else {
    emit("create", WorkingHours.value);
  }
  close();
};
</script>
