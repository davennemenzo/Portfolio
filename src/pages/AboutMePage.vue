<template>
  <div class="min-h-screen flex flex-col bg-lavender overflow-hidden relative">
    <!-- Header section -->
    <PageContainer>
      <div class="flex justify-center items-center flex-col relative mb-7">
        <h1 class="sm:mt-[70px] mt-5 text-[35px] sm:text-[50px] md:text-[55px] lg:text-[60px] text-cover font-bold uppercase leading-none">
          About Me
        </h1>
      </div>

      <!-- Content section -->
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <!-- Text content -->
        <div class="flex flex-col space-y-6 md:w-1/2 text-cover">
          <h2 class="text-3xl font-bold text-primary">Hey, I'm Daven Nemenzo 👋</h2>
          <p class="text-lg leading-relaxed">
            A passionate <span class="font-semibold">UI/UX Designer & Frontend Developer</span> with a strong focus on 
            creating seamless, intuitive, and visually compelling digital experiences.  
          </p>
          <p class="text-lg leading-relaxed">
            I specialize in **designing clean, modern interfaces** and developing **interactive, user-friendly applications** 
            using **Vue.js, Tailwind CSS, and modern JavaScript frameworks**. My goal is to bridge aesthetics with functionality, 
            ensuring that every project I build is both visually appealing and highly usable.
          </p>
          <p class="text-lg leading-relaxed">
            I thrive on problem-solving, love collaborating with teams, and am always eager to explore new technologies to 
            push the boundaries of web development.
          </p>
        </div>

        <!-- Image section -->
        <div class="w-[300px] h-[300px] md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px]">
          <img
            src="/images/aboutme.png"
            alt="Daven Nemenzo"
            class="w-full h-full object-cover "
          />
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from '@/components/PageContainer.vue';
</script>
