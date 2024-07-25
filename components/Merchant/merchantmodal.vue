<template>
  <div>
    <!-- Modal Section -->
    <div
      id="CategoryModal"
      tabindex="-1"
      aria-hidden="true"
      class="flex hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
    >
    <div class="relative p-4 w-full max-w-5xl h-full md:h-auto mx-auto">
      <!-- Modal content -->
        <div
        class="flex relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 mx-auto"
        >
          <!-- Modal header -->
          <div class="w-full">
            <div v-if="showIntro">
              <h1 class="text-center font-bold text-lg">Here's what to expect</h1>
              <p>
                To get started on any new endeavor, whether it's launching a
                business or mastering a new skill, requires a blend of
                determination, planning, and initiative. It begins with a clear
                vision and achievable goals. Taking the first step often
                involves overcoming doubts and embracing the learning curve.
                It's about setting priorities, gathering resources, and
                cultivating resilience to navigate challenges.
              </p>
              <div class="flex justify-center">
                <button
                  @click="startStepper"
                  class="mt-4 px-4 py-2 text-white bg-red-700 rounded w-1/3"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div v-else>
              <ol
              class="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse"
              >
                <li
                  :class="[
                    'flex items-center',
                    currentStep >= 1 ? 'text-red-700 dark:text-red-500' : '',
                  ]"
                >
                  <span
                    :class="[
                      'flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0',
                      currentStep >= 1
                        ? 'border-red-700 dark:border-red-500'
                        : 'border-gray-500 dark:border-gray-400',
                    ]"
                  >
                    1
                  </span>
                  Basic
                  <span class="hidden sm:inline-flex sm:ms-2"
                    >informations</span
                  >
                  <svg
                    class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 9 4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                </li>
                <li
                  :class="[
                    'flex items-center',
                    currentStep >= 2 ? 'text-red-700 dark:text-red-500' : '',
                  ]"
                >
                  <span
                    :class="[
                      'flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0',
                      currentStep >= 2
                        ? 'border-red-700 dark:border-red-500'
                        : 'border-gray-500 dark:border-gray-400',
                    ]"
                  >
                    2
                  </span>
                  Business
                  <span class="hidden sm:inline-flex sm:ms-2"
                    >informations</span
                  >
                  <svg
                    class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 9 4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                </li>
                <li
                  :class="[
                    'flex items-center',
                    currentStep >= 3 ? 'text-red-700 dark:text-red-500' : '',
                  ]"
                >
                  <span
                    :class="[
                      'flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0',
                      currentStep >= 3
                        ? 'border-red-700 dark:border-red-500'
                        : 'border-gray-500 dark:border-gray-400',
                    ]"
                  >
                    3
                  </span>
                  Representative
                  <svg
                    class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 9 4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                </li>
                <li
                  v-if="showOwnersStep"
                  :class="[
                    'flex items-center',
                    currentStep >= 4 ? 'text-red-700 dark:text-red-500' : '',
                  ]"
                >
                  <span
                    :class="[
                      'flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0',
                      currentStep >= 4
                        ? 'border-red-700 dark:border-red-500'
                        : 'border-gray-500 dark:border-gray-400',
                    ]"
                  >
                    4
                  </span>
                  Owners
                  <svg
                    class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 9 4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                </li>
                <li
                  :class="[
                    'flex items-center',
                    currentStep >= (showOwnersStep ? 5 : 4)
                      ? 'text-red-700 dark:text-red-500'
                      : '',
                  ]"
                >
                  <span
                    :class="[
                      'flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0',
                      currentStep >= (showOwnersStep ? 5 : 4)
                        ? 'border-red-700 dark:border-red-500'
                        : 'border-gray-500 dark:border-gray-400',
                    ]"
                  >
                    {{ showOwnersStep ? 5 : 4 }}
                  </span>
                  Bank Account
                </li>
              </ol>
              <div v-if="currentStep === 1">
                <form @submit.prevent="nextStep">
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                    <div>
                      <label
                        for="merchant-name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Merchant Name</label
                      >
                      <div class="relative">
                        <input
                          v-model="formData.merchant.name"
                          type="text"
                          id="merchant-name"
                          pattern="[A-Za-z\s]+"
                          required
                          placeholder="Enter Merchant Name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="type"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Type</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <div>
                          <button
                            @click="toggleDropdown"
                            class="text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full p-2.5 text-center inline-flex items-center justify-between dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            type="button"
                          >
                            {{
                              formData.business_details.type
                                ? formData.business_details.type
                                : "Select Type"
                            }}
                            <svg
                              class="w-4 h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          <div
                            v-if="showDropdown"
                            class="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            style="z-index: 1000"
                          >
                            <div class="py-1">
                              <a
                                @click="selectType('Individual')"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                >Individual</a
                              >
                              <a
                                @click="selectType('For Profit')"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                >For Profit</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
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
                          v-model="formData.business_details.email"
                          type="email"
                          id="input-group-1"
                          placeholder="name@restohub.us"
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
                          v-model="formData.business_details.phone"
                          type="tel"
                          id="phone-input"
                          pattern="^\+?1?\d{10,15}$"
                          placeholder="e.g. +1234567890"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                      <div>
                        <label
                          for="url"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >Url</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                          ></div>
                          <input
                            v-model="formData.business_details.url"
                            type="url"
                            id="input-group-1"
                            required
                            placeholder="https://example.com"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          for="industry"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >Industry</label
                        >
                        <div class="relative">
                          <button
                            @click="toggleDropdownindus"
                            class="text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full p-2.5 text-center inline-flex items-center justify-between dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            type="button"
                          >
                            {{
                              formData.business_details.industry
                                ? formData.business_details.industry
                                : "Select industry"
                            }}
                            <svg
                              class="w-4 h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <div
                            v-if="showDropdownindus"
                            class="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            style="z-index: 1000"
                          >
                            <div class="py-1">
                              <a
                                v-for="industry in data"
                                :key="industry.name"
                                @click="selectindus(industry.name)"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                              >
                                {{ industry.name }}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                      <div>
                        <label
                          for="type"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >structure</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                          ></div>
                          <div>
                            <button
                              @click="toggleDropdownstructure"
                              class="text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full p-2.5 text-center inline-flex items-center justify-between dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                              type="button"
                            >
                              {{
                                formData.business_details.structure
                                  ? formData.business_details.structure
                                  : "Select Structure"
                              }}
                              <svg
                                class="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            <div
                              v-if="showDropdownstructure"
                              class="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                              style="z-index: 1000"
                            >
                              <div class="py-1">
                                <a
                                  @click="selectstructure('Multi Member LLC')"
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                  >Multi Member LLC</a
                                >
                                <a
                                  @click="
                                    selectstructure('Private Partnership')
                                  "
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                  >Private Partnership</a
                                >
                                <a
                                  @click="
                                    selectstructure('Private Corporation')
                                  "
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                  >Private Corporation</a
                                >
                                <a
                                  @click="
                                    selectstructure(
                                      'Unincorporated Association'
                                    )
                                  "
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                  >Unincorporated Association</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  
                  <div class="mt-4">
                    <button
                      type="button"
                      @click="prevStep"
                      class="px-4 py-2 mr-2 text-white bg-red-700 rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 text-white bg-red-700 rounded float-right"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
              <div v-if="currentStep === 2">
                <form @submit.prevent="nextStep">
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                    <div>
                      <label
                        for="legal name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Legal Name</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.business_details.legal.name"
                          type="text"
                          id="legal-name"
                          pattern="[A-Za-z\s]+"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="date_of_incorporation"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Date of Incorporation</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>

                        <input
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="date"
                          id="date_of_incorporation"
                          v-model="
                            formData.business_details.date_of_incorporation
                          "
                          forma
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                    <div>
                      <label
                        for="approximate_annual_volume"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Approximate Annual Volume</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.business_details.approximate_annual_volume"
                          type="number"
                          id="approximate_annual_volume"
                          required
                          placeholder="Enter volume"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="tax_id"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Tax id</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.business_details.tax_id"
                          type="number"
                          id="tax_id"
                          required
                          placeholder="Enter Tax ID"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-4 px-4 py-4">
                    <div>
                      <label
                        for="url"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Street Address</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.business_details.legal.address_line1"
                          type="text"
                          id="street_address"
                          placeholder="Enter Street Address"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                    <div>
                      <label
                        for="legal name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >City</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.business_details.legal.address_city"
                          type="text"
                          id="city"
                          required
                          placeholder="Enter City"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="url"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >State</label
                      >
                      <button @click="toggleDropdownstates" class="text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full p-2.5 text-center inline-flex items-center justify-between dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                        {{ formData.business_details.legal.address_state ? formData.business_details.legal.address_state : "Select state" }}
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                        <div class="relative">
                          <div v-if="showDropdownstate" class="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style="z-index: 1000">
                            <div class="py-1">
                              <a v-for="state in states" :key="state" :value="state" @click="selectstates(state)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                                {{ state}}
                              </a>
                            </div>
                          </div>
                       </div> 
                    </div>
                    
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                    <div>
                      <label
                        for="legal name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Zip Code</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.business_details.legal.address_postal_code"
                          type="number"
                          id="zip_code"
                          required
                          placeholder="Enter Zip Code"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="url"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Country</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.business_details.legal.address_country"
                          type="text"
                          id="country"
                          required
                          value="USA"
                          readonly
                          placeholder="USA"
                          disabled
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <button
                      type="button"
                      @click="prevStep"
                      class="px-4 py-2 mr-2 text-white bg-red-700 rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 text-white bg-red-700 rounded float-right"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
              <div v-if="currentStep === 3">
                <form @submit.prevent="nextStep">
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Name</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.representative.name"
                          type="text"
                          id="input-group-1"
                          pattern="[A-Za-z\s]+"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="identification_number"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Ssn</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="
                            formData.representative.identification_number
                          "
                          type="number"
                          id="ssn"
                          placeholder="Enter SSN"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
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
                          v-model="
                            formData.representative.email
                          "
                          type="email"
                          id="input-group-1"
                          placeholder="name@restohub.us"
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
                          v-model="
                            formData.representative.phone
                          "
                          type="tel"
                          id="phone-input"
                          pattern="^\+?1?\d{10,15}$"
                          placeholder="e.g. +1234567890"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                    <div>
                      <label
                        for="dob"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Dob</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>

                        <input
                          v-model="formData.representative.dob"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="date"
                          id="Add Date"
                          forma
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="url"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Street Address</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.representative.address_line1"
                          type="text"
                          id="input-group-1"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                    <div>
                      <label
                        for="legal name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >City</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.representative.address_city"
                          type="text"
                           id="city"
                          required
                          placeholder="Enter City"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="url"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >State</label
                      >
                      <div class="relative">
                        <button @click="togglerepresentativestates" class="text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full p-2.5 text-center inline-flex items-center justify-between dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                          {{ formData.representative.address_state ? formData.representative.address_state : "Select state" }}
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <div v-if="showrepresentativestates" class="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style="z-index: 1000">
                          <div class="py-1">
                            <a v-for="repstate in states" :key="repstate" :value="repstate" @click="selectrepresentativestates(repstate)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                              {{ repstate}}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                    <div>
                      <label
                        for="legal name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Zip Code</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.representative.address_postal_code"
                          type="number"
                          id="zip_code"
                          required
                          placeholder="Enter Zip Code"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="url"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Country</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.representative.address_country"
                          type="text"
                          id="country"
                          placeholder="USA"
                          required
                          value="USA"
                          readonly
                          disabled
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <button
                      type="button"
                      @click="prevStep"
                      class="px-4 py-2 mr-2 text-white bg-red-700 rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 text-white bg-red-700 rounded float-right"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
              <div v-if="currentStep === 4 && showOwnersStep">
                <form @submit.prevent="nextStep">
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Name</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.owners[0].name"
                          type="text"
                          pattern="[A-Za-z\s]+"
                          id="input-group-1"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="identification_number"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Identification Number</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.owners[0].identification_number"
                          type="number"
                          id="input-group-1"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                    <div>
                      <label
                        for="date"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Date</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.owners[0].ownerDate"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="date"
                          id="Add Date"
                          forma
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <button
                      type="button"
                      @click="prevStep"
                      class="px-4 py-2 mr-2 text-white bg-red-700 rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 text-white bg-red-700 rounded float-right"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
              <div v-if="currentStep === (showOwnersStep ? 5 : 4)">
                <form @submit.prevent="submitForm">
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                    <div>
                      <label
                        for="bank_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Bank Name</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.bank_account.bank_name"
                          type="text"
                          id="bank_name"
                          required
                          pattern="[A-Za-z\s]+"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="account_nickname"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Account Nickname</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.bank_account.account_nickname"
                          type="text"
                          id="account_nickname"
                          pattern="[A-Za-z\s]+"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                    <div>
                      <label
                        for="type"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Type</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <div>
                          <button
                            @click="toggleDropdownbank"
                            class="text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full p-2.5 text-center inline-flex items-center justify-between dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            type="button"
                          >
                            {{
                              formData.bank_account.account_type
                                ? formData.bank_account.account_type
                                : "Select Type"
                            }}
                            <svg
                              class="w-4 h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          <div
                            v-if="showDropdownbank"
                            class="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            style="z-index: 1000"
                          >
                            <div class="py-1">
                              <a
                                @click="selectbank('checking')"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                >checking</a
                              >
                              <a
                                @click="selectbank('savings')"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                >savings</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        for="account_owner_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Account Owner Name</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.bank_account.account_owner_name"
                          type="text"
                          pattern="[A-Za-z\s]+"
                          id="account_owner_name"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                    <div>
                      <label
                        for="account_number"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Account Number</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.bank_account.account_number"
                          type="number"
                          id="account_number"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="routing_number"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Routing Number</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                        ></div>
                        <input
                          v-model="formData.bank_account.routing_number"
                         type="number"
                          id="routing_number"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <button
                      type="button"
                      @click="prevStep"
                      class="px-4 py-2 mr-2 text-white bg-red-700 rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 text-white bg-red-700 rounded float-right"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- Modal body -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { initModals, initDropdowns, Modal } from "flowbite";
