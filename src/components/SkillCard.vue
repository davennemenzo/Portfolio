<template>
  <div
    class="group relative bg-lavender p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
  >
    <div class="flex flex-col justify-between h-full ">
      <!-- Top Section: Icon, Title, Description -->
      <div class="space-y-4 mb-3">
        <div class="flex items-center gap-2">
          <div class="p-2 border-2 w-fit rounded-lg"
          :style="{ color: themeStore.currentColors.secondary }"
          >
            <component :is="icon" class="w-4 h-4"
            :style="{ color: themeStore.currentColors.secondary }"
            />
          </div>
          <h3 class="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold  tracking-tight "
          :style="{ color: themeStore.currentColors.secondary }"
          >{{ title }}</h3>
        </div>
        <p class="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed tracking-wide">
          {{ description }}
        </p>
      </div>

      <!-- Bottom Section: Tools & Technologies -->
      <div>
        <h4 class="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold  mb-2"
        :style="{ color: themeStore.currentColors.secondary }"
        >Tools & Technologies</h4>
        <img :src="toolsIcon" alt="Tools Icon" class="lg:h-8 md:h-6  h-4  object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/stores/themeStore";

const themeStore = useThemeStore();
const props = defineProps({
  title: String,
  description: String,
  toolsIcon: String,
  icon: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
