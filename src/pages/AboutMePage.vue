<template>
  <div class="min-h-[300px] md:min-h-[600px] lg:min-h-screen flex flex-col bg-lavender overflow-hidden relative">
    <!-- Header section -->
    <PageContainer>
      <div class="flex justify-center items-center flex-col relative mb-12">
        <div
          class="sm:mt-[70px] mt-5  text-[35px] sm:text-[50px] md:text-[55px] lg:text-[60px] text-cover font-bold uppercase whitespace-nowrap leading-none"
        >
          <span>About Me</span>
        </div>
      </div>

      <!-- Content section -->
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8"
      >
        <!-- Text content -->
        <div class="flex flex-col space-y-4 md:w-1/2 text-cover">
          <span class="text-2xl font-bold">HELLO</span>
          <span class="text-3xl font-bold mb-4">I'M DAVEN NEMENZO</span>
          <span class="text-lg">
            I'm a UI/UX Designer and Frontend Developer passionate about
            crafting seamless, intuitive, and visually compelling digital
            experiences. With a keen eye for design and a deep understanding of
            code, I bridge aesthetics with functionality—turning ideas into
            interactive, user-friendly interfaces that engage and inspire.
          </span>
        </div>

        <!-- Image section -->
        <div
          class="w-[300px] h-[300px] md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px] -mt-8 md:-mt-12 lg:-mt-13"
        >
          <img
            src="/images/aboutme.png"
            alt="About"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from '@/components/PageContainer.vue';


</script>
