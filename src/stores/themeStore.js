import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const themes = ref({
    default: { main: "#0779FF", secondary: "#011E76", tertiary: "#B7F9FF" },
    dark: { main: "#3c0350", secondary: "#da30f4", tertiary: "#fce9ff" },
    warm: { main: "#ede6d3", secondary: "#f27306", tertiary: "#2c2c2c" },
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
