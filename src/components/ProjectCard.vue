<template>
  <div
    :class="[
      'relative flex flex-col justify-between sm:gap-y-4 gap-y-2 rounded-3xl bg-gray-200 group overflow-hidden transform-gpu p-4',
      layoutClasses
    ]"
  >
    <!-- Media Section -->
    <div class="w-full flex flex-col sm:gap-y-4 gap-y-2">
      <div
        class="w-full border-b-2  overflow-hidden transition-all duration-500 ease-in-out"
        :style="{ color: themeStore.currentColors.secondary }"
        :class="mediaHeight"
      >
        <video class="w-full h-full object-cover rounded-t-xl" autoplay muted loop playsinline>
          <source :src="project.videoSrc" type="video/mp4" />
        </video>
      </div>
      <div class="flex flex-col gap-y-2">
        <h3 class=" font-bold leading-tight"
        :style="{ color: themeStore.currentColors.secondary }"
        :class="titleSize">{{ project.title }}</h3>
        <p class="text-slate-700 leading-relaxed" :class="descSize">{{ project.description }}</p>
      </div>
    </div>

    <!-- Text Section -->
    <div class="flex flex-col md:gap-y-3 gap-y-2">
      <div class="w-fit p-2 font-bold  text-tertiary rounded-lg"
      :style="{ color: themeStore.currentColors.tertiary, backgroundColor: themeStore.currentColors.secondary }"
      :class="categorySize">
        {{ project.category }}
      </div>
      <a target="_blank">
        <img :src="project.skillIcons" alt="Project Skills" class="object-contain" :class="iconSize" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useThemeStore } from "@/stores/themeStore";

const themeStore = useThemeStore();
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

// Dynamic height layout
const layoutClasses = computed(() => ({
  'min-h-[200px] h-auto sm:min-h-[300px] lg:min-h-[350px]': true, // Ensures the card has a min height but expands dynamically
  'min-w-[280px] sm:w-[30vw] md:min-w-[320px] lg:min-w-[360px] ': true, // Responsive width
  'p-4 sm:p-3 md:p-4': true, // Dynamic padding
}));

// Media section keeps a good aspect ratio
const mediaHeight = computed(() => ({
  'aspect-[16/9] ': true, // Maintains aspect ratio
  
}));


// Text scales responsively
const titleSize = computed(() => ({
  'text-[4vw] sm:text-[22px] md:text-[18px] lg:text-[20px] xl:text-[21px]': true,
}));

const descSize = computed(() => ({
  'text-[3vw] sm:text-[14px] md:text-[12.5px] lg:text-[13.5px] xl:text-[14.5px]': true,
}));

const categorySize = computed(() => ({
  'text-[2vw] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-[13px]': true,
}));

const iconSize = computed(() => ({
  'h-[5vw] sm:h-5 md:h-6 lg:h-8 xl:h-9': true,
}));
</script>
