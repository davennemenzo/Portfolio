<template>
  <div
    class="group relative bg-lavender p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
  >
    <div class="flex flex-col justify-between h-full">
      <!-- Top Section: Icon, Title, Description -->
      <div class="space-y-4 mb-2">
        <div class="flex items-center gap-4">
          <div class="p-2 border-2 border-main w-fit rounded-lg">
            <component :is="icon" class="w-4 h-4 text-secondary" />
          </div>
          <h3 class="text-[20px] font-semibold text-secondary">{{ title }}</h3>
        </div>
        <p class="text-gray-700 text-[14px] leading-relaxed text-justify ">
          {{ description }}
        </p>
      </div>

      <!-- Bottom Section: Tools & Technologies -->
      <div>
        <h4 class="text-lg font-semibold text-main">Tools & Technologies</h4>
        <img :src="toolsIcon" alt="Tools Icon" class="h-8 object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
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
