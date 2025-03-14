<template>
  <div
    class="min-h-auto flex-col bg-main  overflow-hidden relative py-10"
  >
    <PageContainer>
      <div class="flex justify-center items-center flex-col relative mb-7">
        <h1
          class=" text-[45px] sm:text-[60px] md:text-[70px] font-bold text-tertiary uppercase tracking-wide league"
        >
          Expertise
        </h1>
        <div class="w-24 h-1 mx-auto bg-tertiary rounded-full"></div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-10 w-full max-w-7xl mx-auto pb-20"
      >
        <SkillCard
          title="User Interface Design"
          :icon="Component"
          description="Creating intuitive and visually appealing interfaces that enhance user experience and engagement."
          toolsIcon="https://skillicons.dev/icons?i=figma,ps"
        />
        <SkillCard
          title="Frontend Development"
          description="Building responsive and interactive web applications with modern frameworks and technologies."
          :icon="Code"
          toolsIcon="https://skillicons.dev/icons?i=vue,js,css,tailwind"
        />
        <SkillCard
          title="Mobile Design"
          description="Creating user-friendly and visually appealing mobile interfaces with a focus on responsiveness and accessibility."
          :icon="Smartphone"
          toolsIcon="https://skillicons.dev/icons?i=figma,xd,tailwind,css"
        />
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from "@/components/PageContainer.vue";
import SkillCard from "@/components/SkillCard.vue";
import { Component, Code, Smartphone } from 'lucide-vue-next';
</script>

<style scoped>
.animate__animated {
  --animate-duration: 1.2s;
}

.animate__fadeIn {
  animation-delay: 0.3s;
}
</style>
