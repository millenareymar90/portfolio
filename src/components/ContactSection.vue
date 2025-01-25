<template>
  <section class="mt-12" id="contact">
    <h2 class="text-4xl font-bold text-left mb-4 px-4 xl:pl-16">
      Connect With Me
    </h2>
    <div
      class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8"
      data-aos="zoom-in-up"
    >
      <div>
        <p class="pt-8 text-justify">
          I believe that collaboration is the cornerstone of success. By
          connecting with like-minded individuals and organizations, we can
          achieve greater innovation, growth, and impact.
        </p>
        <p class="pt-4 text-justify">
          Let’s start a conversation about ideas, projects, or opportunities
          that matters to you. Whether you're looking to explore new
          opportunities, enhance your business strategy, or achieve specific
          goals, I am committed to delivering exceptional value and driving
          impactful results that align with your needs. Don’t hesitate to reach
          out—I look forward to connecting and creating something remarkable
          together.
        </p>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8"
        >
          <div
            v-for="element in Contacts"
            :key="element.id"
            class="flex items-center rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition p-4 hover:scale-105 mb-4"
          >
            <div
              class="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md"
            >
              <img
                :src="element.icon"
                alt="service icon"
                class="h-12 w-12 object-contain"
              />
            </div>
            <div class="ml-6">
              <h3
                class="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 lg:text-xl dark:text-white"
              >
                {{ element.name }}
              </h3>
              <p class="text-sm mt-2">{{ element.contact }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          background: linear-gradient(135deg, #6e7a8f 0%, #2d3748 100%);
          width: 100%;
          height: 100%;
          border-radius: 15px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 25px;
        "
      >
        <form
          class="flex flex-col space-y-6"
          @submit.prevent="handleSubmit"
          data-aos="zoom-in-up"
        >
          <div>
            <label for="email" class="text-gray-300 text-sm font-semibold"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              id="email"
              class="bg-[#2d3748] text-gray-200 placeholder:text-gray-400 text-sm rounded-lg block w-full p-4 mt-2"
              placeholder="email@example.com"
              name="email"
              required
            />
          </div>
          <div>
            <label for="subject" class="text-gray-300 text-sm font-semibold"
              >Subject</label
            >
            <input
              v-model="subject"
              type="text"
              id="subject"
              class="bg-[#2d3748] text-gray-200 placeholder:text-gray-400 text-sm rounded-lg block w-full p-4 mt-2"
              placeholder="Subject"
              name="subject"
              required
            />
          </div>
          <div>
            <label for="message" class="text-gray-300 text-sm font-semibold"
              >Message</label
            >
            <textarea
              v-model="message"
              id="message"
              class="bg-[#2d3748] text-gray-200 placeholder:text-gray-400 text-sm rounded-lg block w-full p-4 mt-2"
              placeholder="Write your message..."
              name="message"
              required
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-5 rounded-full font-semibold transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
      <div
        class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"
      ></div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";
import { useToast } from "vue-toastification";
import gmailIcon from "@/assets/gmail.svg";
import linkedinIcon from "@/assets/linkedin.svg";

const Contacts = ref([
  {
    id: 1,
    icon: gmailIcon,
    name: "Gmail",
    contact: "millenareymar90@gmail.com",
  },
  {
    id: 2,
    icon: linkedinIcon,
    name: "LinkedIn",
    contact: "Reymar Millena",
  },
]);

const email = ref("");
const subject = ref("");
const message = ref("");
const error = ref("");
const successMessage = ref("");

const toast = useToast();

const handleSubmit = async () => {
  try {
    error.value = "";
    successMessage.value = "";

    if (!email.value || !subject.value || !message.value) {
      error.value = "All fields are required.";
      toast.error(error.value);
      return;
    }

    const templateParams = {
      from_email: email.value,
      subject: subject.value,
      message: message.value,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    await emailjs.send(serviceId, templateId, templateParams, userId);

    successMessage.value = "Your message has been sent successfully!";
    toast.success(successMessage.value);

    email.value = "";
    subject.value = "";
    message.value = "";
  } catch (err) {
    error.value = "Failed to send the message. Please try again.";
    toast.error(error.value);
    console.error(err);
  }
};
</script>
