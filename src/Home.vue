<template>
  <div class="h-screen overflow-y-auto poppins bg-secondary">
    <!-- <button
     
      class="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full z-20 hover:bg-gray-700 transition-colors"
    >
<a href="aboutme">      <img
        src="/images/avatar.svg"
        alt="About"
        class="w-12 h-12 object-contain"
      /></a>
    </button> -->
    <Hero id="hero" />
    <AboutMePage id="aboutme" />
    <ProjectsPage id="projects" />
    <ExpertisePage id="expertise" />
    <ContactPage id="contact" ref="contactSection" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
// Import the CSS file from the style folder
import "@/styles/animation.css";
import ProjectsPage from "./pages/ProjectsPage.vue";
import TestimonialPage from "./pages/TestimonialPage.vue";
import ExpertisePage from "./pages/ExpertisePage.vue";
import ContactPage from "./pages/ContactPage.vue";
import AboutMePage from "./pages/AboutMePage.vue";
</script>
