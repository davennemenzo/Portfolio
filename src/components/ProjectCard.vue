<template>
  <div>
    <!-- Mobile Layout (default) -->
    <div
      class="md:hidden flex flex-col items-center border border-cover w-full rounded-lg bg-slate-200 p-4"
    >
      <div class="w-full mb-3 border-cover border-b-2">
        <video
          class="w-full h-full object-contain rounded-md"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="project.videoSrc" type="video/mp4" />
        </video>
      </div>
      <div class="w-full text-cover">
        <h3 class="text-[17px] font-bold mb-2">{{ project.title }}</h3>
        <p class="text-[13px] text-slate-600 mb-4">{{ project.description }}</p>
        <div
          class="text-[7px] text-white font-bold p-2 bg-emerald-500 rounded-md w-fit mb-2"
        >
          {{ project.category }}
        </div>
        <a :href="project.skillIconsUrl" target="_blank">
          <img
            :src="project.skillIcons"
            alt="Project Skills"
            class="w-28 h-7"
          />
        </a>
      </div>
    </div>

    <!-- Desktop Layout (with hover effect) -->
    <div
      class="hidden md:flex flex-col items-center rounded-3xl p-4 w-full bg-slate-200 border border-cover relative group overflow-hidden"
    >
      <div class="w-full mb-2 mx-auto  border-cover border-b-2">
        <video
          class="w-full h-full object-cover rounded-xl"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="project.videoSrc" type="video/mp4" />
        </video>
      </div>

      <!-- Simplified layout structure -->
      <div class="flex flex-col gap-y-4 w-full">
        <div class="flex flex-col gap-y-2">
          <h3 class="text-[20px] font-bold">{{ project.title }}</h3>
          <p class="text-[15px] text-slate-700">{{ project.description }}</p>
        </div>

        <div class="flex flex-col gap-y-2">
          <div class="text-[9px] font-bold p-2 bg-emerald-500 text-lavender w-fit rounded-lg">
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
