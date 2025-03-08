<template>
  <header class="w-full text-cover bg-lavender shadow-sm fixed top-0 left-0  z-50 ">
    <PageContainer>
      <nav class="w-full flex items-center justify-between py-3 relative">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500  to-cover ">DRMN</a>

        <!-- Burger Menu Button (visible on mobile) -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden focus:outline-none relative z-[101]"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Navigation Links -->
        <ul
          :class="[
            'md:flex md:space-x-8',
            'md:static fixed',
            'md:flex-row flex-col',
            'md:space-y-0 space-y-4',
            'md:bg-transparent bg-gray-800',
            'md:w-auto w-full',
            'md:top-auto top-16',
            'md:right-0 right-0',
            'md:p-0 p-6',
            'z-[99]',
            isMenuOpen ? 'flex' : 'hidden',
          ]"
        >
          <li><a href="#" @click.prevent="scrollToSection('aboutme')" class="hover:text-blue-400">About</a></li>
          <li><a href="#" @click.prevent="scrollToSection('projects')" class="hover:text-blue-400">Projects</a></li>
          <li><a href="#" @click.prevent="scrollToSection('expertise')" class="hover:text-blue-400">Expertise</a></li>
          <li><a href="#" @click.prevent="scrollToSection('contact')" class="hover:text-blue-400">Contact</a></li>
          <!-- <li><a href="#" @click.prevent="scrollToSection('testimonials')" class="hover:text-blue-400">Testimonials</a></li> -->
        </ul>
      </nav>
    </PageContainer>
  </header>
</template>

<script>
import PageContainer from "./PageContainer.vue";
export default {
  components: { PageContainer },
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        this.isMenuOpen = false; // Close menu on mobile
      }
    },
  },
};  
</script>

<style scoped>
h2 {
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
}
</style>
