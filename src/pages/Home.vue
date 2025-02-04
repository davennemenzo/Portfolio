<template>
  <div class="h-screen flex flex-col bg-cover items-center">
    <Navbar />
    <div class="flex flex-col overflow-hidden">
  
      <!-- UI/UX DESIGNER Sliding from Left to Right -->
      <div class="flex flex-1 justify-center items-center text-[180px] text-lavender font-bold uppercase animate-slide-left-right whitespace-nowrap">

        UI/UX DESIGNER
      </div>
      
      <!-- FRONTEND DEVELOPER Sliding from Right to Left -->
      <div class="flex flex-1 justify-center items-center text-[180px] text-lavender font-bold uppercase animate-slide-right-left whitespace-nowrap">

        FRONTEND DEVELOPER
      </div>
      <img src="@/images/hero.png" alt="About" class="absolute w-[600px] h-auto z-50 mx-auto  inset-0" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

// Import the CSS file from the style folder
import '@/styles/animation.css';

export default {
  components: {
    Navbar,
  },
};
</script>
