<template>
  <div class="h-screen overflow-y-auto bg-cover">
    <Navbar class="z-50 fixed w-full" />
    <Hero/>
    <Projects/>
    <AboutMe />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
// Import the CSS file from the style folder
import "@/styles/animation.css";

export default {
  components: {
    Navbar,
    Hero,
    AboutMe,
    Projects,
  },
};
</script>
