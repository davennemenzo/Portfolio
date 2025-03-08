<template>
  <div class="min-h-auto flex-col bg-lavender pb-2 overflow-hidden relative">
    <PageContainer>
      <div class="flex justify-center items-center flex-col relative mb-7">
        <h1
          class=" mt-5 text-[35px] sm:text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cover to-blue-400 uppercase tracking-tight"
        >
          Let's Work Together
        </h1>
        <div
          class="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
        ></div>
      </div>

      <div class="flex justify-center items-center flex-col relative mb-7">
        <p class="text-lg">davennemenzo@gmail.com</p>
        <p class="text-lg">+63 94532=482113</p>
        <div class="flex gap-4 mt-4">
          <a
            href="https://www.facebook.com/daven.nemenzo/"
            target="_blank "
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Facebook class="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/daven-reez-nemenzo-337a07314/"
            target="_blank"
            class="text-gray-700 hover:text-blue-500 transition-colors"
          >
            <Linkedin class="w-8 h-8" />
          </a>
          <a
            href="https://github.com/davennemenzo"
            target="_blank"
            class="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Github class="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/reezdaven/"
            target="_blank"
            class="text-gray-700 hover:text-pink-600 transition-colors"
          >
            <Instagram class="w-8 h-8" />
          </a>
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from "@/components/PageContainer.vue";
import { Facebook, Linkedin, Github, Instagram } from "lucide-vue-next";
</script>

<style scoped>
.animate__animated {
  --animate-duration: 1.2s;
}

.animate__fadeIn {
  animation-delay: 0.3s;
}
</style>
