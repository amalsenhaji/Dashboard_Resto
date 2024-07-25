<template>
  <div
    id="add-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed z-40 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-500/75"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ modelValue.id ? "Edit" : "Add" }} Location
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
          <div class="px-4 pt-4">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Location Name</label
            >
            <input
              type="text"
              id="default-input"
              placeholder="Location Name"
              v-model="location.name"
              required
              class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 border border-gray-300"
            />
          </div>
          <div class="col-span-2 px-4 pt-4">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Location Description</label
            >
            <textarea
              id="description"
              rows="4"
              placeholder="Write Location description here"
              v-model="location.description"
              class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 border border-gray-300"
            >
            </textarea>
          </div>
          <div class="grid gap-6 md:grid-cols-2 px-4 pt-4">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email address</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <svg
                    class="w-6 h-6 text-[#E10A23] dark:text-white"
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
                      d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  placeholder="name@restohub.us"
                  v-model="location.contact.email"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                for="phone-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Phone number</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <svg
                    class="w-6 h-6 text-[#E10A23] dark:text-white"
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
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="phone-input"
                  aria-describedby="helper-text-explanation"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  v-model="location.contact.phone"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          <div class="px-4 pt-4">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Industry</label
            >
            <button
              id="dropdownRadioBgHoverButton"
              data-dropdown-toggle="dropdownRadioBgHover"
              class="mb-2 w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-gray-50 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:focus:ring-red-800 border border-gray-300"
              type="button"
            >
              {{ selectedIndustryName || "Select Industry" }}
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
            <div
              id="dropdownRadioBgHover"
              class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-full"
            >
              <ul
                class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioBgHoverButton"
              >
                <!-- Iterate over industries -->
                <li v-for="industry in Industries" :key="industry.id">
                  <label
                    :for="'radio-' + industry.id"
                    class="inline-flex items-center w-full p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <input
                      type="radio"
                      :id="'indradio-' + industry.id"
                      :name="'ind-' + industry.id"
                      :value="industry.id"
                      v-model="location.industry_id"
                      class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >{{ industry.name }}</span
                    >
                  </label>
                </li>
              </ul>
            </div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Time Zone</label
            >
            <button
              id="timezoneradio"
              data-dropdown-toggle="timezoneradiohover"
              class="mb-2 w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-gray-50 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:focus:ring-red-800 border border-gray-300"
              type="button"
            >
              {{ selectedTimezone || "Select Timezone" }}
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
            <div
              id="timezoneradiohover"
              class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-full"
            >
              <ul
                class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="timezoneradio"
              >
                <!-- Iterate over zones -->
                <li v-for="zone in zones" :key="zone.id">
                  <label
                    :for="'radio-' + zone.id"
                    class="inline-flex items-center w-full p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <input
                      type="radio"
                      :id="'tzradio-' + zone.id"
                      :name="'tz-' + zone.id"
                      :value="zone.id"
                      v-model="location.timezone"
                      class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >{{ zone.displayName }}</span
                    >
                  </label>
                </li>
              </ul>
            </div>
          
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Menu</label
            >

            <button
              id="menuradio"
              data-dropdown-toggle="menuradiohover"
              class="mb-2 w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-gray-50 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:focus:ring-red-800 border border-gray-300"
              type="button"
            >
              {{ selectedMenu || "Select Menu" }}
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
            <div
              id="menuradiohover"
              class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-full"
            >
              <ul
                class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="menuradio"
              >
                <!-- Iterate over zones -->
                <li v-for="menu in Menus" :key="menu.id">
                  <label
                    :for="'radio-' + menu.id"
                    class="inline-flex items-center w-full p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <input
                      type="radio"
                      :id="'menuradio-' + menu.id"
                      :name="'menu-' + menu.id"
                      :value="menu.id"
                      v-model="location.menu_id"
                      class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >{{ menu.name }}</span
                    >
                  </label>
                </li>
              </ul>
            </div>
            

            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Fulfillment Types</label
            >
            <button
              id="fulfillmentButton"
              data-dropdown-toggle="fulfillment"
              class="mb-2 w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-gray-50 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:focus:ring-red-800 border border-gray-300"
              type="button"
            >
              Fulfillments
              <svg
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
              id="fulfillment"
              class="w-[50vw] hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
            >
              <ul
                class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="fulfillmentButton"
              >
                <li v-for="(item, index) in fulfillmenttypes" :key="index">
                  <div
                    class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <input
                      :id="'checkbox-item-' + index"
                      type="checkbox"
                      class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 rounded focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      :checked="location.fulfillment_types.includes(item.type)"
                      @click="toggleItem(item)"
                    />

                    <label
                      :for="'checkbox-item-' + index"
                      class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      {{ item.type }}
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Working Hour</label
            >

            <button
              id="workinghourradio"
              data-dropdown-toggle="workinghourradiohover"
              class="mb-2 w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-gray-50 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:focus:ring-red-800 border border-gray-300"
              type="button"
            >
              {{ selectedWorkinghour || "Select Working Hour" }}
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
            <div
              id="workinghourradiohover"
              class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-full"
            >
              <ul
                class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="workinghourradio"
              >
                <!-- Iterate over zones -->
                <li v-for="workinghour in Workinghour" :key="workinghour.id">
                  <label
                    :for="'radio-' + workinghour.id"
                    class="inline-flex items-center w-full p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <input
                      type="radio"
                      :id="'whradio-' + workinghour.id"
                      :name="'wh-' + workinghour.id"
                      :value="workinghour.id"
                      v-model="location.working_hours_id"
                      class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >{{ workinghour.name }}</span
                    >
                  </label>
                </li>
              </ul>
            </div>

            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Location Address</label
            >
            <input
              ref="autocompleteInput"
              type="text"
              autocomplete="off"
              id="address-input"
              placeholder="Location Address"
              v-model="location.address.street"
              required
              class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 border border-gray-300"
            />

            <div v-if="location.fulfillment_types.includes('delivery')">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Location Fulfillment</label
              >

              <button
                id="dropdownInformationButton"
                data-dropdown-toggle="dropdownInformation"
                data-dropdown-placement="top"
                class="mb-2 w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-gray-50 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:focus:ring-red-800 border border-gray-300"
                type="button"
              >
                Delivery
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
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </div>

            <!-- Dropdown menu -->
            <div
              id="dropdownInformation"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[33vw] border border-gray-600 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div class="grid gap-4 mb-4 grid-cols-2 p-2">
                <div class="col-span-2">
                  <label
                    for="number-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Max Redius</label
                  >
                  <input
                    v-model="location.delivery.maxredius"
                    type="text"
                    id="redius-input"
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="2.3"
                  />
                </div>
                <div class="col-span-2">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Zip Codes</label
                  >
                  <multiselect
                    v-model="location.delivery.delivery_zipcodes"
                    :options="options"
                    :multiple="true"
                    group-values="zipCodes"
                    group-label="state"
                    :group-select="true"
                    placeholder="Type to search"
                    track-by="code"
                    label="code"
                  >
                    <span slot="noResult"
                      >Oops! No elements found. Consider changing the search
                      query.</span
                    >
                  </multiselect>
                </div>

                <div class="col-span-2 sm:col-span-1">
                  <label
                    for="number-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Cost</label
                  >
                  <input
                    v-model="location.delivery.fee"
                    type="number"
                    id="cost-input"
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="299 cent"
                  />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label
                    for="number-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Minimum</label
                  >
                  <input
                    v-model="location.delivery.min"
                    type="number"
                    id="minimum-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1500 cent"
                  />
                </div>

                <div class="col-span-2">
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Cost Type</label
                  >
                  <input
                    v-model="location.delivery.fee_type"
                    type="text"
                    id="costtype-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="flat"
                  />
                </div>
              </div>
            </div>

            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Location Image</label
            >
            <div class="grid grid-cols-1 gap-2 sm:grid-cols-12 py-2">
              <div v-if="location.img" class="sm:col-span-4">
                <img
                  class="block w-full border-0 p-0 focus:ring-0 sm:text-sm h-[100px] object-cover object-center"
                  :src="location.img"
                />
                <!-- Two icon buttons: one for select and one for remove -->
                <div class="grid grid-cols-1 gap-0 sm:grid-cols-2">
                  <button
                    @click="removeImage()"
                    class="sm:col-span-2 border border-gray-300 text-gray-600 font-bold py-1 px-2 rounded inline-flex items-center dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>

                    <span>&nbsp; &nbsp;Change</span>
                  </button>
                </div>
              </div>
              <div v-if="!location.img" class="sm:col-span-4">
                <!-- Icon with + icon to add new image, the height 100px -->
                <div class="flex justify-center">
                  <button
                    @click="loadImage()"
                    type="button"
                    style="height: 120px; width: 100%"
                    class="inline-flex items-center px-4 py-2 border border-grey-900 text-sm font-medium rounded-md shadow-sm text-grey-900 bg-white dark:bg-gray-700 dark:text-white"
                  >
                    <svg
                      class="w-8 h-8 m-auto text-gray-800 dark:text-white"
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
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <Media
                class="z-50"
                v-if="Mediafile"
                @close="Mediafile = false"
                @selected="addImage"
              />
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
              {{ modelValue.id ? "Edit" : "Add" }} Location
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
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { initModals, initTabs, initDropdowns, Modal } from "flowbite";
import { zones } from "~/public/timezones.json";
import { fulfillmenttypes } from "~/public/fulfillments.json";
import Multiselect from "vue-multiselect";

