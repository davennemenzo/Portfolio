<template>
  <div class="h-screen flex flex-col bg-cover items-center">
    <div class="flex flex-col overflow-hidden">
      <!-- UI/UX DESIGNER Sliding from Left to Right -->
      <div
        class="flex flex-1 justify-center items-center text-[60px] sm:text-[150px] md:text-[160px] lg:text-[200px] text-lavender font-bold uppercase animate-slide-left-right whitespace-nowrap leading-tight mt-10 sm:mt-0"
      >
        UI/UX DESIGNER
      </div>

      <!-- FRONTEND DEVELOPER Sliding from Right to Left -->
      <div
        class="flex flex-1 justify-center items-center text-[60px] sm:text-[150px] md:text-[160px] lg:text-[240px] text-lavender font-bold uppercase animate-slide-right-left whitespace-nowrap leading-tight"
      >
        FRONTEND DEVELOPER
      </div>
      <div
        class="absolute mt-10 inset-0 mx-auto z-50 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] flex justify-center"
      >
        <img
          src="@/images/test.png"
          alt="About"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

// Import the CSS file from the style folder
import "@/styles/animation.css";

export default {
  components: {
    Navbar,
  },
};
</script>
