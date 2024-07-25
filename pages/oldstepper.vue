<template>
  



    <div id="CategoryModal" tabindex="-1" aria-hidden="true"
      class="flex hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
  
        <!-- Modal content -->
       
      
        <div class="flex relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <!-- Modal header -->
          <div>
            <div class="stepper">
              <div :class="['step', step === 1 ? 'step-active' : '']">Personal information</div>
              <div :class="['step', step === 2 ? 'step-active' : '']">Step 2</div>
              <div :class="['step', step === 3 ? 'step-active' : '']">Step 3</div>
              <div :class="['step', step === 4 ? 'step-active' : '']">Step 4</div>
              <div :class="['step', step === 5 ? 'step-active' : '']">Step 5</div>
              <div :class="['step', step === 6 ? 'step-active' : '']">Finish</div>
            </div>
  
            <form v-if="step === 1" @submit.prevent="nextStep">
              <div class="form--header-container">
                <h1 class="form--header-title">Here's what to expect</h1>
                <p class="form--header-text">
                  We'll be collecting information about you and your business,
                  which we'll use to get your business approved to process
                  payments. Just a heads up, some of the information we'll ask for
                  needs to match up with your federal tax records (we'll let you
                  know once you get there, in case you need to look anything up).
                  <br />
                  Once your sensitive data is processed it will be discarded
                  <br />
                </p>
              </div>
              <div class="flex justify-center">
                <button type="submit"
                  class="text-center text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">f</button>
              </div>
  
  
            </form>
  
            <form v-if="step === 2" @submit.prevent="nextStep">
              <div class="form--header-container">
                <h1 class="form--header-title">Business information</h1>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4">
                <div>
                  <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="structure"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Structure</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="industry"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="date_of_incorporation"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Incorporation</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="approximate_annual_volume"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Approximate Annual Volume</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="tax_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tax id</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="phone-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                    number</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-6 h-6 text-[#E10A23] dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                      </svg>
                    </div>
                    <input
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                    address</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-6 h-6 text-[#E10A23] dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                          d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                      </svg>
                    </div>
                    <input type="text" id="input-group-1" placeholder="name@restohub.us" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="legal name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Legal
                    Name</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                <div>
                  <label for="legal.address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Legal
                    Address</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="flex button-container my-5">
                <button type="button" class="form__bttn" @click="prevStep">
                  Previous
                </button>
  
                <button type="submit" class="form__btn">Next</button>
              </div>
            </form>
  
            <form v-if="step === 3" @submit.prevent="nextStep">
              <div class="form--header-container">
                <h1 class="form--header-title">Representative</h1>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="identification_number"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identification Number</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                    address</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-6 h-6 text-[#E10A23] dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                          d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                      </svg>
                    </div>
                    <input type="text" id="input-group-1" placeholder="name@restohub.us" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="phone-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                    number</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-6 h-6 text-[#E10A23] dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                      </svg>
                    </div>
                    <input
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="ssn_last4"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ssn_last4</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dob</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="address"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
  
              </div>
              <div class="flex button-container my-5">
                <button type="button" class="form__bttn" @click="prevStep">
                  Previous
                </button>
                <button type="submit" class="form__btn">Next</button>
              </div>
            </form>
  
            <form v-if="step === 4" @submit.prevent="nextStep">
              <div class="form--header-container">
                <h1 class="form--header-title">Owners</h1>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-4">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="identification_number"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identification Number</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="address"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="flex button-container my-5">
                <button type="button" class="form__bttn" @click="prevStep">
                  Previous
                </button>
                <button type="submit" class="form__btn">Next</button>
              </div>
            </form>
  
            <form v-if="step === 5" @submit.prevent="submitForm">
              <div class="form--header-container">
                <h1 class="form--header-title">Bank Account</h1>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="bank_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank
                    Name</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="account_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account
                    Number</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="account_nickname"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Nickname</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="routing_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Routing
                    Number</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 px-4 py-2">
                <div>
                  <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="account_owner_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Owner Name</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input type="text" id="input-group-1" required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                </div>
              </div>
              <div class="flex button-container my-5">
                <button type="button" class="form__bttn" @click="prevStep">
                  Previous
                </button>
                <button type="submit" class="form__btn">Submit</button>
              </div>
            </form>
  
            <div v-if="step === 6" class="form--message">
              <h1 class="form--message-text">Done!</h1>
            </div>
          </div>
  
          <!-- Modal body -->
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
      required: true,
    },
  });
  const emit = defineEmits(["update", "create", "close"]);
  
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
  
  onMounted(() => {
    initModals();
    initDropdowns();
  
    const $modalElement = document.querySelector("#CategoryModal");
    const modalOptions = {};
    if ($modalElement) {
      modal.value = new Modal($modalElement, modalOptions);
    }
    if (modal.value) modal.value.show();
  });
  
  const step = ref(1);
  
  const nextStep = () => {
    if (step.value < 7) step.value++;
  };
  
  const prevStep = () => {
    if (step.value > 1) step.value--;
  };
  
  const submitForm = () => {
    step.value = 6;
  };
  </script>
  
  <style>
  .stepper {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .step {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .step-active {
    background-color: rgb(225, 10, 35);
    color: white;
  }
  
  .stepper .step {
    margin-right: 15px;
  }
  
  .stepper .step:last-child {
    margin-right: 15;
  }
  
  .started {
    color: rgb(225, 10, 35);
    font-size: 20px;
    font-weight: bold;
  }
  
  .form {
    display: none;
  }
  
  .form-active {
    display: block;
  }
  
  .form--header-container {
    margin-bottom: 20px;
  }
  
  .form--header-title {
    margin: 0;
    margin-bottom: 0.5cm;
    font-size: 24px;
    font-weight: bold;
  }
  
  .form--header-text {
    margin: 0;
    font-size: 16px;
    margin-bottom: 0.5cm;
    color: #666;
  }
  
  .form__btn {
    display: flex;
    /* flex */
    color: white;
    /* text-white */
    background-color: #e10a23;
    /* bg-[#E10A23] */
    transition: background-color 0.3s;
    /* to enable smooth hover effect */
    font-weight: 500;
    /* font-medium */
    border-radius: 0.5rem;
    /* rounded-lg */
    font-size: 0.875rem;
    /* text-sm */
    padding: 0.625rem 1.25rem;
    /* px-5 py-2.5 */
    text-align: center;
    /* text-center */
    outline: none;
    /* focus:outline-none */
    margin-left: auto;
  }
  
  .form__bttn {
    display: flex;
    /* flex */
    color: white;
    /* text-white */
    background-color: #e10a23;
    /* bg-[#E10A23] */
    transition: background-color 0.3s;
    /* to enable smooth hover effect */
    font-weight: 500;
    /* font-medium */
    border-radius: 0.5rem;
    /* rounded-lg */
    font-size: 0.875rem;
    /* text-sm */
    padding: 0.625rem 1.25rem;
    /* px-5 py-2.5 */
    text-align: center;
    /* text-center */
    outline: none;
    /* focus:outline-none */
  }
  
  .form--message {
    text-align: center;
    margin-top: 20px;
  }
  
  .form--message-text {
    font-size: 24px;
    color: green;
  }
  </style>
  