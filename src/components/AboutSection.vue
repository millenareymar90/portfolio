<template>
  <section>
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse" data-aos="fade-left" id="about">
        <img src="@/assets/about.png" class="max-w-sm rounded-lg shadow-2xl" />
        <div class="px-4">
          <h2 class="text-4xl font-bold md:text-center mb-8">About Me</h2>
          <p class="text-lg leading-relaxed text-justify my-8">
            I’m passionate about creating high-quality, innovative solutions
            that help realize your ideas. With an emphasis on functionality,
            scalability, and efficiency, I am dedicated to delivering customized
            services that suit your specific requirements. Whether it involves
            web development, mobile applications, or data solutions, I take
            great pride in providing outcomes that foster success. I constantly
            seek to expand my knowledge and adapt to stay current with the
            latest trends, ensuring that the solutions I provide are always
            advanced and effective.
          </p>
          <p class="text-lg leading-relaxed text-justify">
            What inspires me the most is the chance to work closely with
            clients, grasping their vision, and transforming it into reality. I
            believe in cultivating long-term partnerships grounded in trust and
            openness, and I am dedicated to offering not only technical skills
            but also strategic insights to aid in your growth and success. Each
            project presents an opportunity to push my limits and deliver
            something extraordinary that truly adds value.
          </p>
        </div>
      </div>
    </div>
    <!-- Education Section -->
    <div
      class="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-4"
      data-aos="fade-right"
    >
      <h2 class="text-4xl font-bold text-left mb-8">My Education</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div
          v-for="element in education"
          :key="element.id"
          class="flex items-center rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition p-4 hover:scale-105"
        >
          <div
            class="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md"
          >
            <img
              :src="element.icon"
              alt="service icon"
              class="h-20 w-20 object-contain bg-gray-100 dark:bg-gray-800 rounded-md"
            />
          </div>
          <div class="ml-6">
            <h3
              class="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 lg:text-xl dark:text-white"
            >
              {{ element.School }}
            </h3>
            <p class="text-sm mt-2">
              {{ element.program }}
            </p>
            <p class="text-xs mt-1">
              {{ element.year }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import schoolIcon from "@/assets/schoolLogo.png";
import schoolIcon1 from "@/assets/schoolLogo1.png";
const education = ref([
  {
    id: 1,
    icon: schoolIcon,
    School: "Davao Del Norte State College",
    program: "Bachelor of Science in Information Technology",
    year: "Year : 2008 - 2012",
  },
  {
    id: 2,
    icon: schoolIcon1,
    School: "North Davao Colleges",
    program: "Bachelor of Secondary Education - Unit Earner",
    year: "Year : 2012 - 2017",
  },
]);
</script>

<style>
#about {
  position: relative;
}
</style>
