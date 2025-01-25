<template>
  <section class="mt-20 w-full" id="services">
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
        <span
          class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
        ></span>
      </span>
    </div>
    <div class="px-4 xl:pl-16">
      <h2 class="text-4xl font-bold mb-4">My Services</h2>
      <p class="max-w-2xl mx-auto sm:mx-0">
        I specialize in delivering bespoke services that emphasize
        functionality, scalability, and efficiency.
      </p>
    </div>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3 items-center justify-center"
    >
      <div
        v-for="service in services"
        :key="service.id"
        data-aos="fade-up"
        class="flex flex-col items-center justify-between px-8 py-12 rounded-xl rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition h-full"
      >
        <div
          class="relative flex-shrink-0 mx-auto h-24 w-24 text-center xl:h-28 xl:w-28 flex items-center justify-center"
        >
          <div>
            <img
              :src="service.icon"
              alt="service icon"
              class="h-full w-full object-contain z-10 p-1"
            />
          </div>
        </div>
        <div class="text-center">
          <h3
            class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 lg:text-xl"
          >
            {{ service.name }}
          </h3>
          <p class="mt-4 text-sm md:text-base leading-relaxed text-justify">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import webDeveloperIcon from "@/assets/services/web_developer.svg";
import mobileIcon from "@/assets/services/mobile_developer.svg";
import sqlIcon from "@/assets/services/server.svg";
import excelIcon from "@/assets/services/spread_sheet.svg";
import analyticsIcon from "@/assets/services/analytics.svg";
const services = ref([
  {
    id: 1,
    icon: webDeveloperIcon,
    name: "Web Development",
    description:
      "Transform ideas into dynamic, scalable web applications utilizing PHP frameworks, seamless and responsive websites crafted to meet specific needs. With robust database solutions such as MySQL or MSSQL, efficient and reliable data management ensures a superior user experience. Bring visions to life with cutting-edge technology and high-performance solutions.",
  },
  {
    id: 2,
    icon: mobileIcon,
    name: "Mobile Development",
    description:
      "Create innovative and high-performance mobile applications. Utilizing the latest technologies, design seamless, user-friendly apps for Android platforms. From concept to deployment, each app is tailored to meet unique business needs, ensuring optimal functionality and an exceptional user experience. Unlock the potential of mobile technology and expand your reach with custom solutions.",
  },
  {
    id: 3,
    icon: sqlIcon,
    name: "SQL Database Design and Management",
    description:
      "Design efficient and scalable SQL databases tailored to your business needs. Focuses on MySQL and MSSQL, expert database design ensures optimal performance, data integrity, and seamless data management. Create robust databases that support your applications and drive data-driven success.",
  },
  {
    id: 4,
    icon: excelIcon,
    name: "Advanced Excel and VBA Automation",
    description:
      "Unlock the full potential of your data with advanced Excel and VBA automation services. Streamline complex tasks, improve efficiency, and reduce errors by automating repetitive processes. From custom-built macros to sophisticated data analysis and reporting solutions, leverage the power of Excel and VBA to boost productivity and enhance decision-making in your organization.",
  },
  {
    id: 5,
    icon: analyticsIcon,
    name: "Data Analytics",
    description:
      "Transform raw data into actionable insights. By leveraging advanced tools and techniques, data is analyzed to uncover trends, patterns, and opportunities that drive informed decision-making. Whether it's for business intelligence, predictive analytics, or reporting, unlock the full potential of your data to optimize strategies and achieve measurable results.",
  },
]);
</script>
