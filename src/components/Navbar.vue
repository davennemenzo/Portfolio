<template>
  <header class="w-full  text-lavender  ">
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <a href="#" class="text-2xl font-bold tracking-widest">DRMN</a>

      <!-- Navigation Links -->
      <ul class="flex space-x-8">
        <li><a href="#" class="hover:text-blue-400">Home</a></li>
        <li><a href="#about" class="hover:text-blue-400">About</a></li>
        <li><a href="#projects" class="hover:text-blue-400">Projects</a></li>
        <li><a href="#expertise" class="hover:text-blue-400">Expertise</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
h2 {
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
}
</style>
