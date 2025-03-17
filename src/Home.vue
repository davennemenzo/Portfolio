<template>
  <div class="h-screen overflow-y-auto  poppins bg-main relative">
    <!-- Paint Tray Theme Selector -->
    <div class="fixed bottom-2 right-2 md:right-3 lg:right-4 flex flex-col items-center gap-4 z-10">
      <!-- Palette Button -->
      <button
        class="p-2 rounded-full relative z-20 transition-transform hover:scale-110"
        :style="{
          backgroundColor: themeStore.currentColors.secondary,
          color: themeStore.currentColors.tertiary,
        }"
        @click="togglePalette"
      >
        <Palette />
      </button>

      <!-- Color Options (Appear Around the Palette Button) -->
      <div v-if="isPaletteOpen" class="relative">
        <button
          v-for="(color, index) in colors"
          :key="index"
          @click="themeStore.setTheme(color.name)"
          class="absolute w-7 h-7 rounded-full transition-transform transform hover:scale-110"
          :style="{
            backgroundColor: color.hex,
            borderColor: themeStore.currentColors.tertiary, // Dynamic border color
            borderWidth: '0.5px',
            borderStyle: 'solid',
          }"
          :class="positionClass[index]"
        ></button>
      </div>
    </div>
    <Hero1/>
    <!-- <Hero id="hero" /> -->
    <AboutMePage id="aboutme" />
    <ProjectsPage id="projects" />
    <ExpertisePage id="expertise" />
    <ContactPage id="contact" ref="contactSection" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Hero from "@/components/Hero.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ExpertisePage from "./pages/ExpertisePage.vue";
import ContactPage from "./pages/ContactPage.vue";
import AboutMePage from "./pages/AboutMePage.vue";
import { useThemeStore } from "./stores/themeStore";
import { Palette } from "lucide-vue-next";
import Hero1 from "./components/Hero1.vue";

const themeStore = useThemeStore();

// Define color themes
const colors = [
  { name: "default", hex: "#ede6d3" }, // Warm Yellow
  { name: "dark", hex: "#3c0350" },    // Violet
  { name: "warm", hex: "#ffffff" },    // Dark Gray
  { name: "blue", hex: "#0779ff" },   // Blue
];

// Toggle Palette
const isPaletteOpen = ref(false);
const togglePalette = () => {
  isPaletteOpen.value = !isPaletteOpen.value;
};

// Button positions (expand outward)
const positionClass = [
  "bottom-[-6px] right-[13px]", // Blue
  "bottom-[24px] right-[24px]", // Violet
  "bottom-[62px] right-[-20px]", // Red
  "bottom-[54px] right-[11px]", // Green
];
</script>
