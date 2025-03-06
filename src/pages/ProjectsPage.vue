<template>
  <div class="min-h-screen bg-lavender py-10 md:py-20">
    <!-- Header section -->
    <div
      class="flex justify-center items-center flex-col relative mb-6 md:mb-10"
    >
      <div class="text-center">
        <h1
          class="text-[35px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cover to-blue-400 uppercase tracking-tight"
        >
          Projects
        </h1>
        <div
          class="w-16 md:w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
        ></div>
      </div>
    </div>

    <!-- Content section with Flicking -->
    <div
      class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden"
    >
      <Flicking
        ref="flicking"
        :options="{
          circular: true,
          align: 'center',
          moveType: 'snap',
          bound: true,
          defaultIndex: 0,
          gap: {
            // Responsive gap
            default: 16,
            768: 32,
            1024: 48,
          },
          duration: 500,
          easing: function (x) {
            return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
          },
        }"
        @changed="handleChange"
        class="w-full py-6 md:py-12"
      >
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :class="[
            'transform-gpu origin-center',
            'transition-all duration-500 ease-in-out',
            // Responsive widths and scaling
            'w-[85%] sm:w-[75%] md:w-[calc(28%-24px)] mx-2 sm:mx-3 md:mx-4',
            index === currentIndex
              ? 'scale-105 md:scale-110 opacity-100 z-10 shadow-2xl md:w-[calc(38%-24px)]'
              : 'scale-95 md:scale-85 opacity-50 blur-[0.5px] pointer-events-none',
          ]"
        />
      </Flicking>

      <!-- Navigation Buttons -->
      <button
        @click="movePrev"
        class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg text-lg sm:text-xl"
      >
        ‹
      </button>
      <button
        @click="moveNext"
        class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg text-lg sm:text-xl"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

import ProjectCard from "@/components/ProjectCard.vue";
import PassafunVideo from "@/videos/Passafun.mp4";

const flicking = ref(null);
const currentIndex = ref(0);

const projects = [
  {
    id: 1,
    title: "Passafun: A Dynamic Quiz Game Portal",
    description:
      "Development of an interactive quiz platform designed to offer a variety of quizzes, personality tests, and assessments for an engaging and educational experience.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },
  {
    id: 2,
    title: "Passafun: A Dynamic Quiz Game Portal",
    description:
      "Development of an interactive quiz platform designed to offer a variety of quizzes, personality tests, and assessments for an engaging and educational experience.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },
  {
    id: 3,
    title: "Passafun: A Dynamic Quiz Game Portal",
    description:
      "Development of an interactive quiz platform designed to offer a variety of quizzes, personality tests, and assessments for an engaging and educational experience.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },
  {
    id: 4,
    title: "Passafun: A Dynamic Quiz Game Portal",
    description:
      "Development of an interactive quiz platform designed to offer a variety of quizzes, personality tests, and assessments for an engaging and educational experience.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },
  {
    id: 5,
    title: "Passafun: A Dynamic Quiz Game Portal",
    description:
      "Development of an interactive quiz platform designed to offer a variety of quizzes, personality tests, and assessments for an engaging and educational experience.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },
  {
    id: 6,
    title: "Passafun: A Dynamic Quiz Game Portal",
    description:
      "Development of an interactive quiz platform designed to offer a variety of quizzes, personality tests, and assessments for an engaging and educational experience.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },
  {
    id: 7,
    title: "Passafun: A Dynamic Quiz Game Portal",
    description:
      "Development of an interactive quiz platform designed to offer a variety of quizzes, personality tests, and assessments for an engaging and educational experience.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },
];

// Navigation methods
const movePrev = () => flicking.value?.prev();
const moveNext = () => flicking.value?.next();

// Track current focused card
const handleChange = (e) => {
  currentIndex.value = e.index;
};
</script>

<style scoped>
.flicking-viewport {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
  overflow: visible !important;
}

.flicking-camera {
  will-change: transform;
}

/* Improved transitions for project cards */
.project-card {
  transform-origin: center center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity, width;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
}

/* Responsive container perspective */
.container {
  perspective: 1000px;
}

/* Media queries for fine-tuning if needed */
@media (max-width: 640px) {
  .flicking-viewport {
    padding: 1rem 0;
  }
}

@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
}
</style>
