<template>
  <div
    class="min-h-[300px] max-h-[300px] md:min-h-[600px] md:max-h-[600px] lg:h-screen flex flex-col bg-lavender overflow-hidden relative"
  >
      <!-- Text container -->
      <div class="absolute inset-0 flex flex-col justify-center ">
        <!-- UI/UX DESIGNER Sliding from Left to Right -->
        <div
          class="flex justify-center items-center text-[90px] sm:text-[150px] md:text-[160px] lg:text-[240px] text-cover font-bold uppercase animate-slide-left-right whitespace-nowrap leading-none"
        >
          UI/UX DESIGNER
        </div>

        <!-- FRONTEND DEVELOPER Sliding from Right to Left -->
        <div
          class="flex justify-center items-center text-[90px] sm:text-[150px] md:text-[160px] lg:text-[240px] text-cover font-bold uppercase animate-slide-right-left whitespace-nowrap leading-none"
        >
          FRONTEND DEVELOPER
        </div>
      </div>

      <!-- Image container -->
      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px]"
      >
        <img
          src="@/images/test.png"
          alt="About"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
</template>

<script>


// Import the CSS file from the style folder
import "@/styles/animation.css";
import PageContainer from './PageContainer.vue';

export default {
  components: {
    
  },
};
</script>