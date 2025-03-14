import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const themes = ref({
    default: { main: "#0779FF", secondary: "#011E76", tertiary: "#B7F9FF" },
    dark: { main: "#1e1e1e", secondary: "#444", tertiary: "#888" },
    warm: { main: "#b45309", secondary: "#eab308", tertiary: "#facc15" },
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
