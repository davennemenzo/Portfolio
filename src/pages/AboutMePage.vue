<template>
  <div
    class="min-h-screen flex flex-col bg-lavender pb-2 overflow-hidden relative"
  >
    <PageContainer>
      <div class="flex justify-center items-center flex-col relative mb-7">
        <h1
          class="sm:mt-[70px] mt-5 text-[45px] sm:text-[60px] md:text-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cover to-blue-400 uppercase tracking-tight"
        >
          About Me
        </h1>
        <div
          class="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
        ></div>
      </div>

      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div
          ref="textContent"
          class="flex flex-col space-y-4 md:w-3/5 text-cover opacity-0"
          :class="{
            'animate__animated animate__fadeIn opacity-100': isTextVisible,
          }"
        >
          <h2 class="text-xl md:text-4xl font-bold text-primary">
            Hey, I'm Daven Nemenzo 
          </h2>
          <div
            class="space-y-4 text-lg leading-relaxed lg:leading-loose text-justify lg:w-[450px] xl:w-[750px]"
          >
            <p>
              I'm mainly a Web Developer, but I also enjoy UI/UX and Graphic
              Design as a hobby. I'm currently a graduating student pursuing a
              Bachelor of Science in Information Technology, expected to
              graduate in 2025.
            </p>
            <p>
              I specialize in REST APIs and full-stack development with Laravel
              and Vue. I'm also expanding my skills by learning Node.js and
              other JavaScript technologies.
            </p>
            <p>
              I'm dedicated to learning and growing, always working on new
              skills and exploring technologies to make a positive impact. No
              matter what challenges come my way, I live by the mindset: "Stay
              curious and keep moving forward."
            </p>
          </div>
          <!-- <div class="flex flex-wrap gap-3">
            <SkillTag
              v-for="(skill, index) in skills"
              :key="index"
              :skill="skill.name"
              :isHighlighted="skill.highlighted"
            />
          </div> -->
        </div>

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
import SkillTag from "@/components/SkillTag.vue";
import SkillCard from "@/components/SkillCard.vue";
import "animate.css";
import { ref, onMounted } from "vue";

const textContent = ref(null);
const imageSection = ref(null);
const isTextVisible = ref(false);
const isImageVisible = ref(false);

const skills = [
  { name: "UI DESIGN", highlighted: true },
  { name: "UX DESIGN", highlighted: false },
  { name: "PROTOTYPING", highlighted: false },
  { name: "WIREFRAMING", highlighted: false },
  { name: "INFORMATION ARCHITECTURE", highlighted: false },
  { name: "USER RESEARCH", highlighted: false },
  { name: "HTML/CSS", highlighted: false },
  { name: "JAVASCRIPT", highlighted: false },
];

onMounted(() => {
  setTimeout(() => {
    const observerOptions = {
      threshold: 0.1,
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
  }, 100);
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
