<template>
  <div class="h-screen overflow-y-auto poppins bg-secondary relative">
    <!-- Paint Tray Theme Selector -->
    <div class="flex justify-center flex-col z-10 absolute top-4 right-4 gap-4 mt-4">
      <button
        @click="themeStore.setTheme('default')"
        class="w-10 h-10 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
        :style="{ backgroundColor: defaultColor }"
      ></button>
      <button
        @click="themeStore.setTheme('dark')"
        class="w-10 h-10 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
        :style="{ backgroundColor: darkColor }"
      ></button>
      <button
        @click="themeStore.setTheme('warm')"
        class="w-10 h-10 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
        :style="{ backgroundColor: warmColor }"
      ></button>
    </div>

    <Hero id="hero" />
    <AboutMePage id="aboutme" />
    <ProjectsPage id="projects" />
    <ExpertisePage id="expertise" />
    <ContactPage id="contact" ref="contactSection" />
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ExpertisePage from "./pages/ExpertisePage.vue";
import ContactPage from "./pages/ContactPage.vue";
import AboutMePage from "./pages/AboutMePage.vue";
import { useThemeStore } from "./stores/themeStore";

const themeStore = useThemeStore();

// Define colors for each theme
const defaultColor = "#0779FF"; // Blue
const darkColor = "#8B07FF"; // Dark Gray
const warmColor = "#FF0F07"; // Warm Yellow
</script>
