<template>
  <div
    class="sm:min-h-screen min-h-auto flex flex-col bg-main sm:py-[50px] py-5 overflow-hidden relative league"
  >
    <PageContainer>
      <div class="flex justify-center items-center flex-col relative mb-7">
        <h1
          class="text-[30px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-tertiary uppercase tracking-wide"
        >
          About Me
        </h1>
        <div class="w-24 h-1 mx-auto bg-tertiary rounded-full"></div>
      </div>

      <!-- Main Content -->
      <div class="flex justify-center items-center">
        <div class="flex flex-col text-tertiary uppercase font-medium">
          <div
            class="space-y-7 text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] leading-relaxed lg:leading-tight tracking-wide text-center lg:w-[450px] xl:w-[650px]"
          >
            <p
              v-for="(paragraph, index) in paragraphs"
              :key="index"
              :ref="(el) => (paragraphRefs[index] = el)"
              :class="{
                'opacity-100': visibleParagraphs[index],
                'opacity-30': !visibleParagraphs[index],
              }"
              class="transition-opacity duration-500"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PageContainer from "@/components/PageContainer.vue";

const paragraphs = [
  "I'm a Frontend Developer and UI/UX Designer passionate about creating intuitive and responsive web applications. Currently pursuing a B.S. in Information Technology (graduating in 2025), I specialize in Vue.js and Tailwind CSS, bridging design and functionality for seamless user experiences.",
  "I continuously expand my skills by exploring JavaScript frameworks and design tools, ensuring both aesthetics and performance in my work. My goal is to craft user-friendly interfaces that are both visually appealing and highly functional.",
  "Beyond development, I'm driven by curiosity and growth, always eager to learn, improve, and innovate. Stay curious and keep moving forward.",
];

const paragraphRefs = ref([]);
const visibleParagraphs = ref(paragraphs.map(() => false));

onMounted(() => {
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = paragraphRefs.value.indexOf(entry.target);
      if (entry.isIntersecting) {
        visibleParagraphs.value[index] = true;
      } else {
        visibleParagraphs.value[index] = false;
      }
    });
  }, observerOptions);

  paragraphRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});
</script>
