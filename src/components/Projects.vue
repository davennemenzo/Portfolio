<template>
  <div class="flex flex-col bg-lavender h-auto">
    <!-- Header section -->

    <div class="flex justify-center items-center flex-col relative">
      <div
        class="mt-6 text-[35px] sm:text-[50px] md:text-[55px] lg:text-[60px] text-cover font-bold uppercase whitespace-nowrap leading-none"
      >
        <span>Projects</span>
      </div>
    </div>

    <!-- Content section -->
    <div class="container mx-auto py-10 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
// Import the video using Vite's import
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
    id: 1,
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