import zipcodes from './public/zipcodes.json';

const modal = ref(null);
const showIntro = ref(true);

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update", "create", "close"]);

const formData = ref({
  merchant: {
    name: "",
    business_id: "",
    descriptor: "",
  },
  business_details: {
    email: "",
    phone: "",
    url: "",
    type: "",
    industry: "",
    structure: "",
    legal: {
      name: "",
      address_line1: "",
      address_city: "",
      address_state: "",
      address_postal_code: "",
      address_country: "USA",
    },
    date_of_incorporation: "",
    approximate_annual_volume: "",
    tax_id: "",
  },
  representative: {
    name: "",
    identification_number: "",
    email: "",
    phone: "",
    dob_month: "",
    dob_day: "",
    dob_year: "",
    address_state: "",
    address_city: "",
    address_line1: "",
    address_postal_code: "",
    address_country: "USA",
  },
  owners: [
    {
      name: "",
      identification_number: "",
      dob_month: "",
      dob_day: "",
      dob_year: "",
    },
  ],
  bank_account: {
    bank_name: "",
    account_nickname: "",
    account_type: "",
    account_owner_name: "",
    account_number: "",
    routing_number: "",
  },
});

const updateDateFields = (date, champ) => {
  if (date) {
    let obj = new Date(date);
    champ['dob_day'] = obj.getUTCDate();
    champ['dob_month'] = obj.getUTCMonth() + 1;
    champ['dob_year'] = obj.getUTCFullYear();
  }
};

