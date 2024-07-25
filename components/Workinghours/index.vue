<template>
    <section id="WorkingHours"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div v-for="(workingHour, index) in WorkingHours" :key="index"
            class="w-[20vw] h-[15vh] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center text-center hover:border border-[#E10A23] dark:bg-gray-800 dark:border-[#E10A23]">

            <span class="text-gray-400 uppercase text-xs">{{ workingHour.id }}</span>
            <p class="text-lg font-bold truncate block capitalize text-[#E10A23] dark:text-white">{{ workingHour.name }}</p>
            <div class="flex justify-center items-center text-center mt-2">
                <button type="button" @click="loadWorkingHour(workingHour)"
                    class="text-[#E10A23] hover:text-white border border-[#E10A23] hover:bg-[#E10A23] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-300 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <button type="button" @click="deleteWorkingHour(workingHour, index)"
                    class="text-[#E10A23] hover:text-white border border-[#E10A23] hover:bg-[#E10A23] focus:ring-4 focus:outline-none focus:ring-[#E10A23] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-[#E10A23] dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-[#E10A23]">
                    <svg class="w-6 h-6 justify-center dark:text-white inline" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                            clip-rule="evenodd" />
                    </svg></button>
            </div>
        </div>

        <button @click="loadWorkingHour()"
            class="w-[20vw] h-[15vh] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center text-center hover:border border-[#E10A23] dark:bg-gray-800 dark:border-[#E10A23]">
            <div class="">
                <svg class="w-6 h-6 text-[#E10A23] dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </button>
    </section>

    <WorkinghoursWorkinghoursmodal v-if="workingHour" v-model="workingHour" @close="close" @create="createWorkingHour" @update="updateWorkingHour" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { initFlowbite } from 'flowbite'

const searchFilter = ref("")
const { data, error } = await useSupabaseClient().from('working_hours').select('*')
const workingHours = ref(data)
const workingHour = ref(null)

const WorkingHours = computed(() => {
    if (searchFilter.value) {
        return workingHours.value.filter(item => item.name.toLowerCase().includes(searchFilter.value.toLowerCase()));
    } else {
        return workingHours.value
    }
})

const loadWorkingHour = async (wh) => {
    if (wh?.id) {
        workingHour.value = wh
    } else {
        workingHour.value = {}
    }
}


const deleteWorkingHour = async (wh, index) => {
    if (confirm('Are you sure you want to delete this Working Hours?')) {
        await useSupabaseClient().from('working_hours').delete().eq('id', wh.id)
        workingHours.value.splice(index, 1)
    }
    close()
}

const close = () => {
    workingHour.value = null
}

const createWorkingHour = async (wh) => {
    const { data, error } = await useSupabaseClient().from('working_hours').insert([{...wh, business_id: useBusiness().getBusiness.id}]).select("*").single()
    if (!error) {
        workingHours.value.push(data)
    }
}

const updateWorkingHour = async (wh) => {
    const index = workingHours.value.findIndex(hour => hour.id === wh.id)
    if (index !== -1) {
        workingHours.value[index] = wh
        await useSupabaseClient().from('working_hours').update(wh).eq('id', wh.id)
    }
}

onMounted(() => {
    initFlowbite()
})
</script>