<template>
  <div class="project-card">
    <!-- Mobile Layout (default) -->
    <div
      class="md:hidden flex flex-col items-center border w-full rounded-lg bg-slate-200 p-4"
    >
      <div class="project-card-media w-full mb-3 border-b-2">
        <video
          class="w-full h-full object-contain rounded-md transform-gpu"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="project.videoSrc" type="video/mp4" />
        </video>
      </div>
      <div class="project-card-text w-full text-cover">
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

    <!-- Desktop Layout (rely on parent grid) -->
    <div
      class="hidden md:flex flex-col items-center rounded-3xl p-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 relative group overflow-hidden"
    >
      <!-- Inner content with solid background -->
      <div
        class="project-card-content flex flex-col items-center rounded-2xl p-4 w-full bg-slate-200"
      >
        <div
          class="project-card-media w-full mb-2 mx-auto border-b-2 overflow-hidden"
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

        <div class="project-card-text flex flex-col gap-y-4 w-full">
          <div class="flex flex-col gap-y-2">
            <h3 class="text-[20px] font-bold transform-gpu">
              {{ project.title }}
            </h3>
            <p class="text-[15px] text-slate-700 transform-gpu">
              {{ project.description }}
            </p>
          </div>

          <div class="flex flex-col gap-y-2">
            <div
              class="text-[9px] font-bold p-2 bg-emerald-500 text-white w-fit rounded-lg transform-gpu"
            >
              {{ project.category }}
            </div>

            <a :href="project.skillIconsUrl" target="_blank">
              <img
                :src="project.skillIcons"
                alt="Project Skills"
                class="w-32 h-8 transform-gpu"
              />
            </a>
          </div>
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
