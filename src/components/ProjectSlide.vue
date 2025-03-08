<template>
  <div class="hs-carousel-slide flex flex-col  h-full    bg-gray-100 dark:bg-neutral-900 p-6 rounded-lg px-20">
    <!-- Video Section -->
    <div class="h-full flex max-w-full mx-auto mb-5 object-contain rounded-md overflow-hidden shadow-lg">
      <video
        class="w-full   rounded-md"
        autoplay
        muted
        loop
        playsinline
      >
        <source :src="project.videoSrc" type="video/mp4" />
      </video>
    </div>

    <!-- Project Title -->
    <h2 class="text-xl font-bold text-gray-900 dark:text-white">
      {{ project.title }}
    </h2>

    <!-- Project Description -->
    <p class="text-md text-gray-500 dark:text-gray-300 mt-3 max-w-xl">
      {{ project.description }}
    </p>

    <!-- Category Label -->
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400 mt-3">
      {{ project.category }}
    </span>

    <!-- Skill Icons -->
    <div class="mt-5 flex  gap-3">
      <img :src="project.skillIcons" :alt="project.title" class="h-7">
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
