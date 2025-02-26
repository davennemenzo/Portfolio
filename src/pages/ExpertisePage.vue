<template>
  <div class="min-h-[400px] md:min-h-[700px] lg:min-h-auto pb-15 flex flex-col bg-lavender overflow-hidden relative">
    <PageContainer>
      <div class="relative">
        <!-- Slider -->
        <div data-hs-carousel='{ "loadingClasses": "opacity-0" }' class="relative">
          <div class="hs-carousel flex space-x-4">
            <!-- Sidebar Thumbnails -->
            <div class="flex-none">
              <div class="hs-carousel-pagination max-h-[500px] flex flex-col gap-y-3 overflow-y-auto">
                <div
                  v-for="(project, index) in projects"
                  :key="index"
                  class="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[200px] h-[200px] hs-carousel-active:border-blue-400"
                >
                  <div class="flex justify-center h-full bg-gray-100 p-3 dark:bg-neutral-900">
                    <span class="self-center text-sm font-semibold text-gray-800 transition duration-700 dark:text-white">
                      {{ project.title }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main Slide Content -->
            <div class="relative grow overflow-hidden min-h-[500px] bg-white rounded-lg p-6">
              <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                <div
                  v-for="(project, index) in projects"
                  :key="index"
                  class="hs-carousel-slide flex flex-col justify-center items-center h-full text-center bg-gray-100 dark:bg-neutral-900"
                >
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ project.title }}
                  </h2>
                  <p class="text-lg text-gray-700 dark:text-gray-300 mt-2">
                    {{ project.description }}
                  </p>
                  <span class="text-sm text-gray-500 dark:text-gray-400 mt-3">
                    {{ project.category }}
                  </span>
                  <div class="mt-4">
                    <img :src="project.skillIcons" :alt="project.title" class="h-10">
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <button type="button" class="hs-carousel-prev absolute inset-y-0 start-0 inline-flex justify-center items-center w-[60px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none rounded-s-lg dark:text-white dark:hover:bg-white/10">
                <span class="sr-only">Previous</span>
                <svg class="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button type="button" class="hs-carousel-next absolute inset-y-0 end-0 inline-flex justify-center items-center w-[60px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none rounded-e-lg dark:text-white dark:hover:bg-white/10">
                <span class="sr-only">Next</span>
                <svg class="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- End Slider -->
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from "@/components/PageContainer.vue";

const projects = [
  {
    title: "Passafun: A Dynamic Quiz Game Portal",
    description: "Development of an interactive quiz platform designed to offer a variety of quizzes, personality tests, and assessments for an engaging and educational experience.",
    category: "UI/UX DESIGN & FRONTEND DEVELOPMENT",
    videoSrc: "passafun-video.mp4",
    skillIcons: "https://skillicons.dev/icons?i=figma,vue,tailwind,css",
  },
  {
    title: "FoodieConnect: Smart Recipe Sharing",
    description: "A social platform for food lovers to share, discover, and organize their favorite recipes with smart filtering and AI-based recommendations.",
    category: "FULLSTACK DEVELOPMENT",
    videoSrc: "foodieconnect-video.mp4",
    skillIcons: "https://skillicons.dev/icons?i=vue,nodejs,mongodb,tailwind",
  },
  {
    title: "TaskHive: Productivity Dashboard",
    description: "A web-based task management tool integrating AI-powered scheduling and real-time collaboration for better productivity.",
    category: "WEB APPLICATION DEVELOPMENT",
    videoSrc: "taskhive-video.mp4",
    skillIcons: "https://skillicons.dev/icons?i=react,express,typescript,postgres",
  },
  {
    title: "TutorHub: Online Learning Platform",
    description: "An e-learning platform that connects students with expert tutors via live video sessions, interactive courses, and progress tracking.",
    category: "EDTECH & FRONTEND ENGINEERING",
    videoSrc: "tutorhub-video.mp4",
    skillIcons: "https://skillicons.dev/icons?i=nextjs,graphql,tailwind,python",
  },
  {
    title: "EcoTrack: Sustainability Tracker",
    description: "A mobile-friendly web app that helps individuals track and improve their eco-friendly habits with gamified challenges.",
    category: "MOBILE-FRIENDLY WEB APP",
    videoSrc: "ecotrack-video.mp4",
    skillIcons: "https://skillicons.dev/icons?i=vue,flutter,firebase,tailwind",
  },
  {
    title: "FitSync: Personalized Fitness App",
    description: "A fitness tracking app with AI-generated workout plans, progress analytics, and integration with wearable devices.",
    category: "HEALTH & FITNESS APP DEVELOPMENT",
    videoSrc: "fitsync-video.mp4",
    skillIcons: "https://skillicons.dev/icons?i=angular,typescript,express,mysql",
  },
];
</script>
