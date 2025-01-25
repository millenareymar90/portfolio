<template>
  <section class="mt-20" id="projects">
    <div class="px-4 xl:pl-16">
      <div class="mb-4 md:flex md:justify-between xl:pr-16">
        <h2 class="text-4xl font-bold">My Projects</h2>
        <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
          <button
            class="hover:text-primary"
            v-for="category in [
              'All',
              'Web Development',
              'Mobile App',
              'Excel',
            ]"
            :key="category"
            @click="() => (selectedCategory = category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
      <ul
        class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        data-aos="fade-right"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-md"
        >
          <!-- Image Container -->
          <div
            class="p-12 h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 rounded-t-xl relative group"
            :style="{
              backgroundImage: 'url(' + project.image[0] + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
            <div
              class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
            >
              <!-- Modal for carousel-->
              <a
                class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                @click="openModal(project)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <!-- Project Details -->
          <div class="p-6 rounded-b-xl text-justify">
            <h3 class="text-lg font-semibold mb-2 truncate">
              {{ project.title }}
            </h3>
            <p class="text-[#ADB7BE]">
              {{ truncatedDescription(project.description) }}
              <span
                class="text-blue-500 cursor-pointer hover:underline"
                v-if="project.description.length > 100"
                @click="openModal(project)"
              >
                See More
              </span>
            </p>
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mt-4">
              <div
                v-for="technology in project.technologies"
                :key="technology"
                class="text-xs text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-[#3B3B4E] py-1 px-2 rounded-full"
              >
                {{ technology }}
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>

    <!-- Modal -->
    <div
      v-if="modalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        class="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 relative"
      >
        <!-- Close Button -->
        <button
          class="absolute top-4 right-4 w-12 h-12 p-4 flex items-center justify-center text-2xl hover:scale-105"
          @click="closeModal"
        >
          &times;
        </button>

        <!-- Header with Title -->
        <div class="p-4 rounded-t-lg shadow-md">
          <h3 class="text-2xl font-bold text-left text-black">
            {{ modalProject.title }}
          </h3>
        </div>

        <!-- Modal Content -->
        <div class="flex flex-col lg:flex-row">
          <!-- Carousel -->
          <div class="lg:w-full flex flex-col items-center">
            <div class="flex items-center justify-between">
              <button
                class="w-12 h-12 p-2 opacity-80 hover:opacity-100 hover:scale-105"
                @click="prevImage"
              >
                &larr;
              </button>
              <img
                :src="currentImage"
                alt="Project image"
                class="w-[500px] h-[500px] object-contain"
              />
              <button
                class="w-12 h-12 p-2 opacity-80 hover:opacity-100 hover:scale-105"
                @click="nextImage"
              >
                &rarr;
              </button>
            </div>
          </div>

          <!-- Caption -->
          <div
            class="lg:w-2/5 p-6 text-black text-justify overflow-auto max-h-[500px] flex flex-col"
          >
            <!-- Description -->
            <p class="mb-4">
              {{ modalProject.description }}
            </p>
          </div>
        </div>

        <!-- Technologies below the Description (separate from the scrollable overflow) -->
        <div
          class="p-4 mt-4 flex flex-wrap gap-2 bg-gray-50 dark:bg-gray-700 rounded-b-lg"
        >
          <div
            v-for="technology in modalProject.technologies"
            :key="technology"
            class="text-xs py-1 text-white px-2 bg-gray-500 rounded-full"
          >
            {{ technology }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";

import aisImage from "@/assets/projects/ais/electrict.png";
import aisImage1 from "@/assets/projects/ais/sgrt.png";
import aisImage2 from "@/assets/projects/ais/complaint.png";
import aisImage3 from "@/assets/projects/ais/timorex.png";
import aisImage4 from "@/assets/projects/ais/defects.png";

import gisImage from "@/assets/projects/gis/donmarMap.png";
import gisImage1 from "@/assets/projects/gis/donmarGrapsh.png";

import dssImage from "@/assets/projects/dss/login.png";
import dssImage1 from "@/assets/projects/dss/modules.png";
import dssImage2 from "@/assets/projects/dss/uploading.png";
import dssImage3 from "@/assets/projects/dss/history.png";

import dsrImage from "@/assets/projects/dsr/login.png";
import dsrImage1 from "@/assets/projects/dsr/request.png";

import cmsImage from "@/assets/projects/cms/login.png";
import cmsImage1 from "@/assets/projects/cms/dashboard.png";
import cmsImage2 from "@/assets/projects/cms/appointments.png";
import cmsImage3 from "@/assets/projects/cms/appointment.png";
import cmsImage4 from "@/assets/projects/cms/transaction.png";

import fStoreImage from "@/assets/projects/fStore/login.png";
import fStoreImage1 from "@/assets/projects/fStore/dashboard.png";
import fStoreImage2 from "@/assets/projects/fStore/itemCatalog.png";
import fStoreImage3 from "@/assets/projects/fStore/inventoryReport.png";
import fStoreImage4 from "@/assets/projects/fStore/pullout.png";

import meterReaderImage from "@/assets/projects/meterReader/login.png";
import meterReaderImage1 from "@/assets/projects/meterReader/dashboard.png";
import meterReaderImage2 from "@/assets/projects/meterReader/meterlist.png";
import meterReaderImage3 from "@/assets/projects/meterReader/graphs.png";
import meterReaderImage4 from "@/assets/projects/meterReader/reports.png";
import meterReaderImage5 from "@/assets/projects/meterReader/cover.png";

import pestmonImage from "@/assets/projects/pestmon/login.png";
import pestmonImage1 from "@/assets/projects/pestmon/dashboard.png";
import pestmonImage2 from "@/assets/projects/pestmon/list.png";
import pestmonImage3 from "@/assets/projects/pestmon/newTreatment.png";
import pestmonImage4 from "@/assets/projects/pestmon/treatment.png";
import pestmonImage5 from "@/assets/projects/pestmon/cover.png";

import excelImage from "@/assets/projects/excel/aphids.png";
import excelImage1 from "@/assets/projects/excel/bunch.png";
import excelImage2 from "@/assets/projects/excel/defoliator.png";
import excelImage3 from "@/assets/projects/excel/MB.png";
import excelImage4 from "@/assets/projects/excel/sgrt.png";

import mapperImage from "@/assets/projects/mapper/donmar.png";
import mapperImage1 from "@/assets/projects/mapper/donmar1.png";

const Projects = ref([
  {
    id: 1,
    category: "Web Development",
    image: [aisImage, aisImage1, aisImage2, aisImage3, aisImage4],
    title: "Agricultural Information System",
    description:
      "The Agriculture Information System (AIS) is an intuitive web application developed in collaboration with TADECO to optimize banana plantation productivity. AIS streamlines key processes from planting to box preparation by offering comprehensive monitoring and reporting tools. It consolidates data on banana health, weather, and other critical factors, visualized through user-friendly graphs and tables covering TADECO’s 6,602 hectare plantation. This system empowers decision makers to address challenges such as fusarium wilt, sigatoka, field losses, and fruit waste, ensuring sustainable growth and resilience in the industry.",
    technologies: ["PHP", "Vue JS", "HighCharts", "MSSQL"],
    gitURL: "",
  },
  {
    id: 2,
    category: "Web Development",
    image: [gisImage, gisImage1],
    title: "Geographical Information System",
    description:
      "The Geographical Information System (GIS) is a sophisticated web application developed with TADECO to enhance banana plantation management through precise geospatial analysis. GIS features a comprehensive map of TADECO’s plantation and its expansions—ABC Farms, Pantukan, Don Marcelino, Lupon, and Cateel—detailing the spatial layout of all lots. It provides real-time data on lot conditions based on selected parameters, enabling effective monitoring, resource allocation, and intervention tracking. By addressing challenges like Fusarium wilt, Sigatoka, and field losses, GIS has enhanced operational efficiency, reduced losses, and reinforced TADECO’s position as a global leader in the banana industry. This indispensable tool ensures sustainable plantation management and supports long-term success by overcoming both geographical and operational challenges.",
    technologies: ["PHP", "SVG", "HighCharts", "MSSQL"],
    gitURL: "",
  },
  {
    id: 3,
    category: "Web Development",
    image: [dssImage, dssImage1, dssImage2, dssImage3],
    title: "Data Submission Station",
    description:
      "The Data Submission Station is a crucial tool designed to streamline the process of uploading and managing data within a banana plantation management system. It allows users to upload CSV files generated from various Excel data entries across different plantation zones. This tool simplifies the data input process by ensuring seamless integration of zone-specific data, such as production figures, weather reports, and field conditions, into the central system. By automatically handling these CSV files, the Data Submission Station eliminates the need for manual data entry, reducing the risk of errors and improving overall efficiency. The system supports a wide range of data types, making it versatile for use across different plantation departments. Whether tracking productivity, monitoring health conditions, or managing resources, the Data Submission Station ensures that all relevant data is accurately captured and processed in real time, empowering decision-makers with reliable insights for informed, data-driven choices.",
    technologies: ["PHP", "MSSQL"],
    gitURL: "",
  },
  {
    id: 4,
    category: "Web Development",
    image: [dsrImage, dsrImage1],
    title: "Data & Service Request System",
    description:
      "The Data & Service Request System is an integrated platform designed to simplify and streamline the process of submitting, tracking, and managing service and data requests within the organization. This system enables users to submit requests for various services such as technical support, maintenance, data analysis, and ensures that these requests are routed to the appropriate teams for efficient handling. By providing a centralized interface, the system allows users to track the status of their requests in real-time, offering transparency and accountability throughout the request lifecycle. Equipped with automated workflows, the system ensures that requests are prioritized, assigned, and resolved promptly, improving response times and overall service efficiency. Additionally, the system collects relevant data related to each request, which can be analyzed to identify trends, optimize service processes, and enhance organizational performance.",
    technologies: ["PHP", "MSSQL"],
    gitURL: "",
  },
  {
    id: 5,
    category: "Web Development",
    image: [cmsImage, cmsImage1, cmsImage2, cmsImage3, cmsImage4],
    title: "Clinic Management System",
    description:
      "The Clinic Management System is a comprehensive solution designed to streamline clinic operations, including patient appointments, records management, and communication. This system allows patients to schedule appointments online using Calendly, making the booking process seamless and efficient. By integrating with Calendly’s API, the system automatically extracts and stores appointment data in the clinic's database, eliminating the need for manual entry. Additionally, the system features SMS notifications to keep patients informed about their upcoming appointments. Patients receive timely reminders and updates, ensuring they are always prepared for their scheduled visits. The Clinic Management System improves overall clinic efficiency, enhances the patient experience, and supports smooth administrative operations.",
    technologies: ["PHP", "MySQL", "Highcharts"],
    gitURL: "",
  },
  {
    id: 6,
    category: "Web Development",
    image: [
      fStoreImage,
      fStoreImage1,
      fStoreImage2,
      fStoreImage3,
      fStoreImage4,
    ],
    title: "Inventory and Cashiering System",
    description:
      "The Inventory and Cashiering System for Frime Store is an advanced solution designed to manage inventory, sales, and financial transactions seamlessly. This system streamlines stock management by allowing real-time tracking of product quantities, automatically updating inventory levels as sales are processed. It helps store managers maintain accurate records of stock movements, reducing the risk of overstocking or stockouts. The system also features a comprehensive cashiering module, enabling quick and secure processing of customer purchases. By integrating with the store's payment system, it ensures smooth and efficient transactions. Additionally, the real-time reporting capabilities provide insightful analytics on sales trends, stock levels, and financial data, supporting data-driven decision-making for the store's growth and profitability. With its user-friendly interface and robust features, the Inventory and Cashiering System helps Frime Store optimize operations, enhance customer experience, and ensure financial accuracy.",
    technologies: ["Laravel", "MySQL", "Highcharts"],
    gitURL: "",
  },
  {
    id: 7,
    category: "Mobile App",
    image: [
      meterReaderImage5,
      meterReaderImage,
      meterReaderImage1,
      meterReaderImage2,
      meterReaderImage3,
      meterReaderImage4,
    ],
    title: "Emeter Reader",
    description:
      "The Emeter Reader is a mobile application designed to simplify the process of reading and monitoring electric meter consumption. It allows users to easily capture meter readings via their mobile devices, ensuring accurate and real-time data entry. The app includes features for daily and monthly consumption monitoring, providing users with a clear overview of their energy usage trends over time. Additionally, the Emeter Reader integrates with an API to fetch and store data in an in-house database, ensuring seamless synchronization and real-time updates. This integration facilitates efficient data management and allows users and utility providers to access up-to-date consumption data directly from the backend system. With real-time data tracking, the app helps users stay on top of their energy consumption, offering insights into patterns and potential savings opportunities. Built with Flutter, Express JS, and MSSQL, the Emeter Reader offers a scalable solution for efficient energy monitoring and management.",
    technologies: ["Flutter", "Express JS", "MSSQL"],
    gitURL: "",
  },
  {
    id: 8,
    category: "Mobile App",
    image: [
      pestmonImage5,
      pestmonImage,
      pestmonImage1,
      pestmonImage2,
      pestmonImage3,
      pestmonImage4,
    ],
    title: "PestMon",
    description:
      "PestMon is a mobile application designed to monitor and manage pest and disease treatment in agricultural settings. The app helps users track pest outbreaks and disease incidents, ensuring timely and effective treatment. It provides features for recording treatment details, including the type of pest or disease, the treatment method used, and the application date. One of the key features of PestMon is its geotagging functionality, which enables users to capture the exact location of pest or disease incidents. By associating treatments with specific geographic coordinates, the app allows farm foremen, surveyor and agricultural managers to monitor treatment effectiveness across different areas of their fields or plantations. This feature aids in optimizing pest management strategies and improving the overall health of crops. With real-time updates and a user-friendly interface, PestMon provides farmers with the tools they need to maintain healthy crops while minimizing the use of pesticides and other treatments, contributing to sustainable agricultural practices.",
    technologies: ["Flutter", "Express JS", "MSSQL"],
    gitURL: "",
  },
  {
    id: 9,
    category: "Excel",
    image: [excelImage, excelImage1, excelImage2, excelImage3, excelImage4],
    title: "Advanced Excel and VBA Automation",
    description:
      "Advanced Excel and VBA Automation is a powerful solution designed to enhance productivity and streamline data management using Microsoft Excel and Visual Basic for Applications (VBA). This automates complex Excel tasks, reducing the time spent on manual data processing and enhancing accuracy. It includes custom macros, automated reporting, and data manipulation features that can handle large datasets efficiently. With VBA scripting, users can create tailored solutions for repetitive tasks such as generating reports, performing calculations, data imports/exports, and more. The system also allows for seamless integration with external databases, such as MSSQL, ensuring smooth data flow between Excel and other business systems. This automation tool provides users with the flexibility to design custom workflows that meet specific business needs, boosting operational efficiency and improving decision-making.",
    technologies: ["Microsoft Excel", "Visual Basic App", "MSSQL"],
    gitURL: "",
  },
  {
    id: 10,
    category: "Excel",
    image: [mapperImage, mapperImage1],
    title: "Excel Thematic Mapping",
    description:
      "Excel Thematic Map Tool is designed to display the spatial distribution and variations of specific variables across banana plantations. This tool enables users to track and analyze key parameters such as harvest ranges per parcela, as well as other important agricultural metrics. It includes a customizable legend, allowing users to adjust settings based on their needs, enhancing the interpretation of data from different perspectives. Leveraging Visual Basic for Applications (VBA), the tool automatically colors map areas based on the selected data, providing a clear and visually intuitive representation of spatial trends. This feature makes it easy for users to identify patterns quickly and make data-driven decisions to improve plantation management. The Excel Thematic Map Tool offers a straightforward, highly effective way to visualize complex agricultural data, eliminating the need for specialized software. By bringing geographic data analysis directly into Excel, this tool bridges the gap between standard spreadsheet functionality and advanced mapping capabilities. It allows stakeholders to interpret critical information with ease, optimizing productivity across the plantation.",
    technologies: ["Microsoft Excel", "Visual Basic App", "MSSQL"],
    gitURL: "",
  },
]);

const selectedCategory = ref("All");
const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return Projects.value;
  }
  return Projects.value.filter(
    (project) =>
      project.category.toLocaleLowerCase() ===
      selectedCategory.value.toLocaleLowerCase()
  );
});

const modalOpen = ref(false);
const modalProject = ref(null);
const currentImageIndex = ref(0);

const openModal = (project) => {
  modalProject.value = project;
  currentImageIndex.value = 0;
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
  modalProject.value = null;
};

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + modalProject.value.image.length) %
    modalProject.value.image.length;
};

const nextImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % modalProject.value.image.length;
};

const currentImage = computed(
  () => modalProject.value?.image[currentImageIndex.value] || ""
);

const truncatedDescription = (description) =>
  description.length > 150 ? description.slice(0, 150) + "..." : description;
</script>
