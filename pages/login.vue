<template>
    <div class="container">
        <img src="@/assets/images/logo.png" class="w-44 ml-[7%] mt-[2%]">
        <div class="signin-signup">
            <form @submit.prevent="signInWithOtp" class="sign-in-form">
                <h2 class="title">Sign in</h2>
                <div class="input-field w-full md:w-[80%] pl-5">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                            clip-rule="evenodd" />
                    </svg>

                    <input type="email" placeholder="Email" v-model="credentials.email" required />
                    <button type="button" id="otp-button" @click="sendOTP">Get OTP</button>
                </div>

                <div class="input-field w-full md:w-[80%] pl-5">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M10 5a2 2 0 0 0-2 2v3h2.4A7.48 7.48 0 0 0 8 15.5a7.48 7.48 0 0 0 2.4 5.5H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V7a4 4 0 1 1 8 0v1.15a7.446 7.446 0 0 0-1.943.685A.999.999 0 0 1 12 8.5V7a2 2 0 0 0-2-2Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414-1.414l-.707-.707V14Z"
                            clip-rule="evenodd" />
                    </svg>

                    <input type="text" placeholder="OTP" id="otp-input" v-model="credentials.token"
                        :disabled="!otpSent" />
                </div>
                <label class="ml-[-45%]  text-[#5F696F]  text-sm">Check your email</label>
                <input type="submit" value="Login" class="btnsub w-full md:w-[80%]">

            </form>
            <form v-if="!formSubmitted" @submit.prevent="handleSignUp" class="sign-up-form">
                <h2 class="title">Sign up</h2>
                <div class="input-field w-full md:w-[70%]">
                    <i class="fas fa-building"></i>
                    <input v-model="signupform.fullName" type="text" placeholder="Your full name">
                </div>
                <div class="input-field w-full md:w-[70%]">
                    <i class="fas fa-envelope"></i>
                    <input v-model="signupform.email" type="text" placeholder="Your email" required>
                </div>
                <div class="input-field w-full md:w-[70%]">
                    <i class="fas fa-envelope"></i>
                    <input v-model="signupform.phoneNumber" type="text" placeholder="Your phone number">
                </div>
                <div class="input-field w-full md:w-[70%]">
                    <i class="fas fa-building"></i>
                    <input v-model="signupform.businessName" type="text" placeholder="Business name">
                </div>

                <div class="input-field w-full md:w-[70%]">
                    <i class="fas fa-map-marker"></i>

                    <input ref="autocompleteInput" type="text" autocomplete="off" id="address-input"
                        v-model="signupform.businessAddress.street" placeholder="Business address">
                </div>


                <input type="submit" value="Sign up" class="btnsub w-full md:w-[70%]">
            </form>
            <form @click.prevent="verifyOTP" v-if="formSubmitted">
                <h2 class="title">Enter OTP</h2>
                <div class="input-field w-full md:w-[70%]">
                    <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="OTP" v-model="signupform.token">
                </div>
                <button type="submit" value="Check your email" class="btnsub w-full md:w-[70%]" />
            </form>
        </div>
        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3></h3>
                    <p></p>
                    <button class="btn" @click="toggleView(null)" style="margin:50px;">Sign in</button>
                </div>
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3></h3>
                    <p></p>
                    <button class="btn" @click="toggleView('sign-up-mode')" style="margin:50px;">Sign up</button>
                </div>
            </div>
        </div>
    </div>

</template>



<script setup lang="ts">
import { zones } from "~/public/timezones.json";

definePageMeta({
    layout: "guest",
    middleware: ["guest"]
});
const toast = useToast()
const credentials = ref({
    email: "",
    token: "",
});
const otpValue = ref("");

const formSubmitted = ref(false);

var otpInput
const otpSent = ref(false);

const container = ref(null);
const toggleView = (view) => {
    if (view == "sign-up-mode") {
        container.value.classList.add("sign-up-mode");
    } else {
        container.value.classList.remove("sign-up-mode");
    }
}
const sendOTP = async () => {
    const { error } = await useSupabaseClient().auth.signInWithOtp({
        email: credentials.value.email || signupform.value.email
    })
    if (error) toast.add({ title: error.message, color: 'red' })
    else {
        otpSent.value = true;
        //focus on otp input field
        otpInput.focus();
        toast.add({ title: 'OTP Sent! Please check your email' })
    }
}

const signInWithOtp = async () => {
    const { error } = await useSupabaseClient().auth.verifyOtp({ email: credentials.value.email, token: credentials.value.token, type: 'email' })
    if (error && error.message) {
        toast.add({ title: error.message, color: 'red' })
        return
    }
    toast.add({ title: 'Logged in!' })
    useRouter().push("/")
}
const signupform = ref({
    email: "",
    fullName: "",
    phoneNumber: "",
    businessName: "",
    businessAddress: {},
    token: "",
    user_id: ""

});

const handleSignUp = async () => {
    const { data, error } = await useSupabaseClient().auth.signUp({
        email: signupform.value.email,
    });

    if (!error) {
        sendOTP();
        formSubmitted.value = true;
    } else {
        console.error(error);
    }
};