const options = [
  {
    state: "New York",
    zipCodes: [{ code: "10001" }, { code: "10002" }, { code: "10003" }],
  },
  {
    state: "California",
    zipCodes: [{ code: "90001" }, { code: "90002" }, { code: "90003" }],
  },
  {
    state: "Texas",
    zipCodes: [{ code: "75001" }, { code: "75002" }, { code: "75003" }],
  },
];

const selectedZipCodes = ref([]);

const Mediafile = ref(null);

const loadImage = async (m) => {
  if (m?.id) {
    Mediafile.value = m;
  } else {
    Mediafile.value = {};
  }
};

const addImage = (fileUrl) => {
  console.log("Selected file URL:", fileUrl);
  location.value.img = fileUrl;
  Mediafile.value = null;
};

const removeImage = () => {
  location.value.img = null;
  Mediafile.value = {};
};

// Define a reactive reference for industries
const industries = ref([]);
const menus = ref([]);
const workinghour = ref([]);

// Fetch industries data
const fetchIndustries = async () => {
  const { data, error } = await useSupabaseClient()
    .from("industries")
    .select("id,name");
  if (error) {
    console.error("Error fetching industries:", error);
  } else {
    industries.value = data;
    console.log("Fetched industries:", industries.value);
  }
};

const fetchMenus = async () => {
  const { data, error } = await useSupabaseClient()
    .from("menus")
    .select("id,name");
  if (error) {
    console.error("Error fetching menus:", error);
  } else {
    menus.value = data;
    console.log("Fetched menus:", menus.value);
  }
};

