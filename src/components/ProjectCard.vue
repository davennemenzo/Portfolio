<template>
  <!-- Mobile Layout -->
  <div
    class="md:hidden relative flex flex-col items-center p-4 w-[220px] h-auto sm:w-[250px] sm:h-[350px] rounded-3xl bg-gray-200 group overflow-hidden transform-gpu"
  >
    <!-- Media Section -->
    <div
      class="w-full h-25 sm:h-48 mb-3 border-b-2 border-secondary overflow-hidden transform-gpu transition-all duration-500 ease-in-out"
    >
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

    <!-- Text Section -->
    <div
      class="flex flex-col gap-y-4 w-full transform-gpu transition-all duration-500 ease-in-out"
    >
      <div class="flex flex-col gap-y-2">
        <h3
          class="text-secondary font-bold transform-gpu transition-all duration-500 ease-in-out text-[14px]"
        >
          {{ project.title }}
        </h3>
        <p
          class="text-slate-700 transform-gpu transition-all duration-500 ease-in-out text-[10px]"
        >
          {{ project.description }}
        </p>
      </div>

      <div class="flex flex-col gap-y-2">
        <div
          class="w-fit p-2 font-bold bg-secondary text-tertiary rounded-lg transform-gpu text-[8px]"
        >
          {{ project.category }}
        </div>

        <a :href="project.skillIconsUrl" target="_blank">
          <img
            :src="project.skillIcons"
            alt="Project Skills"
            class="h-6 object-contain transform-gpu"
          />
        </a>
      </div>
    </div>
  </div>

  <!-- Desktop Layout -->
  <div
    class="hidden md:flex relative flex-col items-center p-6 w-full rounded-3xl bg-gray-200 group overflow-hidden transform-gpu"
  >
    <!-- Media Section -->
    <div
      class="w-full mb-3 border-b-2 border-secondary overflow-hidden transform-gpu transition-all duration-500 ease-in-out"
    >
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

    <!-- Text Section -->
    <div
      class="flex flex-col gap-y-4 w-full transform-gpu transition-all duration-500 ease-in-out"
    >
      <div class="flex flex-col gap-y-2">
        <h3
          class="text-secondary font-bold transform-gpu transition-all duration-500 ease-in-out text-[20px] lg:text-[22px]"
        >
          {{ project.title }}
        </h3>
        <p
          class="text-slate-700 transform-gpu transition-all duration-500 ease-in-out text-[15px] lg:text-[16px]"
        >
          {{ project.description }}
        </p>
      </div>

      <div class="flex flex-col gap-y-2">
        <div
          class="w-fit p-2 font-bold bg-secondary text-tertiary rounded-lg transform-gpu text-[10px] lg:text-[11px]"
        >
          {{ project.category }}
        </div>

        <a :href="project.skillIconsUrl" target="_blank">
          <img
            :src="project.skillIcons"
            alt="Project Skills"
            class="h-8 lg:h-9 object-contain transform-gpu"
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

