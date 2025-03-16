<template>
  <div
    class="h-screen flex flex-col overflow-hidden relative league"
    :style="themeStyles"
    ref="heroContainer"
  >
    <!-- Header Information -->
    <div class="flex flex-col items-center justify-center uppercase tracking-widest leading-tight league pt-10 md:pt-4">
      <p class="text-[14px] pb-2" :style="{ color: themeStore.currentColors.tertiary }">
        cebu, philippines
      </p>
      <p class="text-[12px] opacity-80" :style="{ color: themeStore.currentColors.secondary }">
        davennemenzo@gmail.com
      </p>
    </div>  

    <div class="flex flex-col items-center justify-center mt-18 md:mt-0">
      <p class="md:mb-0 text-[60px] sm:text-[90px] md:text-[90px] lg:text-[100px] text-center font-bold uppercase tracking-wide" 
        :style="{ color: themeStore.currentColors.tertiary }">
        Daven Nemenzo
      </p>

      <!-- Images Section -->
      <div 
        class="flex flex-row items-center justify-center relative h-[150px] md:h-[200px] lg:h-[240px] xl:h-[270px] mx-auto leading-0" 
        ref="imageContainer" 
        @touchstart="handleTouchStart" 
        @touchmove="handleTouchMove" 
        @touchend="handleTouchEnd"
      >
        <template v-for="(image, index) in images" :key="index">
          <div 
            class="image-item" 
            :class="image.class"
            :style="{ transform: `translate(${positions[index].x}px, ${positions[index].y}px) rotate(${positions[index].angle}deg)` }"
          >
            <img :src="image.src" alt="" class="object-contain w-full h-full" />
          </div>
        </template>
      </div>

      <p class="mt-5 md:mt-0 text-[60px] md:text-[90px] lg:text-[90px] xl:text-[100px] w-[320px] md:w-[600px] xl:w-[700px] text-center font-bold uppercase tracking-wide leading-[60px] md:leading-[100px] xl:leading-[120px]"
        :style="{ color: themeStore.currentColors.secondary }"
      >
        UI/UX Designer & Frontend Developer
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useThemeStore } from "@/stores/themeStore";

const themeStore = useThemeStore();
const themeStyles = computed(() => ({ backgroundColor: themeStore.currentColors.main }));

const heroContainer = ref(null);
const imageContainer = ref(null);

const images = [
  { src: "/images/1dino.webp", class: "xl:right-15 md:right-14 right-10 z-10 rotate-2" },
  { src: "/images/2chicken.webp", class: "xl:-right-15 md:-right-14 -right-5 z-20 -rotate-8 top-3" },
  { src: "/images/3zom.webp", class: "xl:-right-35 md:-right-34 -right-20 z-30 rotate-4" },
  { src: "/images/4nin.webp", class: "xl:left-15 md:left-14 left-10 z-40 -rotate-8 top-3" },
];

const positions = ref(images.map(() => ({ x: 0, y: 0, angle: 0 })));
const velocity = ref(images.map(() => ({ x: 0, y: 0 })));

let mouseX = 0;
let mouseY = 0;
const stiffness = 0.1; // Strength of spring effect
const damping = 0.8; // How much it slows down
const isTouching = ref(false);

const updatePositions = () => {
  for (let i = 0; i < images.length; i++) {
    const leaderX = i === 0 ? mouseX : positions.value[i - 1].x;
    const leaderY = i === 0 ? mouseY : positions.value[i - 1].y;

    velocity.value[i].x += (leaderX - positions.value[i].x) * stiffness;
    velocity.value[i].y += (leaderY - positions.value[i].y) * stiffness;

    velocity.value[i].x *= damping;
    velocity.value[i].y *= damping;

    positions.value[i].x += velocity.value[i].x;
    positions.value[i].y += velocity.value[i].y;

    // Rotate based on velocity
    positions.value[i].angle = velocity.value[i].x * 2;
  }

  requestAnimationFrame(updatePositions);
};

const handleMouseMove = (event) => {
  if (isTouching.value || !heroContainer.value) return; // Disable if dragging
  mouseX = event.clientX - heroContainer.value.offsetWidth / 2;
  mouseY = event.clientY - heroContainer.value.offsetHeight / 2;
};

const handleTouchStart = (event) => {
  isTouching.value = true;
  mouseX = event.touches[0].clientX - heroContainer.value.offsetWidth / 2;
  mouseY = event.touches[0].clientY - heroContainer.value.offsetHeight / 2;
};

const handleTouchMove = (event) => {
  if (!imageContainer.value) return;
  mouseX = event.touches[0].clientX - heroContainer.value.offsetWidth / 2;
  mouseY = event.touches[0].clientY - heroContainer.value.offsetHeight / 2;
};

const handleTouchEnd = () => {
  isTouching.value = false; // Re-enable magnetic effect after dragging ends
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  updatePositions();
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
.image-item {
  position: absolute;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.1s ease-out;
  width: 100px;
  height: 100px;
}

@media (min-width: 640px) {
  .image-item {
    width: 120px;
    height: 120px;
  }
}

@media (min-width: 768px) {
  .image-item {
    width: 150px;
    height: 150px;
  }
}

@media (min-width: 1024px) {
  .image-item {
    width: 180px;
    height: 180px;
  }
}

@media (min-width: 1280px) {
  .image-item {
    width: 200px;
    height: 200px;
  }
}

@media (hover: none) {
  .image-item {
    transition: none;
  }
}
</style>