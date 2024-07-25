[4:42 PM] HAJAR ELKAMOUNI
<template>
    <div id="ItemModal" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <!-- Modal header -->
                <div
                    class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        {{ modelValue.id ? "Edit" : "Add" }} Item
                    </h3>
                    <button type="button" @click="close"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form @submit.prevent="save">
                    <div class="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                            <label for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" id="name" v-model="item.name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Ex. French Fries" required />
                        </div>
                        <div class="sm:col-span-1">
                            <div>
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" id="price" v-model="item.price"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Ex. $10" required />
                            </div>
                        </div>
                    </div>
                    <label for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="description" rows="5" v-model="item.description"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#E10A23] focus:border-[#E10A23] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write item description..." required></textarea>

                    <label for="tag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
                    <input type="text" name="tag" id="tag" v-model="tagsString"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E10A23] focus:border-[#E10A23] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Ex. Halal, Vegetarian" />

                    <div class="grid gap-4 mb-4 sm:grid-cols-2">
                        <div class="relative">
                            <label for="categories"
                                class="block my-4 text-sm font-medium text-gray-900 dark:text-white">Categories</label>
                            <button id="CategoryType" data-dropdown-toggle="CategoriesItem"
                                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full p-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                type="button">
                                Categories Search
                                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="CategoriesItem"
                                class="w-[50vw] hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                                <div class="p-3">
                                    <label for="input-group-search1" class="sr-only">Search</label>
                                    <div class="relative">
                                        <div
                                            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="text" id="input-group-search1" v-model="searchFilter"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Search Category">
                                    </div>
                                </div>
                                <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownSearchButton">
                                    <li v-for="(category, index) in filteredCategories" :key="index">
                                        <div
                                            class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input :id="'checkbox-item-' + category.id" type="checkbox"
                                                v-model="item.categories" :value="category.id"
                                                class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 rounded focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                            <label :for="'checkbox-item-' + category.id"
                                                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{
                            category.name }}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="sm:col-span-1 relative">
                            <div>
                                <label for="modifiers"
                                    class="block my-4 text-sm font-medium text-gray-900 dark:text-white">Modifiers</label>
                                <button id="ItemType" data-dropdown-toggle="ModifiersItem"
                                    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full p-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                    type="button">
                                    Modifiers category
                                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div id="ModifiersItem"
                                    class="w-[50vw] hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                                    <div class="p-3">
                                        <label for="input-group-search1" class="sr-only">Search</label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input type="text" id="input-group-search1" v-model="searchFiltermodifier"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search Modifier">
                                        </div>
                                    </div>
                                    <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownSearchButton">
                                        <li v-for="(modifier, index) in filteredModifiers" :key="index">
                                            <div
                                                class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <input :id="'checkbox-item-' + modifier.id" type="checkbox"
                                                    v-model="item.modifiers"
                                                    class="w-4 h-4 text-[#E10A23] bg-gray-100 border-gray-300 rounded focus:ring-[#E10A23] dark:focus:ring-[#E10A23] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    :value="modifier.id">
                                                <label :for="'checkbox-item-' + modifier.id"
                                                    class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{
                            modifier.name }}</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label for="Fulfillment Types"
                        class="block my-4 text-sm font-medium text-gray-900 dark:text-white">Fulfillment Types</label>
                    <div class="flex">
                        <div class="flex items-center mr-4" v-for="type in fulfillment_types" :key="type.id">
                            <input :id="'checkbox-' + type.id" type="checkbox" :value="type.id"
                                v-model="item.fulfillment_types"
                                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label :for="'checkbox-' + type.id"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ type.name
                                }}</label>
                        </div>
                    </div>
                    <label for="Items Image" class="block my-4 text-sm font-medium text-gray-900 dark:text-white">Items
                        Image</label>
                    <div class="grid grid-cols-1 gap-2 sm:grid-cols-12 py-2">
                        <div v-if="item.imgs.length" class="sm:col-span-4">
                            <img class="block w-full border-0 p-0 focus:ring-0 sm:text-sm h-[100px] object-cover object-center"
                                :src="item.imgs[0]" />
                            <div class="grid grid-cols-1 gap-0 sm:grid-cols-2">
                                <button @click="removeImage()"
                                    class="sm:col-span-2 border border-gray-300 text-gray-600 font-bold py-1 px-2 rounded inline-flex items-center dark:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                    <span>&nbsp; &nbsp;Change</span>
                                </button>
                            </div>
                        </div>
                        <div v-else class="sm:col-span-4">
                            <div class="flex justify-center">
                                <button @click="loadImage()" type="button" style="height: 120px; width: 100%"
                                    class="inline-flex items-center px-4 py-2 border border-grey-900 text-sm font-medium rounded-md shadow-sm text-grey-900 bg-white dark:bg-gray-700 dark:text-white">
                                    <svg class="w-8 h-8 m-auto text-gray-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M5 12h14m-7 7V5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <Media class="z-50" v-if="Mediafile" @close="Mediafile = false" @selected="addImage" />
                    </div>
                    <div class="my-4 flex items-center justify-between space-x-4">
                        <button type="submit"
                            class="text-white bg-[#E10A23] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            {{ modelValue.id ? "Edit" : "Add" }} Product
                        </button>
                        <button type="button" @click="close"
                            class="text-[#E10A23] bg-white hover:bg-[#E10A23] border border-[#E10A23] hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { initFlowbite, Modal, initModals } from 'flowbite'

