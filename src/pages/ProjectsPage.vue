<template>
  <div class="min-h-screen bg-gradient-to-b from-[#0f0c1d] to-[#1a1625] py-20">
    <!-- Header section -->
    <div class="flex justify-center items-center flex-col relative mb-20">
      <div class="text-center">
        <h1
          class="text-[45px] sm:text-[60px] md:text-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 uppercase tracking-tight"
        >
          Projects
        </h1>
        <div
          class="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
        ></div>
      </div>
    </div>

    <!-- Content section -->
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 justify-center md:gap-20 gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="w-full md:w-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the video using Vite's import
import ProjectCard from "@/components/ProjectCard.vue";
import PassafunVideo from "@/videos/Passafun.mp4";

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
    id: 2,
    title: "Passafun: A Dynamic Quiz Game Portal",
    description:
      "Development of an interactive quiz platform designed to offer a variety of quizzes, personality tests, and assessments for an engaging and educational experience.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: PassafunVideo,
    skillIconsUrl: "https://skillicons.dev",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },

  // Add more projects here
];
</script>
