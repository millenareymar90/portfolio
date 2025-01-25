<template>
  <section
    class="relative w-full flex items-center justify-center"
    data-aos="zoom-in-up"
    id="profile"
  >
    <div class="absolute top-0 inset-x-0 h-64 flex items-center justify-center">
      <div
        class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"
      ></div>
      <div
        class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"
      ></div>
    </div>
    <div
      class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative flex flex-col items-center"
    >
      <div
        class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto text-center lg:text-left"
      >
        <div class="lg:py-6">
          <div class="text-center lg:text-left">
            <h1 class="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
              >
                Rey
              </span>
            </h1>
          </div>
          <p class="pt-8 text-justify">
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
          <p class="pt-3 text-justify">
            Familiar with
            <span class="text-blue-500 font-semibold">Flutter</span> and
            <span class="text-blue-900 font-semibold">Dart</span>
            for mobile application development, focusing on creating functional
            and secure solutions. Competent in database integration and
            performance optimization to support efficient application workflows.
          </p>
          <p class="pt-3 text-justify">
            Knowledgeable in data visualization and farm mapping using
            <span class="text-green-500 font-semibold">QGIS</span>, assisting in
            strategic decision-making through actionable insights. A reliable
            problem-solver with a track record of contributing to projects
            within set deadlines, utilizing modern technologies to improve
            functionality and overall system efficiency.
          </p>
          <div
            class="flex items-center justify-center gap-3 pt-9 flex-col sm:flex-row sm:w-max mx-auto"
          >
            <button
              class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
            >
              <span
                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"
              ></span>
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
                      stroke="#f59e0b"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                                      20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                                      20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                      stroke="#f59e0b"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <div class="download-loader text-white hidden"></div>
                </div>
                <a
                  href="/reymar_millena_resume.pdf"
                  download="reymar_millena_resume.pdf"
                  class="pl-2 text-primary"
                >
                  Download CV
                </a>
              </div>
            </button>
          </div>
        </div>
        <div class="lg:h-full md:flex items-center justify-center">
          <div
            class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center justify-center relative"
          >
            <div
              class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"
            ></div>
            <div
              class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary"
            >
              <img
                src="@/assets/me.jpg"
                alt="Reymar Millena"
                width="500"
                height="auto"
                loading="lazy"
                class="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
</script>
