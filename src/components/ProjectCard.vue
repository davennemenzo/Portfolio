<template>
  <div>
    <!-- Mobile Layout (default) -->
    <div class="md:hidden flex flex-col mb-6  items-center px-2 w-full rounded-lg">
      <div class="w-full mb-3 border-cover border-b-2">
        <video
          class="w-full h-full object-contain rounded-lg"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="project.videoSrc" type="video/mp4" />
        </video>
      </div>
      <div class="w-full text-cover">
        <h3 class="text-[20px] font-bold mb-2">{{ project.title }}</h3>
        <p class="text-[15px] text-slate-600">{{ project.description }}</p>
        <div
          class="text-[10px] text-white font-bold p-2 bg-blue-400 rounded-full w-fit my-4"
        >
          {{ project.category }}
        </div>
        <a :href="project.skillIconsUrl" target="_blank">
          <img
            :src="project.skillIcons"
            alt="Project Skills"
            class="w-32 h-8"
          />
        </a>
      </div>
    </div>

    <!-- Desktop Layout (with hover effect) -->
    <div
      class="hidden md:flex flex-col items-center p-8 w-full border-2 border-cover rounded-4xl relative group overflow-hidden"
    >
      <div class="w-full border-cover">
        <video
          class="w-full h-full object-contain rounded-lg"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="project.videoSrc" type="video/mp4" />
        </video>
      </div>
      <div
        class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-start gap-y-6 items-start p-8 text-white"
      >
        <div>
          <h3 class="text-[25px] font-bold mb-2">{{ project.title }}</h3>
          <p class="text-[18px]">{{ project.description }}</p>
        </div>
        <div class="flex flex-col gap-y-2">
          <div class="text-md font-bold p-2 bg-blue-400 rounded-full">
            {{ project.category }}
          </div>
          <a :href="project.skillIconsUrl" target="_blank">
            <img :src="project.skillIcons" alt="Project Skills" />
          </a>
        </div>
      </div>
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