const updateOwnerDateFields = (owner) => {
  if (owner.ownerDate) {
    let date = new Date(owner.ownerDate);
    owner.dob_day = date.getUTCDate();
    owner.dob_month = date.getUTCMonth() + 1;
    owner.dob_year = date.getUTCFullYear();
  }
};

const showDropdown = ref(false);
const showDropdownstructure = ref(false);
const showrepresentativestates = ref(false);
const showDropdownbank = ref(false);
const showDropdownindus = ref(false);
const showDropdownstate = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
const toggleDropdownstates = () => {
  showDropdownstate.value = !showDropdownstate.value;
};
const toggleDropdownbank = () => {
  showDropdownbank.value = !showDropdownbank.value;
};
const togglerepresentativestates = () => {
  showrepresentativestates.value = !showrepresentativestates.value;
};
const toggleDropdownindus = () => {
  showDropdownindus.value = !showDropdownindus.value;
};
const toggleDropdownstructure = () => {
  showDropdownstructure.value = !showDropdownstructure.value;
};

const showOwnersStep = computed(() => {
  return (
    formData.value.business_details.type === "For Profit" &&
    [
      "Multi Member LLC",
      "Private Partnership",
      "Private Corporation",
      "Unincorporated Association",
    ].includes(formData.value.business_details.structure)
  );
});

