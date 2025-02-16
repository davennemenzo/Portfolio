<template>
  <div
    class="min-h-[300px] md:min-h-[600px] lg:min-h-screen flex flex-col bg-cover overflow-hidden relative"
  >
    <PageContainer>
      <div
        class="flex flex-col justify-center items-center text-5xl"
      >
        <div
          class="sm:my-[70px] my-5 text-[35px] sm:text-[50px] md:text-[55px] lg:text-[60px] text-lavender font-bold uppercase whitespace-nowrap leading-none"
        >
          My Skills
        </div>

        <div class="gap-y-4 flex flex-col ">
          <div
          class="flex justify-between w-full px-10 py-4 bg-lavender text-cover gap-x-20"
        >
          <span> 01.</span>
          <div class="flex flex-col gap-y-4">
            <span>User Interface Design</span>
            <span class="text-[20px]"
              >A UI designer creates the visual elements and layouts for a
              product's user interface (UI). The UI is the point of contact
              between a user and a device or product.
            </span>
          </div>
        </div>

        <div
          class="flex justify-between w-full px-10 py-4 bg-lavender text-cover gap-x-20"
        >
          <span> 01.</span>
          <div class="flex flex-col gap-y-4">
            <span>User Interface Design</span>
            <span class="text-[20px]"
              >A UI designer creates the visual elements and layouts for a
              product's user interface (UI). The UI is the point of contact
              between a user and a device or product.
            </span>
          </div>
        </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from "@/components/PageContainer.vue";
</script>
