<template>
  <div
    class="project-card flex flex-col items-center rounded-3xl p-4 w-full relative group overflow-hidden bg-slate-200"
  >
    <!-- Media Section -->
    <div
      class="project-card-media w-full mb-3 border-b-2 border-secondary overflow-hidden"
    >
      <video
        class="w-full h-full object-cover rounded-xl transform-gpu"
        autoplay
        muted
        loop
        playsinline
      >
        <source :src="project.videoSrc" type="video/mp4" />
      </video>
    </div>

    <!-- Text Section -->
    <div class="project-card-text flex flex-col gap-y-4 w-full">
      <div class="flex flex-col gap-y-2">
        <h3
          class="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold transform-gpu text-secondary"
        >
          {{ project.title }}
        </h3>
        <p
          class="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-slate-700 transform-gpu"
        >
          {{ project.description }}
        </p>
      </div>

      <div class="flex flex-col gap-y-2">
        <div
          class="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold p-2 bg-secondary text-tertiary w-fit rounded-lg transform-gpu"
        >
          {{ project.category }}
        </div>

        <a :href="project.skillIconsUrl" target="_blank">
          <img
            :src="project.skillIcons"
            alt="Project Skills"
            class="h-6 sm:h-7 md:h-8 lg:h-9 transform-gpu object-contain"
          />
        </a>
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

<style scoped>
.project-card {
  transform-origin: center;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.project-card-content {
  transform-origin: center;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card-media {
  transform-origin: center;
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
}

.project-card-text {
  transform-origin: center;
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
}

/* Prevent text from becoming blurry during scaling */
h3,
p,
div {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Optimize performance */
video,
img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
</style>
