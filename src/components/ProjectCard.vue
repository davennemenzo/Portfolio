<template>
  <div>
    <!-- Mobile Layout (default) -->
    <div
      class="md:hidden flex flex-col items-center border border-cover w-full rounded-lg bg-slate-800 p-4 hover:shadow-2xl transition-all duration-300"
    >
      <div class="w-full mb-3">
        <video
          class="w-full h-48 object-cover rounded-lg shadow-lg"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="project.videoSrc" type="video/mp4" />
        </video>
      </div>
      <div class="w-full text-white">
        <h3 class="text-xl font-bold mb-3">{{ project.title }}</h3>
        <p class="text-gray-300 mb-4 leading-relaxed">
          {{ project.description }}
        </p>
        <div class="flex flex-col gap-3">
          <div
            class="text-xs font-semibold px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-fit"
          >
            {{ project.category }}
          </div>
          <a
            :href="project.skillIconsUrl"
            target="_blank"
            class="hover:opacity-80 transition-opacity"
          >
            <img
              :src="project.skillIcons"
              alt="Project Skills"
              class="w-32 h-8"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Desktop Layout (with hover effect) -->
    <div class="hidden md:flex card">
      <div class="card-content">
        <h3 class="title text-2xl font-bold">{{ project.title }}</h3>

        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>

        <div class="w-full mt-14 mb-4">
          <video
            class="w-full h-48 object-cover rounded-xl shadow-lg"
            autoplay
            muted
            loop
            playsinline
          >
            <source :src="project.videoSrc" type="video/mp4" />
          </video>
        </div>

        <div class="px-6">
          <p class="text-gray-300 leading-relaxed">{{ project.description }}</p>

          <div class="flex flex-col gap-4 mt-6">
            <div
              class="text-xs font-semibold px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-fit"
            >
              {{ project.category }}
            </div>

            <a
              :href="project.skillIconsUrl"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                :src="project.skillIcons"
                alt="Project Skills"
                class="w-32 h-8"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="circle">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle class="stroke" cx="60" cy="60" r="50" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  height: 600px;
  width: 380px;
  background: linear-gradient(145deg, #1a1625, #17141d);
  border-radius: 16px;
  box-shadow: -1rem 0 3rem rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-content {
  padding: 1.5rem;
  height: 100%;
  position: relative;
  z-index: 1;
}

.card:not(:first-child) {
  /* Remove this to eliminate card overlap */
  /* margin-left: -60px; */
}

.card:hover {
  transform: translateY(-20px) rotate(-1deg);
  transition: 0.4s ease-out;
  box-shadow: -1.5rem 0 4rem rgba(0, 0, 0, 0.6);
}

.card:hover ~ .card {
  /* Remove this to eliminate push effect */
  /* position: relative; */
  /* left: 60px; */
  /* transition: 0.4s ease-out; */
}

.title {
  background: linear-gradient(90deg, #fff, #a8b0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.bar {
  position: relative;
  margin: 1rem 0;
  height: 4px;
  width: 150px;
  border-radius: 2px;
  overflow: hidden;
}

.emptybar {
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  border-radius: 2px;
}

.filledbar {
  position: absolute;
  top: 0;
  z-index: 3;
  width: 0px;
  height: 100%;
  background: linear-gradient(90deg, #00d2ff, #3a7bd5);
  border-radius: 2px;
  transition: 0.6s ease-out;
}

.card:hover .filledbar {
  width: 100%;
  transition: 0.4s ease-out;
}

.circle {
  position: absolute;
  bottom: 30px;
  left: calc(50% - 60px);
  opacity: 0.2;
}

.stroke {
  stroke: url(#gradient);
  stroke-dasharray: 360;
  stroke-dashoffset: 360;
  transition: 0.6s ease-out;
}

svg {
  fill: transparent;
  stroke-width: 2px;
}

.card:hover .stroke {
  stroke-dashoffset: 100;
  transition: 0.6s ease-out;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
