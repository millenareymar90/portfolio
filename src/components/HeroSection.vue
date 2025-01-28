<template>
  <section>
    <div class="hero min-h-screen" id="profile">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div
          class="absolute top-0 inset-x-0 h-64 flex items-center justify-center"
        >
          <div
            class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"
          ></div>
          <div
            class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"
          ></div>
        </div>
        <div
          class="absolute z-[-10] top-1/2 -translate-y-1/2 w-1/3 right-0 h-[calc(60%)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"
        ></div>
        <div class="p-1 rounded-full shadow-lg border border-primary">
          <img
            src="@/assets/me.jpg"
            class="max-w-xs rounded-full object-cover shadow-2xl"
          />
        </div>
        <div class="px-4">
          <h1 class="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
            >
              Rey
            </span>
          </h1>
          <p class="pt-8 leading-relaxed text-justify">
            <span class="font-semibold"
              >Experienced Data Analyst and Web Application Developer</span
            >
            with experience in designing and maintaining web applications.
            Proficient in
            <span class="text-blue-500 font-semibold">PHP</span>,
            <span class="text-teal-500 font-semibold">MySQL</span>,
            <span class="text-blue-500 font-semibold">MSSQL</span>
            and frameworks such as
            <span class="text-indigo-500 font-semibold">Laravel</span>
            and
            <span class="text-red-500 font-semibold">CodeIgniter</span>, with a
            good understanding of
            <span class="text-yellow-500 font-semibold">JavaScript</span> and
            <span class="text-blue-500 font-semibold">Vue.js</span>
            for building responsive and user-friendly interfaces.
          </p>
          <p class="py-3 leading-relaxed text-justify">
            Familiar with
            <span class="text-blue-500 font-semibold">Flutter</span> and
            <span class="text-blue-900 font-semibold">Dart</span>
            for mobile application development, focusing on creating functional
            and secure solutions. Competent in database integration and
            performance optimization to support efficient application workflows.
          </p>
          <p class="py-3 leading-relaxed text-justify">
            Knowledgeable in data visualization and farm mapping using
            <span class="text-green-500 font-semibold">QGIS</span>, assisting in
            strategic decision-making through actionable insights. A reliable
            problem-solver with a track record of contributing to projects
            within set deadlines, utilizing modern technologies to improve
            functionality and overall system efficiency.
          </p>
          <div
            class="container mx-auto pt-8 flex gap-4 justify-center w-full md:w-3/4"
          >
            <button
              class="btn btn-primary rounded-full px-6 md:px-7 py-3 group border-2 border-transparent group-hover:scale-105 transition-all ease-in-out"
            >
              <a href="#contact">
                <span
                  class="relative flex items-center justify-center text-white group-hover:scale-105"
                  >Hire Me</span
                >
              </a>
            </button>
            <button
              class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
            >
              <div
                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative"
              >
                <div class="svg-container">
                  <svg
                    class="download-icon"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="download-arrow"
                      d="M13 9L9 13M9 13L5 9M9 13V1"
                      stroke="#ffa600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                                      20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                                      20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                      stroke="#ffa600"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <div class="download-loader text-white hidden"></div>
                </div>
                <a
                  :href="resumeFile"
                  download="reymar_millena_resume.pdf"
                  class="pl-2 text-primary"
                >
                  Download CV
                </a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import resumeFile from "@/assets/reymar_millena_resume.pdf";
AOS.init();
</script>
