<template>
  <div class="min-h-auto bg-main sm:py-[50px] py-5">
    <!-- Header section -->
    <div class="flex justify-center items-center flex-col relative mb-6">
      <div class="text-center">
        <h1 class="text-[8vw] sm:text-[60px] md:text-[70px] font-bold text-tertiary uppercase tracking-wide league">
          Projects
        </h1>
        <div class="w-24 h-1 mx-auto bg-tertiary rounded-full"></div>
      </div>
    </div>

    <!-- Content section -->
    <div class="sm:container sm:mx-auto">
      <Flicking
        :options="{
          circular: true,
          defaultIndex: 0,
          autoInit: true,
          bounce: '100%',
          align: 'center',
          duration: 500, // Smoother transition
          autoResize: true, // Improves responsiveness
        }"
        :plugins="plugins"
        class="py-2 sm:py-10 w-full"
        @changed="onChanged"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="flex justify-center sm:w-1/3 w-[40vw] h-auto transition-transform duration-500 ease-out"
          :class="{
            'sm:scale-80 md:scale-95 lg:scale-105 scale-70 opacity-100': index === activeIndex,
            'opacity-70 sm:scale-75 md:scale-85 lg:scale-95 scale-65': index !== activeIndex,
          }"
        >
          <ProjectCard :project="project" class="w-full h-full" />
        </div>
        <template #viewport>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import ProjectCard from "@/components/ProjectCard.vue";
import PassafunVideo from "@/videos/Passafun.mp4";
import { Perspective, Pagination, Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

const plugins = [
  new Perspective({ rotate: 0.5 }),
  new Fade(),
  new Pagination({ type: "bullet" }),
];

const activeIndex = ref(0);

const onChanged = (e) => {
  activeIndex.value = e.index;
};

const projects = ref([
  {
    id: 1,
    title: "QuizMaster",
    description:
      "An interactive quiz platform offering multiple-choice questions, personality tests, and assessments with real-time feedback.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },
  {
    id: 2,
    title: "EduConnect",
    description:
      "A tutor booking system that connects students with experienced tutors for personalized academic support.",
    category: "WEB DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=vue,nodejs,mongodb,tailwind",
  },
  {
    id: 3,
    title: "FitTrack",
    description:
      "A fitness tracking app that helps users monitor workouts, set goals, and track progress with a sleek UI.",
    category: "MOBILE APP DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=flutter,dart,figma",
  },
  {
    id: 4,
    title: "GreenMarket",
    description:
      "An e-commerce platform for eco-friendly products, promoting sustainable shopping and green living.",
    category: "ECOMMERCE & UI/UX",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons:
      "https://skillicons.dev/icons?i=react,typescript,tailwind,shopify",
  },
  {
    id: 5,
    title: "SafeDrive",
    description:
      "A smart driving assistant that uses AI to analyze driving habits and provide safety recommendations.",
    category: "AI & DATA SCIENCE",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=python,tensorflow,vue",
  },
  {
    id: 6,
    title: "EventSync",
    description:
      "An event management system that helps users plan, organize, and collaborate on events with seamless ticketing.",
    category: "FULL-STACK DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=vue,laravel,mysql,tailwind",
  },
  {
    id: 7,
    title: "HomeAutomation",
    description:
      "A smart home system that allows users to control lights, temperature, and security remotely via mobile.",
    category: "IOT & EMBEDDED SYSTEMS",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=arduino,raspberrypi,vue",
  },
]);
</script>

<style>
.flicking-viewport {
  padding-bottom: 4rem !important;
}

.flicking-pagination .flicking-pagination-bullet {
  width: 10px !important;
  height: 10px !important;
  background-color: #b7f9ff !important;
  border-radius: 50% !important;
  margin: 0 4px !important;
}

.flicking-pagination .flicking-pagination-bullet-active {
  background-color: #011e76 !important;
  width: 12px !important;
  height: 12px !important;
}
</style>
