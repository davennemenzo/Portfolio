<template>
  <div class="min-h-screen flex flex-col bg-cover">
    <Navbar class="z-50" />
    <Hero class="flex-1" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

// Import the CSS file from the style folder
import "@/styles/animation.css";

export default {
  components: {
    Navbar,
    Hero,
  },
};
</script>