const props = defineProps({
    modelValue: Object
});
const Mediafile = ref(null);
const Categories = ref([]);
const searchFilter = ref('');
const searchFiltermodifier = ref('');
let modal
const { data: datacategories, error: errorcategories } = await useSupabaseClient().from('categories').select('*');
if (errorcategories) {
    console.error(errorcategories);
} else {
    Categories.value = datacategories;
}

const Modifiers = ref([]);
const { data: dataModifiers, error: errormodifiers } = await useSupabaseClient().from('modifiers').select('*');
if (errormodifiers) {
    console.error(errormodifiers);
} else {
    Modifiers.value = dataModifiers;
}

const fulfillment_types = ref([
    { name: "Delivery", id: "delivery" },
    { name: "Dine-in", id: "dine-in" },
    { name: "Pickup", id: "pickup" },
    { name: "Curbside", id: "curbside" },
    { name: "Drive-through", id: "drive-through" },
]);


const item = ref({})
if (props.modelValue.id) {
    item.value = {
        ...props.modelValue,
        categories: props.modelValue.categories ? props.modelValue.categories.map(catId => parseInt(catId)) : [],
    modifiers: props.modelValue.modifiers ? props.modelValue.modifiers.map(modId => parseInt(modId)) : [],
    };
} else {
    item.value = {
        name: '',
        description: '',
        price: '',
        categories: [],
        modifiers: [],
        imgs: [],
        fulfillment_types: [],
        tags: []
    };
}

const emit = defineEmits(['update', 'create', 'close']);

const save = () => {
    if (props.modelValue.id) {
        emit('update', item.value);
    } else {
        emit('create', item.value);
    }
    close();
};

const close = () => {
    modal.hide()
    emit("close")
}

const filteredCategories = computed(() => {
    return Categories.value.filter((category) =>
        category.name.toLowerCase().includes(searchFilter.value.toLowerCase())
    );
});

const filteredModifiers = computed(() => {
    return Modifiers.value.filter((modifier) =>
        modifier.name.toLowerCase().includes(searchFiltermodifier.value.toLowerCase())
    );
});

const addImage = (fileUrl) => {
    console.log(fileUrl);
    item.value.imgs.push(fileUrl);
    Mediafile.value = null;
};

const loadImage = async (m) => {
    if (m?.id) {
        Mediafile.value = m

    } else {
        Mediafile.value = {}
    }
}
const removeImage = () => {
    item.value.imgs = []
    Mediafile.value = {}
};

const tagsString = computed({
    get() {
        return item.value.tags.join(", ");
    },
    set(value) {
        item.value.tags = value.split(",").map(tag => tag.trim());
    }
});


onMounted(() => {
    initFlowbite()
    initModals()
    const $modalElement = document.querySelector('#ItemModal')
    const modalOptions = {
        closable: false,
        backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
    }
    if ($modalElement) {
        modal = new Modal($modalElement, modalOptions)
    }
    modal.show()
});
</script>

<style scoped>
#CategoriesItem,
#ModifiersItem {
    width: 100%;
    left: 0;
}
</style>