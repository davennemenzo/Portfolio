<template>
  <header class="w-full text-cover relative z-[100] h-16 sm:h-20">
    <page-container>
      <nav class="w-full flex items-center justify-between py-4 relative">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold tracking-widest">DRMN</a>

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
          <li><a href="#" class="hover:text-blue-400">Home</a></li>
          <li><a href="#about" class="hover:text-blue-400">About</a></li>
          <li><a href="#projects" class="hover:text-blue-400">Projects</a></li>
          <li>
            <a href="#expertise" class="hover:text-blue-400">Expertise</a>
          </li>
        </ul>
      </nav>
    </page-container>
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
};
</script>

<style scoped>
h2 {
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
}
</style>
