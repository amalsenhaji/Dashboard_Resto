<template>
    <section class="">
        <div class="mx-auto ">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" v-model="searchFilter"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E10A23] dark:focus:border-[#E10A23]"
                                    placeholder="Search" required>
                            </div>
                        </form>
                    </div>
                    <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button type="button" @click="loadModifier()"
                            class="flex items-center justify-center text-white bg-[#E10A23] hover:bg-[#E10A23] focus:ring-4 focus:ring-[#E10A23] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#E10A23] dark:hover:bg-[#E10A23] focus:outline-none dark:focus:ring-[#E10A23]">
                            <svg class="h-5 w-5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Add modifier
                        </button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-3">Modifier id</th>
                                <th scope="col" class="px-4 py-3">Modifier name</th>
                                <th scope="col" class="px-4 py-3">Public Modifier?</th>
                                <th scope="col" class="px-4 py-3">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-gray-700" v-for="(modifier, index) in filteredModifiers"
                                :key="index">
                                <td class="px-4 py-3">{{ modifier.id }}</td>
                                <td class="px-4 py-3">{{ modifier.name }}</td>
                                <td class="px-4 py-3">{{ modifier.business_id ? 'No' : 'Yes' }}</td>
                                <td class="px-4 py-3 flex items-center justify-end">
                                    <button @click="loadModifier(modifier)"
                                        class="text-[#E10A23] block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>


                                    </button>
                                    <button @click="deleteModifier(modifier, index)"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg class="w-6 h-6 justify-center text-[#E10A23] dark:text-white inline"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    <!-- Main modal -->
    <ModifiersModal v-if="Modifier" v-model="Modifier" @close="close" @create="createModifier" @update="updateModifier" />
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { initFlowbite } from 'flowbite'

const searchFilter = ref('')
const Modifiers = ref([])

const { data, error } = await useSupabaseClient().from('modifiers').select('*')
if (error) {
    console.error('Error fetching modifiers:', error)
} else {
    Modifiers.value = data
}

const filteredModifiers = computed(() => {
    if (searchFilter.value) {
        return Modifiers.value.filter(item => item.name.toLowerCase().includes(searchFilter.value.toLowerCase()));
    } else {
        return Modifiers.value
    }
})

const Modifier = ref(null)

const close = () => {
    Modifier.value = null
}

const loadModifier = async (m) => {
    if (m?.id) {
        Modifier.value = m
    } else {
        Modifier.value = {}
    }
}

const updateModifier = async () => {
    await useSupabaseClient().from('modifiers').update(Modifier.value).eq('id', Modifier.value.id)
    const index = Modifiers.value.findIndex(mod => mod.id === Modifier.value.id)
    if (index !== -1) {
        Modifiers.value[index] = Modifier.value
    }
    Modifier.value = null
}

const createModifier = async () => {
    const { data, error } = await useSupabaseClient().from('modifiers').insert({...Modifier.value, business_id: useBusiness().getBusiness.id}).select("*").single()
        Modifiers.value.push(data)
    }

const deleteModifier = async (modifier, index) => {
    if (confirm('Are you sure you want to delete this modifier?')) {
        await useSupabaseClient().from('modifiers').delete().eq('id', modifier.id)
        Modifiers.value.splice(index, 1)
    }
}

onMounted(() => {
    initFlowbite()
})
</script>

<style>
.overflow-x-auto {
    min-height: calc(70vh);
}
</style>
