<template>
  <section class="mt-18" id="certificates">
    <div class="mt-4 md:mt-0 flex flex-col z-10 w-full">
      <div
        class="container mx-auto px-6 md:px-12 lg:px-16 py-12"
        data-aos="slide-up"
      >
        <h2 class="text-4xl font-bold text-left mb-8">My Badges</h2>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 justify-items-center"
        >
          <div
            v-for="badge in Badges"
            :key="badge.id"
            class="flex flex-col justify-center items-center p-4 hover:scale-110 relative"
          >
            <a
              :href="badge.source"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center hover:text-primary transition w-full"
              style="display: block; text-align: center"
            >
              <img
                :src="badge.icon"
                alt="badge icon"
                class="h-38 w-38 object-contain cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto px-4 sm:px-6 lg:px-16 py-8 md:py-12"
      ddata-aos="slide-right"
    >
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-6 sm:mb-8"
      >
        My Certificates
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="element in Certificate"
          :key="element.id"
          class="flex flex-col sm:flex-row items-start sm:items-center rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition transform hover:scale-105 p-4"
        >
          <div
            class="w-full sm:w-48 h-32 sm:h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden group"
          >
            <img
              :src="element.image"
              alt="certificate image"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-6">
            <h3
              class="text-lg sm:text-xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:text-white"
            >
              {{ element.title }}
            </h3>
            <p class="text-sm mt-2 text-gray-700 dark:text-gray-300">
              {{ element.course }}
            </p>
            <p class="text-xs mt-1 text-gray-500 dark:text-gray-400">
              {{ element.date }}
            </p>
            <p class="text-xs mt-4">
              <a
                :href="element.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-primary hover:underline"
              >
                <i class="fas fa-eye text-slate-400 mr-2"></i> View Certificate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/4 -left-4 transform -translate-x-2/3 -translate-1/2"
    ></div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import badgeIcon from "@/assets/certificate/badge.png";
import badgeIcon1 from "@/assets/certificate/badge1.png";
import certificateImage from "@/assets/certificate/E-commerceCertification.svg";
import certificateImage1 from "@/assets/certificate/GoogleWorkspace.svg";
import certificateImage2 from "@/assets/certificate/CybersecurityProffessional.svg";
import certificateImage3 from "@/assets/certificate/DataScience.svg";

const Badges = ref([
  {
    id: 1,
    icon: badgeIcon,
    name: "Google Digital Marketing and E-Commerce Professional Certificate",
    source:
      "https://www.credly.com/badges/a71fdbe2-58fa-4729-a612-8f94064c6488/public_url",
  },
  {
    id: 2,
    icon: badgeIcon1,
    name: "E-commerce Foundations: Beginner's Guide to Starting an Online Store",
    source:
      "https://www.credly.com/badges/ce91a048-4e8e-4047-a0ba-dfb7f9710607/public_url",
  },
]);

const Certificate = ref([
  {
    id: 1,
    image: certificateImage,
    title: "Google Digital Marketing & E-commerce Professional Certificate",
    course: "Course | Google",
    date: "2024",
    link: "https://coursera.org/share/b983b74b2229f6535d7dc3791bf02e78",
  },
  {
    id: 2,
    image: certificateImage1,
    title: "Getting started with Google Workspace Specialization",
    course: "Coursera | Google",
    date: "2024",
    link: "https://coursera.org/share/01d2d7462c9bfc1c08a7fc9024803784",
  },
  {
    id: 3,
    image: certificateImage2,
    title: "Cybersecurity Foundations Specialization",
    course: "Coursera | Infosec",
    date: "2024",
    link: "https://coursera.org/share/bf335337013e915e4fdbc1099f9b4473",
  },
  {
    id: 4,
    image: certificateImage3,
    title: "Introduction to Data Science and scikit-learn in Python",
    course: "Course | LearnQuest",
    date: "2024",
    link: "https://coursera.org/share/9a1b7a54d28565d400269c14b4ce2b22",
  },
]);
</script>