const selectType = (type) => {
  formData.value.business_details.type = type;
  showDropdown.value = false;
};

const selectstructure = (structure) => {
  formData.value.business_details.structure = structure;
  showDropdownstructure.value = false;
};
const selectstates = (state) => {
  formData.value.business_details.legal.address_state = state;
  showDropdownstate.value = false;
};
const selectrepresentativestates = (repstate) => {
  formData.value.representative.address_state = repstate;
  showrepresentativestates.value = false;
};
const selectbank = (type) => {
  formData.value.bank_account.account_type = type;
  showDropdownbank.value = false;
};
const selectindus = (industry) => {
  formData.value.business_details.industry = industry;
  showDropdownindus.value = false;
};

const close = () => {
  if (modal.value) modal.value.hide();
  showIntro.value = true;
  emit("close");
};

const states = ref([]);

const supabaseClient = useSupabaseClient();

const { data, error } = await supabaseClient
  .from("industries")
  .select("name")
  .eq("active", true);

onMounted(async () => {
  initModals();
  initDropdowns();

  states.value = zipcodes.map(item => item.state);

  watch(() => formData.value.representative.dob, (newDob) => {
    updateDateFields(newDob, formData.value.representative);
  });

  watch(() => formData.value.owners, (newOwners) => {
    newOwners.forEach(owner => {
      updateOwnerDateFields(owner);
    });
  },{ deep: true });
  const $modalElement = document.querySelector("#CategoryModal");
  const modalOptions = {};
  if ($modalElement) {
    modal.value = new Modal($modalElement, modalOptions);
  }
  if (modal.value) modal.value.show();

  const { data, error } = await supabaseClient
    .from("industries")
    .select("name")
    .eq("active", true);

  if (data) {
    formData.value.industryList = data;
  } else {
    console.error("Error fetching industries:", error);
  }
});

const currentStep = ref(1);

const nextStep = () => {
  if (currentStep.value < (showOwnersStep.value ? 5 : 4)) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  } else {
    showIntroText();
  }
};

const submitForm = async () => {
  try {
    const { data, error } = await supabaseClient.functions.invoke(
      "merchant-onboarding",
      { body: formData.value }
    );
    if (error) {
      console.error("Error invoking function:", error);
      alert("There was an error submitting the form");
    } else {
      console.log("Function response:", data);
      alert("Form submitted successfully");
    }
  } catch (err) {
    console.error(" error:", err);
    alert(" error ");
  }
  console.log("formdata", formData.value);
};

const showModal = () => {
  if (modal.value) modal.value.show();
};

const startStepper = () => {
  showIntro.value = false;
  currentStep.value = 1;
};

const showIntroText = () => {
  currentStep.value = 1;
  showIntro.value = true;
};
</script>
