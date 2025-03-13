<template>
  <div
    class="min-h-auto flex-col bg-main pb-10 overflow-hidden relative"
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
        class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto mt-10"
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
