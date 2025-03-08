<template>
  <div
    class="group relative bg-lavender p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
  >
    <div class="flex items-start gap-4">
  
      <div class="space-y-4">
         <div class="p-2 border-2 border-gray-300 w-fit rounded-lg">
          <component :is="icon" class="w-6 h-6 text-blue-500" />
         </div>
        <h3 class="text-2xl font-semibold text-gray-800">{{ title }}</h3>
        <p class="text-gray-700 leading-relaxed">{{ description }}</p>
        <div class="space-y-2">
          <h4 class="text-lg font-semibold text-gray-800">
            Tools & Technologies
          </h4>
          <div class="flex gap-2 flex-wrap">
            <img :src="toolsIcon" alt="Tools Icon" />
          </div>
        </div>
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
