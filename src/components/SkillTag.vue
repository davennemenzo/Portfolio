<template>
  <div class="p-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-fit">
  <div class="p-3 bg-white rounded-full text-xs">
    {{ skill }}
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  skill: String,
  isHighlighted: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
</style>