<template>
  <header
    :class="[
      'navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300',
    ]"
  >
    <!-- Navbar Start -->
    <div class="navbar-start">
      <!-- Logo -->
      <a
        class="text-xl font-bold capitalize btn btn-ghost transition-all duration-300"
        @click="scrollToSection('#profile')"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
        >
          Reymar Millena
        </span>
      </a>
    </div>

    <!-- Navbar Center -->
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1 space-x-4">
        <li v-for="item in Menu" :key="item.name">
          <a
            :href="item.href"
            class="capitalize hover:text-primary transition-all duration-300"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Navbar End -->
    <div class="navbar-end">
      <!-- Light/Dark Theme Toggle with SVGs -->
      <label class="flex cursor-pointer gap-2 items-center">
        <svg
          v-if="!isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          />
        </svg>

        <input
          type="checkbox"
          value="theme"
          class="toggle theme-controller"
          :checked="isDarkMode"
          @change="toggleTheme"
        />

        <svg
          v-if="isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
      <!-- Mobile Menu Toggle -->
      <div class="md:hidden">
        <button
          type="button"
          class="btn btn-ghost"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle Menu"
        >
          <span v-if="isMenuOpen">
            <img
              src="https://img.icons8.com/ios-filled/100/primary/delete-sign.png"
              alt="close"
              width="30"
              height="30"
            />
          </span>
          <span v-else>
            <img
              src="https://img.icons8.com/ios-filled/100/primary/menu--v6.png"
              alt="menu"
              width="30"
              height="30"
            />
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav
      class="w-full absolute top-16 bg-base-100 shadow-md md:hidden"
      v-if="isMenuOpen"
    >
      <ul class="menu menu-vertical p-4 space-y-2">
        <li v-for="item in Menu" :key="item.name">
          <a
            :href="item.href"
            class="capitalize hover:text-primary transition-all duration-300"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const Menu = ref([
  { name: "Services", href: "#services" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

const isMenuOpen = ref(false);

// Theme states
const isDarkMode = ref(false);

// Set initial theme based on system preference
const setInitialTheme = () => {
  const systemDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  isDarkMode.value = systemDarkMode;
  updateTheme(isDarkMode.value);
};

// Toggle between light and dark themes
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  updateTheme(isDarkMode.value);
};

// Update the theme based on the current state
const updateTheme = (isDark) => {
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
};

// Initialize theme based on user preference
setInitialTheme();

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
body {
  scroll-behavior: smooth;
}
</style>
