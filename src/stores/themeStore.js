import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const themes = ref({
    default: { main: "#ede6d3", secondary: "#2c2c2c", tertiary: "#f27306" },
    dark: { main: "#fce9ff", secondary: "#3c0350", tertiary: "#da30f4" },
    warm: { main: "#ffffff", secondary: "#363636", tertiary: "#c1c1c1" },
    blue: { main: "#0779ff", secondary: "#01207d", tertiary: "#b7f9ff" },
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