const fetchWorkinghour = async () => {
  const { data, error } = await useSupabaseClient()
    .from("working_hours")
    .select("id,name");
  if (error) {
    console.error("Error fetching workinghour:", error);
  } else {
    workinghour.value = data;
    console.log("Fetched workinghour:", workinghour.value);
  }
};

// Computed property for filtered industries
const searchFilter = ref();
const Industries = computed(() => {
  if (searchFilter.value) {
    return industries.value.filter((item) =>
      item.name.toLowerCase().includes(searchFilter.value.toLowerCase())
    );
  } else {
    return industries.value;
  }
});

const searchFilterMenu = ref();
const Menus = computed(() => {
  if (searchFilterMenu.value) {
    return menus.value.filter((item) =>
      item.name.toLowerCase().includes(searchFilterMenu.value.toLowerCase())
    );
  } else {
    return menus.value;
  }
});

const searchFilterWorkinghour = ref();
const Workinghour = computed(() => {
  if (searchFilterWorkinghour.value) {
    return workinghour.value.filter((item) =>
      item.name
        .toLowerCase()
        .includes(searchFilterWorkinghour.value.toLowerCase())
    );
  } else {
    return workinghour.value;
  }
});

// Computed property for selected industry name
const selectedIndustryName = computed(() => {
  const selectedIndustry = industries.value.find(
    (industry) => industry.id === location.value.industry_id
  );
  return selectedIndustry ? selectedIndustry.name : null;
});

