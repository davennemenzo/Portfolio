<template>
  <div
    class="min-h-[300px] md:min-h-[600px] lg:min-h-auto pb-15 bg-lavender flex flex-col bg-cover overflow-hidden relative"
  >
    <PageContainer>
      <div class="flex flex-col justify-center items-center">
       

        <!-- Skills Grid -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto"
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
      </div>
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from "@/components/PageContainer.vue";
</script>
