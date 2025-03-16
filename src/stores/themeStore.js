import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const themes = ref({
    default: { main: "#0779FF", secondary: "#011E76", tertiary: "#B7F9FF" },
    dark: { main: "#fce9ff", secondary: "#3c0350", tertiary: "#da30f4" },
    warm: { main: "#ede6d3", secondary: "#2c2c2c", tertiary: "#f27306" },
    green: { main: "#37af5d", secondary: "#005219", tertiary: "#c6ff00" },
  });

  const selectedTheme = ref(localStorage.getItem("theme") || "default");

  const currentColors = computed(() => themes.value[selectedTheme.value]);

  const setTheme = (themeName) => {
    if (themes.value[themeName]) {
      selectedTheme.value = themeName;
      localStorage.setItem("theme", themeName);
    }
  };

  return { themes, selectedTheme, currentColors, setTheme };
});
