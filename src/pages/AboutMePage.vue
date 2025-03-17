<template>
  <div
    class="sm:min-h-screen min-h-auto flex flex-col sm:py-[50px] py-5 overflow-hidden relative league"
    :style="{ backgroundColor: themeStore.currentColors.main }"
  >
    <PageContainer>
      <div class="flex justify-center items-center flex-col relative mb-7">
        <h1
          class="text-[10vh] sm:text-[45px] md:text-[60px] lg:text-[80px] font-bold uppercase tracking-wide"
          :style="{ color: themeStore.currentColors.tertiary }"
        >
          About 
        </h1>
        <div
          class="w-24 h-1 mx-auto rounded-full"
          :style="{ backgroundColor: themeStore.currentColors.tertiary }"
        ></div>
      </div>

      <!-- Main Content -->
      <div class="flex justify-center items-center">
        <div class="flex flex-col uppercase font-medium">
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
              :style="{ color: themeStore.currentColors.tertiary }"
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
import { ref, onMounted, computed } from "vue";
import { useThemeStore } from "@/stores/themeStore";
import PageContainer from "@/components/PageContainer.vue";

const themeStore = useThemeStore();

const paragraphs = [
  "Daven is a frontend developer and UI/UX designer specializing in Vue.js and Tailwind CSS. With a passion for crafting intuitive and responsive web applications, Daven seamlessly blends design and functionality to create engaging user experiences.",
  "Currently pursuing a B.S. in Information Technology (graduating in 2025), Daven is constantly exploring new JavaScript frameworks and design tools to enhance aesthetics and performance.",
  "Past projects include [mention notable projects or collaborations], with a focus on clean, user-friendly interfaces that prioritize both form and function. Driven by curiosity and innovation, Daven is always learning, iterating, and pushing the boundaries of frontend development.",
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
