<template>
    <div>
        <ol
            class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
            <li :class="['flex items-center', currentStep >= 1 ? 'text-blue-600 dark:text-blue-500' : '']">
                <span
                    :class="['flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0', currentStep >= 1 ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400']">
                    1
                </span>
                Here's what to expect <span class="hidden sm:inline-flex sm:ms-2"></span>
                <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
            </li>
            <li :class="['flex items-center', currentStep >= 2 ? 'text-blue-600 dark:text-blue-500' : '']">
                <span
                    :class="['flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0', currentStep >= 2 ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400']">
                    2
                </span>
                Business <span class="hidden sm:inline-flex sm:ms-2">information</span>
                <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
            </li>
            <li :class="['flex items-center', currentStep >= 3 ? 'text-blue-600 dark:text-blue-500' : '']">
                <span
                    :class="['flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0', currentStep >= 3 ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400']">
                    3
                </span>
                Representative
                <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
            </li>
            <li :class="['flex items-center', currentStep >= 4 ? 'text-blue-600 dark:text-blue-500' : '']">
                <span
                    :class="['flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0', currentStep >= 4 ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400']">
                    4
                </span>
                Owners
                <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
            </li>
            <li :class="['flex items-center', currentStep >= 5 ? 'text-blue-600 dark:text-blue-500' : '']">
                <span
                    :class="['flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0', currentStep >= 5 ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400']">
                    5
                </span>
                Bank Account
            </li>
        </ol>

        <div v-if="currentStep === 1">
            <form @submit.prevent="nextStep">
                <div class="mb-5">
                    <h1>Here's what to expect </h1>
                    We'll be collecting information about you and your business, which we'll use to get your business
                    approved to process payments. Just a heads up, some of the information we'll ask for needs to match
                    up with your federal tax records (we'll let you know once you get there, in case you need to look
                    anything up).
                    Once your sensitive data is processed it will be discarded
                </div>
                <div class="mt-4">
                    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Next</button>
                </div>
            </form>
        </div>

        <div v-if="currentStep === 2">
            <form @submit.prevent="nextStep">
        
                <div class="mt-4">
                    <button type="button" @click="prevStep"
                        class="px-4 py-2 mr-2 text-white bg-blue-500 rounded">Previous</button>
                    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Next</button>
                </div>
            </form>
        </div>

        <div v-if="currentStep === 3">
            <form @submit.prevent="nextStep">
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input type="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com" required />
                </div>
                <div class="mt-4">
                    <button type="button" @click="prevStep"
                        class="px-4 py-2 mr-2 text-white bg-blue-500 rounded">Previous</button>
                    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Next</button>
                </div>
            </form>
        </div>

        <div v-if="currentStep === 4">
            <form @submit.prevent="nextStep">
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input type="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com" required />
                </div>
                <div class="mt-4">
                    <button type="button" @click="prevStep"
                        class="px-4 py-2 mr-2 text-white bg-blue-500 rounded">Previous</button>
                    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Next</button>
                </div>
            </form>
        </div>

        <div v-if="currentStep === 5">
            <form @submit.prevent="submitForm">
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input type="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com" required />
                </div>
                <div class="mt-4">
                    <button type="button" @click="prevStep"
                        class="px-4 py-2 mr-2 text-white bg-blue-500 rounded">Previous</button>
                    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(1);

const nextStep = () => {
    if (currentStep.value < 5) {
        currentStep.value++;
    }
};

const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
};

const submitForm = () => {
    alert('Form submitted!');
};
</script>

