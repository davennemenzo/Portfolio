<template>
  <div class="h-screen overflow-y-auto league">
    
    <Hero id="hero"/>
    <AboutMePage id="aboutme"/>
    <ProjectsPage id="projects"/>
    <ExpertisePage id="expertise"/>
   <ContactPage id="contact"/>
  
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
// Import the CSS file from the style folder
import "@/styles/animation.css";
import AboutMePage from "./pages/AboutMePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import TestimonialPage from "./pages/TestimonialPage.vue";
import ExpertisePage from "./pages/ExpertisePage.vue";
import ContactPage from "./pages/ContactPage.vue";


export default {
  components: {
    Navbar,
    Hero,
    AboutMePage,
    ProjectsPage,
    ExpertisePage,
    ContactPage,
   
  },
};
</script>
