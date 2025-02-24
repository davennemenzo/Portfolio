<template>
  <div class="group relative bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <div class="flex items-start gap-4">
      <span class="text-xl font-bold text-lavender">{{ number }}.</span>
      <div class="space-y-4">
        <h3 class="text-2xl font-semibold text-gray-800">{{ title }}</h3>
        <p class="text-gray-700 leading-relaxed">{{ description }}</p>
        <div class="space-y-2">
          <h4 class="text-lg font-semibold text-gray-800">Tools & Technologies</h4>
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
  number: Number,
  title: String,
  description: String,
  toolsIcon: String,
});
</script>

<style scoped>
</style>