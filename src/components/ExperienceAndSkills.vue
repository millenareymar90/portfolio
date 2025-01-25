<template>
  <section class="mt-18" id="skills">
    <!-- Skills Section -->
    <div class="mt-4 md:mt-0 flex flex-col w-full">
      <div
        class="container mx-auto px-6 md:px-12 lg:px-16 py-12"
        data-aos="fade-left"
      >
        <h2 class="text-4xl font-bold text-left mb-8">My Skills</h2>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <div
            v-for="skill in Skills"
            :key="skill.id"
            class="flex flex-col items-center rounded-lg border border-gray-200 dark:border-gray-700 shadow-md bg-gray-100 dark:bg-gray-800 rounded-md hover:shadow-lg transition-transform transform hover:scale-105 p-4"
          >
            <div
              class="w-16 h-16 flex-shrink-0 flex items-center justify-center mb-4"
            >
              <img
                :src="skill.icon"
                alt="service icon"
                class="h-16 w-16 object-contain"
              />
            </div>
            <h3
              class="text-lg font-semibold uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 lg:text-xl dark:text-white"
            >
              {{ skill.name }}
            </h3>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div
        class="container mx-auto px-6 md:px-12 lg:px-16 py-12"
        data-aos="fade-right"
      >
        <h2 class="text-4xl font-bold text-left mb-8">My Experiences</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div
            v-for="element in Experinces"
            :key="element.id"
            class="flex items-center rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition p-4 hover:scale-105"
          >
            <div
              class="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md"
            >
              <img
                :src="element.icon"
                alt="service icon"
                class="h-20 w-20 object-contain"
              />
            </div>
            <div class="ml-6">
              <h3
                class="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 lg:text-xl dark:text-white"
              >
                {{ element.role }}
              </h3>
              <p class="text-sm mt-2">
                {{ element.company }}
              </p>
              <p class="text-xs mt-1">
                {{ element.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import phpIcon from "@/assets/skills/php.svg";
import laravelIcon from "@/assets/skills/laravel.svg";
import codeigniterIcon from "@/assets/skills/codeigniter.svg";
import javascriptIcon from "@/assets/skills/javascript.svg";
import vueJSIcon from "@/assets/skills/vueJS.svg";
import nodeIcon from "@/assets/skills/node.svg";
import expressIcon from "@/assets/skills/express.svg";
import flutterIcon from "@/assets/skills/flutter.svg";
import dartIcon from "@/assets/skills/dart.svg";
import mssqlIcon from "@/assets/skills/mssql.svg";
import mysqlIcon from "@/assets/skills/mysql.svg";
import vbIcon from "@/assets/skills/vb.svg";
import qgisIcon from "@/assets/skills/qgis.svg";
import tadecoIcon from "@/assets/skills/tadeco.svg";
import ggmpIcon from "@/assets/skills/ggmp.svg";
import githubIcon from "@/assets/skills/github.svg";
const Skills = ref([
  {
    id: 1,
    icon: phpIcon,
    name: "PHP",
  },
  {
    id: 2,
    icon: laravelIcon,
    name: "Laravel",
  },
  {
    id: 3,
    icon: codeigniterIcon,
    name: "CodeIgniter",
  },
  {
    id: 4,
    icon: javascriptIcon,
    name: "JavaScript",
  },
  {
    id: 5,
    icon: vueJSIcon,
    name: "Vue JS",
  },
  {
    id: 6,
    icon: nodeIcon,
    name: "Node JS",
  },
  {
    id: 7,
    icon: expressIcon,
    name: "Express JS",
  },
  {
    id: 8,
    icon: flutterIcon,
    name: "Flutter",
  },
  {
    id: 9,
    icon: dartIcon,
    name: "Dart",
  },
  {
    id: 10,
    icon: mssqlIcon,
    name: "Microsoft SQL Server",
  },
  {
    id: 11,
    icon: mysqlIcon,
    name: "MySQL",
  },
  {
    id: 12,
    icon: vbIcon,
    name: "Visual Basic",
  },
  {
    id: 13,
    icon: qgisIcon,
    name: "QGIS",
  },
  {
    id: 14,
    icon: githubIcon,
    name: "GitHub",
  },
]);

const Experinces = ref([
  {
    id: 1,
    icon: tadecoIcon,
    role: "Data Analyst",
    company: "Tagum Agricultural Development Company, Inc",
    date: "2020 - Present",
  },
  {
    id: 2,
    icon: ggmpIcon,
    role: "EDP - Information Technology Staff",
    company: "Far East Noble House Inc.",
    date: "2013 - 2017",
  },
]);
</script>