const verifyOTP = async () => {
    const { error, data } = await useSupabaseClient().auth.verifyOtp({ email: signupform.value.email, token: signupform.value.token, type: 'email' })

    if (error) {
        toast.add({ title: error.message, color: 'red' });
    } else {
        toast.add({ title: 'User created!', color: 'green' });
    }
    if (data) {

        console.log("User UID:", data.id);
        signupform.value.user_id = data.id;
    } else {
        console.log("User not ");
    }
    console.log(signupform.value);

};
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
const autocompleteInput = ref(null);
let autocomplete: google.maps.places.Autocomplete;



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
onMounted(() => {
    container.value = document.querySelector('.container');
    otpInput = document.getElementById('otp-input');
});
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

#otp-button {
    background-color: hwb(353 8% 19%);
    color: white;
    height: 5vh;

    padding: 0px 10px;
    border: 2px solid #e10a23;
    cursor: pointer;
    border-radius: 0 17px 19px 0;
    border-left: 2px solid hwb(353 8% 19%);
}

#otp-button:hover {
    background-color: #c00;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #444;
}

.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #fff;
    border-radius: 0;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
}



.container::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/restauback.jpeg');
    background-size: cover;
    z-index: 6;
    transform: translateX(100%);
    transition: 1s ease-in-out;
}

.signin-signup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 5;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    min-width: 238px;
    padding: 0 10px;
}

.sign-in-form label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

form.sign-in-form {

    opacity: 1;
    transition: 0.5s ease-in-out;
    transition-delay: 1s;
}

form.sign-up-form {
    opacity: 0;
    transition: 0.5s ease-in-out;
    transition-delay: 1s;
}

.title {
    font-size: 35px;
    color: #e10a23;
    margin-bottom: 10px;
}

.input-field {
    height: 5vh;
    background: #f0f0f0;
    margin: 10px 0;
    border: 2px solid #e10a23;
    border-radius: 50px;
    display: flex;
    align-items: center;

}

.input-field input:focus {
    outline: none;
    border: 2px solid transparent;
    /* Ajoute une bordure transparente pour neutraliser le contour */
    box-shadow: none;
}

.input-field i {
    flex: 1;
    text-align: center;
    color: #666;
    font-size: 18px;
}

.input-field input {
    flex: 5;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: #444;
}

.btn {
    width: 150px;
    height: 5vh;
    border: none;
    border-radius: 50px;
    background: #e10a23;
    color: #fff;
    font-weight: 600;
    margin: 10px 0;
    text-transform: uppercase;
    cursor: pointer;
}

.btnsub {
    height: 5vh;
    border: none;
    border-radius: 50px;
    background: #e10a23;
    color: #fff;
    font-weight: 600;
    margin: 10px 0;
    text-transform: uppercase;
    cursor: pointer;
}

.btn:hover {
    background: #e10a23;
}

.social-text {
    margin: 10px 0;
    font-size: 16px;
}

.social-media {
    display: flex;
    justify-content: center;
}

.social-icon {
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    border: 1px solid #444;
    border-radius: 50px;
    margin: 0 5px;
}

a {
    text-decoration: none;
}

.social-icon:hover {
    color: #e10a23;
    border-color: #e10a23;
}

.panels-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 35%;
    min-width: 238px;
    padding: 0 10px;
    text-align: center;
    z-index: 6;
}

.left-panel {
    pointer-events: none;
}

.content {
    color: #fff;
    transition: 1.1s ease-in-out;
    transition-delay: 0.5s;
}

.panel h3 {
    font-size: 24px;
    font-weight: 600;
}

.panel p {
    font-size: 15px;
    padding: 10px 0;
}

.image {
    width: 100%;
    transition: 1.1s ease-in-out;
    transition-delay: 0.4s;
}

.left-panel .image,
.left-panel .content {
    transform: translateX(-200%);
}

.right-panel .image,
.right-panel .content {
    transform: translateX(0);
}

.account-text {
    display: none;
}

/*Animation*/
.container.sign-up-mode::before {
    transform: translateX(0);
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
    transform: translateX(200%);
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
    transform: translateX(0);
}

.container.sign-up-mode form.sign-in-form {
    opacity: 0;
}

.container.sign-up-mode form.sign-up-form {
    opacity: 1;
}

.container.sign-up-mode .right-panel {
    pointer-events: none;
}

.container.sign-up-mode .left-panel {
    pointer-events: all;
}

/*Responsive*/
@media (max-width:779px) {
    .container {
        width: 100vw;
        height: 100vh;
    }
}

@media (max-width:635px) {
    .container::before {
        display: none;
    }

    form {
        width: 80%;
    }

    form.sign-up-form {
        display: none;
    }

    .container.sign-up-mode2 form.sign-up-form {
        display: flex;
        opacity: 1;
    }

    .container.sign-up-mode2 form.sign-in-form {
        display: none;
    }

    .panels-container {
        display: none;
    }

    .account-text {
        display: initial;
        margin-top: 30px;
    }
}

@media (max-width:320px) {
    form {
        width: 90%;
    }
}
</style>