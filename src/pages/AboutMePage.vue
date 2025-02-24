<template>
  <div class="min-h-screen flex flex-col bg-lavender overflow-hidden relative">
    <!-- Header section -->
    <PageContainer>
      <div class="flex justify-center items-center flex-col  relative mb-7">
        <h1
          class="sm:mt-[70px] mt-5 text-[45px] sm:text-[60px] md:text-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cover to-blue-400 uppercase tracking-tight"
        >
          About Me
        </h1>
        <div
          class="w-24 h-1 mx-auto  bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
        ></div>
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
            <div class="p-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-fit">
  <div class="p-3 bg-white rounded-full text-xs">
    UI DESIGN
  </div>
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

      <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto mt-10"
        >
          <!-- UI Design Skill -->
          <div
            class="group relative bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div class="flex items-start gap-4">
              <span class="text-xl font-bold text-lavender">01.</span>
              <div class="space-y-4">
                <h3 class="text-2xl font-semibold text-gray-800">
                  User Interface Design
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Creating intuitive and visually appealing interfaces that
                  enhance user experience and engagement.
                </p>
                <div class="space-y-2">
                  <h4 class="text-lg font-semibold text-gray-800">
                    Tools & Technologies
                  </h4>
                  <div class="flex gap-2 flex-wrap">
                    <img
                      src="https://skillicons.dev/icons?i=figma,ps,"
                      alt="Design Tools"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Frontend Development -->
          <div
            class="group relative bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div class="flex items-start gap-4">
              <span class="text-xl font-bold text-lavender">02.</span>
              <div class="space-y-4">
                <h3 class="text-2xl font-semibold text-gray-800">
                  Frontend Development
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Building responsive and interactive web applications with
                  modern frameworks and technologies.
                </p>
                <div class="space-y-2">
                  <h4 class="text-lg font-semibold text-gray-800">
                    Tools & Technologies
                  </h4>
                  <div class="flex gap-2 flex-wrap">
                    <img
                      src="https://skillicons.dev/icons?i=vue,js,css,tailwind"
                      alt="Frontend Tools"
                    />
                  </div>
                </div>
              </div>
            </div>
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
