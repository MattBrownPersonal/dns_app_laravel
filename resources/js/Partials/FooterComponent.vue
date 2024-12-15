<template>

    <div class="flex flex-col items-center justify-center">
        <div class="grid grid-cols-2 gap-4 w-full contact_us_container">
            <div class="flex flex-col py-12">
                <div class="contact_us_text">
                    <p>We're <span class="text-outline">your</span> IT Services</p>
                    <p>problem solvers</p>
                </div>
                <div class="large_ibm_font pt-5">
                    Recognising your frustrations with your print environment, IT services, document management &
                    communications
                    and finding.
                    <br><br> Get in touch today!
                </div>
            </div>
            <form @submit.prevent="submitForm">
                <div class="flex flex-col py-20">
                    <!-- TODO: impliment form backend api -->
                    <input type="text" v-model="form.name" class="rounded text-white input_box placeholder-white mb-6"
                        placeholder="Name" />
                    <input type="email" v-model="form.email" class="rounded text-white input_box placeholder-white mb-6"
                        placeholder="Email" required oninvalid="this.setCustomValidity('Please enter valid email')"
                        oninput="this.setCustomValidity('')" />
                    <input type="text" v-model="form.telephone" class="rounded text-white input_box placeholder-white mb-6"
                        placeholder="Telephone" required
                        oninvalid="this.setCustomValidity('Please enter valid telephone number')"
                        oninput="this.setCustomValidity('')" />
                    <input type="text" v-model="form.company" class="rounded text-white input_box placeholder-white mb-6"
                        placeholder="Company" />
                    <input type="text" v-model="form.help" class="rounded text-white input_box placeholder-white mb-6"
                        placeholder="I need help with..." />
                    <div class="flex justify-end">
                        <button type="submit" class="bg-white text-black px-6 py-2 submit_button large_ibm_font">Submit
                            Now</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <img src="/assets/geometric_pink.png" alt="" class="geometric_pink">
    <div class="flex flex-col items-center justify-center text-white">
        <div class="grid grid-cols-6 gap-4 w-full footer">
            <div><img src="/assets/dns_logo.png" alt="DNS Logo"></div>
            <div>
                <p>Contact us</p>
                <p>E infor@dnslimited.co.uk</p>
                <p>T 0845 034 0895</p>
            </div>
            <div>
                <p>Address</p>
                <p>Unit 9</p>
                <p>Royal Scot Road</p>
                <p>Pride Park, Derby</p>
                <p>DE24 8AJ</p>
            </div>
            <div>
                <p>Opening Hours</p>
                <p>Min - Fri: </p>
                <p>9 am - 5:30 pm</p>
            </div>
            <div>
                <p>About Us</p>
                <p>CSR</p>
                <p>Environment & Sustainability</p>
                <p>Meet the team</p>
            </div>
            <div>
                <p>Services </p>
                <p>IT Services</p>
                <p>Communications </p>
                <p>Managed Print Services </p>
                <p>Document Management</p>
            </div>
        </div>
    </div>
    <hr class="text-white mt-12">
    <div class="flex justify-between text-white pt-6 footer_copywright px-8">
        <div>Design & built by Alt</div>
        <div>&copy; Document Network Services Ltd 2024</div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

const form = reactive({
    name: "",
    email: "",
    telephone: "",
    company: "",
    help: ""
});

const submitForm = async () => {
    try {
        const response = await axios.post("/contact-us", form);
        alert('Thank you ' + form.name + ', the form has been submitted');
        console.log(response.data);
        Object.keys(form).forEach((key) => (form[key] = ""));
    } catch (error) {
        if (error.response && error.response.status === 422) {
            console.error("Validation errors:", error.response.data.errors);
            alert("Please fix the errors and try again.");
        } else {
            console.error("Submission error:", error);
            alert("An unexpected error occurred.");
        }
    }
};
</script>

<style scoped></style>
