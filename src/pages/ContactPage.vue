<template>
  <div
    class="min-h-[300px] md:min-h-[600px] lg:min-h-screen flex flex-col items-center justify-center bg-secondary pb-2 overflow-hidden relative"
  >
    <!-- Contact Title (Fixed scaling inside h1) -->
    <h1 class="text-main league font-bold tracking-tight uppercase  mb-6 scale-y-[35] scale-x-[36] top-50 absolute">
      Contact
    </h1>

    <!-- Contact Info -->
    <div class="flex league flex-col items-center gap-2 text-tertiary text-center absolute bottom-40 ">
      <p class="text-xl tracking-widest">DAVENNEMENZO@GMAIL.COM</p>
      <p class="text-xl tracking-widest">+63 9453482113</p>

      <!-- Social Media Links -->
      <div class="flex gap-4 mt-2">
        <a
          href="https://www.facebook.com/daven.nemenzo/"
          target="_blank"
          class="hover:text-blue-600 transition-colors"
        >
          <Facebook class="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/daven-reez-nemenzo-337a07314/"
          target="_blank"
          class="hover:text-blue-500 transition-colors"
        >
          <Linkedin class="w-8 h-8" />
        </a>
        <a
          href="https://github.com/davennemenzo"
          target="_blank"
          class="hover:text-gray-900 transition-colors"
        >
          <Github class="w-8 h-8" />
        </a>
        <a
          href="https://www.instagram.com/reezdaven/"
          target="_blank"
          class="hover:text-pink-600 transition-colors"
        >
          <Instagram class="w-8 h-8" />
        </a>
      </div>
     
    </div>
     <p class="mt-7 text-[12px] text-tertiary poppins flex absolute bottom-10">© 2025 Daven Nemenzo. All rights reserved.</p>
  </div>
</template>

<script setup>
import { Facebook, Linkedin, Github, Instagram } from "lucide-vue-next";
</script>
