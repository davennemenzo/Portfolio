<template>
  <div class="min-h-screen flex flex-col bg-lavender overflow-hidden relative">
    <!-- Header section -->
    <PageContainer>
      <div class="flex justify-center items-center flex-col relative mb-7">
        <h1
          class="sm:mt-[70px] mt-5 text-[35px] sm:text-[50px] md:text-[55px] lg:text-[60px] text-cover font-bold uppercase leading-none"
        >
          About Me
        </h1>
      </div>

      <!-- Content section -->
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <!-- Text content -->
        <div
          ref="textContent"
          class="flex flex-col space-y-6 md:w-3/5 text-cover opacity-0"
          :class="{
            'animate__animated animate__fadeIn opacity-100': isTextVisible,
          }"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-primary">
            Hey, I'm Daven Nemenzo 👋
          </h2>
          <p class="text-lg md:text-xl leading-relaxed">
            I'm a UI/UX Designer and Frontend Developer passionate about
            crafting seamless, intuitive, and visually compelling digital
            experiences. With a keen eye for design and a deep understanding of
            code, I bridge aesthetics with functionality—turning ideas into
            interactive, user-friendly interfaces that engage and inspire.
          </p>
          <div class="flex flex-wrap gap-3">
            <div
              class="p-3 border-blue-300 border-2 rounded-full text-xs w-fit"
            >
              UI DESIGN
            </div>
            <div
              class="p-3 border-blue-300 border-2 rounded-full text-xs w-fit"
            >
              UX DESIGN
            </div>
            <div
              class="p-3 border-blue-300 border-2 rounded-full text-xs w-fit"
            >
              PROTOTYPING
            </div>
            <div
              class="p-3 border-blue-300 border-2 rounded-full text-xs w-fit"
            >
              WIREFRAMING
            </div>
            <div
              class="p-3 border-blue-300 border-2 rounded-full text-xs w-fit"
            >
              INFORMATION ARCHITECTURE
            </div>
            <div
              class="p-3 border-blue-300 border-2 rounded-full text-xs w-fit"
            >
              USER RESEARCH
            </div>
            <div
              class="p-3 border-blue-300 border-2 rounded-full text-xs w-fit"
            >
              HTML/CSS
            </div>
            <div
              class="p-3 border-blue-300 border-2 rounded-full text-xs w-fit"
            >
              JAVASCRIPT
            </div>
          </div>
        </div>

        <!-- Image section -->
        <div
          ref="imageSection"
          class="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full opacity-0"
          :class="{
            'animate__animated animate__fadeIn opacity-100': isImageVisible,
          }"
        >
          <img
            src="/images/wave.webp"
            alt="Daven Nemenzo"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from "@/components/PageContainer.vue";
import "animate.css";
import { ref, onMounted } from "vue";

const textContent = ref(null);
const imageSection = ref(null);
const isTextVisible = ref(false);
const isImageVisible = ref(false);

onMounted(() => {
  // Add a small delay before starting observations
  setTimeout(() => {
    const observerOptions = {
      threshold: 0.1, // Lower threshold to trigger earlier
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === textContent.value) {
            isTextVisible.value = true;
            observer.unobserve(entry.target);
          }
          if (entry.target === imageSection.value) {
            isImageVisible.value = true;
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    if (textContent.value) observer.observe(textContent.value);
    if (imageSection.value) observer.observe(imageSection.value);
  }, 100); // Small delay to ensure page is ready
});
</script>

<style scoped>
.animate__animated {
  --animate-duration: 1.2s;
}

.animate__fadeIn {
  animation-delay: 0.3s;
}
</style>
