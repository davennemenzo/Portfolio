<template>
  <div
    class="min-h-[300px] md:min-h-[600px] lg:min-h-screen flex flex-col bg-lavender overflow-hidden relative"
  >
    <!-- Text container -->
    <div class="absolute inset-0 flex flex-col justify-center items-center space-y-6 lg:space-y-10">
      <!-- UI/UX DESIGNER Sliding from Left to Right -->
      <div
  class="text-[90px] m-0 sm:text-[150px] md:text-[160px] lg:text-[270px] whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-t from-cover to-blue-400 font-bold uppercase animate-slide-left-right text-center leading-none"
>
  UI/UX DESIGNER
</div>


      <!-- FRONTEND DEVELOPER Sliding from Right to Left -->
      <div
        class="text-[90px] m-0 sm:text-[150px] md:text-[160px] lg:text-[270px] whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-cover to-blue-400 font-bold uppercase animate-slide-right-left text-center leading-none"
      >
        FRONTEND DEVELOPER
      </div>
    </div>

    <!-- Image container -->
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-500px] md:w-[600px] md:h-[600px] lg:w-[770px] lg:h-[770px]"
    >
      <img
        src="/images/davenid.png"
        alt="About"
        class="w-full h-full object-cover rounded-full shadow-xl"
      />
    </div>
  </div>
</template>

<script>
// Import the CSS file from the style folder
import "@/styles/animation.css";

export default {
  name: "MicEffect"
};

</script>
