<template>
  <div
    class="min-h-[300px] md:min-h-[600px] lg:min-h-screen flex flex-col bg-cover overflow-hidden relative"
  >
    <PageContainer>
      <div class="flex flex-col justify-center items-center text-5xl">
        <div
          class="sm:my-[70px] my-5 text-[35px] sm:text-[50px] md:text-[55px] lg:text-[60px] text-lavender font-bold uppercase whitespace-nowrap leading-none"
        >
          My Skills
        </div>
<div class="group relative grid grid-cols-[auto_auto_1fr] items-center gap-x-6 bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300">
  <!-- Order Number -->
  <span class="text-xl font-bold text-gray-500">01.</span>

  <!-- Image Container (Appears on Hover) -->
  <div
    class="border border-black z-50 mx-20 w-60 h-60 bg-lavender flex justify-center items-center rounded-xl transform transition-all duration-300 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-12"
  >
    <img
      src="/images/davenid.png"
      alt="About"
      class="w-48 h-48 object-cover shadow-lg rounded-lg"
    />
  </div>

  <!-- Text Content -->
  <div class="flex flex-col gap-y-2">
    <!-- Title (Always Visible) -->
    <span class="text-2xl font-semibold text-gray-800">User Interface Design</span>

    <!-- Description (Appears on Hover) -->
    <span
      class="text-lg text-gray-700 leading-relaxed opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      A UI designer creates the visual elements and layouts for a product's user interface (UI).
      The UI is the point of contact between a user and a device or product.
    </span>

    <!-- Tools (Appears on Hover) -->
    <span
      class="text-2xl font-semibold text-gray-800 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      Tools I Use
    </span>
    <a
      href="https://skillicons.dev"
      class="opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <img src="https://skillicons.dev/icons?i=figma,ps" />
    </a>
  </div>
</div>
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from "@/components/PageContainer.vue";
</script>