const selectedTimezone = computed(() => {
  const selectedZone = zones.find(
    (zone) => zone.id === location.value.timezone
  );
  return selectedZone ? selectedZone.displayName : null;
});

const selectedMenu = computed(() => {
  const selectedMenu = menus.value.find(
    (menu) => menu.id === location.value.menu_id
  );
  return selectedMenu ? selectedMenu.name : null;
});

const selectedWorkinghour = computed(() => {
  const selectedWorkinghour = workinghour.value.find(
    (workinghour) => workinghour.id === location.value.working_hours_id
  );
  return selectedWorkinghour ? selectedWorkinghour.name : null;
});

const toggleItem = (item) => {
  const index = location.value.fulfillment_types.indexOf(item.type);
  if (index > -1) {
    location.value.fulfillment_types.splice(index, 1);
  } else {
    location.value.fulfillment_types.push(item.type);
  }
};

// Props and Emits
const props = defineProps({
  modelValue: Object,
});
const emit = defineEmits(["update", "create", "close"]);

// Save function
const save = () => {
  if (props.modelValue?.id) {
    emit("update", location.value);
  } else {
    emit("create", location.value);
  }
  close();
};

// Location object
const location = ref({});
if (props.modelValue.id) {
  location.value = { ...props.modelValue,  };
} else {
  location.value = {
    name: "",
    description: "",
    contact: {
      email: "",
      phone: "",
    },
    delivery:{
      fee: "",
      min: "",
      fee_type: "",
      maxredius: "",
      delivery_zipcodes: []
    },
    address: {},
    industry_id: null, // Initialize industry_id
    menu_id: null,
    img: null,
    timezone: null,
    fulfillment_types: [],
    working_hours_id: null,
  };
}

// Close function
const close = () => {
  modal.hide();
  emit("close");
};

let modal;
onMounted(async () => {
  await fetchIndustries(); // Fetch industries data
  await fetchMenus(); // Fetch menus data
  await fetchWorkinghour(); // Fetch workinghour data

  // Initialize Flowbite components

  initModals();
  initTabs();
  initDropdowns();

  if (!window.google) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBSzgE464nQ5eqHIx8SGxg1dNukRVfDVzw&libraries=places&language=en`;
    script.async = true;
    script.defer = true;
    script.onload = initAutocomplete;
    document.head.appendChild(script);
  } else {
    initAutocomplete();
  }

  const $modalElement = document.querySelector("#add-modal");
  const modalOptions = {
    closable: false,
    backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
  };
  if ($modalElement) {
    modal = new Modal($modalElement, modalOptions);
  }
  modal.show();
});

const autocompleteInput = ref(null);
let autocomplete: google.maps.places.Autocomplete;

const initAutocomplete = () => {
  if (autocompleteInput.value) {
    const options = {
      strictBounds: true,
    };
    autocomplete = new google.maps.places.Autocomplete(
      autocompleteInput.value as HTMLInputElement,
      options
    );
    autocomplete.addListener("place_changed", onPlaceChanged);
  }
};

const onPlaceChanged = () => {
  const place = autocomplete.getPlace();
  const formattedAddress = formatPlaceDetails(place);
  console.log("Formatted address:", formattedAddress);
  location.value.address = formattedAddress;
  emit("update", location.value);
};

const formatPlaceDetails = (place: google.maps.places.PlaceResult) => {
  const addressComponents = place.address_components || [];
  const getAddressComponent = (type: string) =>
    addressComponents.find((component) => component.types.includes(type))
      ?.long_name || "";
  const coordinates = {
    lat: place.geometry?.location?.lat() || 0,
    lng: place.geometry?.location?.lng() || 0,
  };

  return {
    street: `${getAddressComponent("street_number")} ${getAddressComponent(
      "route"
    )}`,
    city: getAddressComponent("locality"),
    state: getAddressComponent("administrative_area_level_1"),
    postcode: getAddressComponent("postal_code"),
    country: getAddressComponent("country"),
    coordinates,
  };
};
</script>
