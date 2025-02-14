<template>
  <div class="h-screen overflow-y-auto bg-lavender">
    <Navbar class="z-50  w-full  " />
    <Hero/>
    <AboutMe />
    <Projects/>
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
