<template>
  <footer class="relative bg-[#1A1A2E] text-white py-12 overflow-hidden mt-20">
    <!-- Gradient Background -->
    <div
      class="absolute z-0 top-1/3 -translate-y-1/3 w-full h-[calc(30%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-[#4CAF50] blur-2xl"
    ></div>

    <!-- Footer Content -->
    <div class="relative z-10 container mx-auto px-4">
      <!-- Grid Layout -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 items-start"
      >
        <!-- Logo Section -->
        <div>
          <h2
            class="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
          >
            Reymar Millena
          </h2>
          <p class="text-slate-400">
            Transforming ideas into innovative, scalable solutions, driven by
            passion, fueled by collaboration, and tailored for success.
          </p>
        </div>

        <!-- Navigation Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-slate-400 hover:text-white transition"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#services"
                class="text-slate-400 hover:text-white transition"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="text-slate-400 hover:text-white transition"
                >About Me</a
              >
            </li>
            <li>
              <a
                href="#skills"
                class="text-slate-400 hover:text-white transition"
                >Skills</a
              >
            </li>
            <li>
              <a
                href="#projects"
                class="text-slate-400 hover:text-white transition"
                >Projects</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="text-slate-400 hover:text-white transition"
                >Contact</a
              >
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Me</h3>
          <p class="text-slate-400">Email: millenareymar90@gmail.com</p>
        </div>

        <!-- Social Media Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Let's Connect</h3>
          <div class="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/rpmillena"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center text-slate-400 hover:text-white transition"
            >
              <i class="fab fa-linkedin-in text-slate-400 mr-2"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-12 border-t border-slate-700 pt-6 text-center">
        <p class="text-slate-500 text-sm">
          &copy; 2025 Reymar Millena. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
 
  // Get current year
  const currentYear = new Date().getFullYear();
  const visitCount = ref(0);
 
  // Load environment variables
  const binId = import.meta.env.VITE_JSONBIN_ID; // Correct way to access Vite .env variables
  const apiKey = "$2a$10$pt05fWWX5RD7Kd6RpGuike/2VG1D7qXpGHRnsgLgQ5VocKyqf38uK";
 
  const fetchVisitorCount = async () => {
    try {
      const response = await axios.get(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
        headers: {
          "X-Master-Key": apiKey,
          "Content-Type": "application/json",
        },
      });
 
      visitCount.value = response.data.record?.visitCount || 0;
    } catch (error) {
      console.error("Error fetching visit count:", error);
      visitCount.value = 0; // Set default value to avoid UI breakage
    }
  };
 
  const updateVisitorCount = async () => {
    try {
      visitCount.value += 1;
 
      await axios.put(
        `https://api.jsonbin.io/v3/b/${binId}`,
        { visitCount: visitCount.value },
        {
          headers: {
            "X-Master-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error updating visit count:", error);
    }
  };
 
  // Fetch and update visit count on component mount
  onMounted(async () => {
    await fetchVisitorCount();
    await updateVisitorCount();
  });
</script>
<style scoped>
/* Add any additional styles if needed */
footer a i {
  font-size: 1.25rem;
}
</style>
