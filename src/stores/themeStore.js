import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const themes = ref({
    default: { main: "#0779FF", secondary: "#011E76", tertiary: "#B7F9FF" },
    dark: { main: "#8B07FF", secondary: "#3A0176", tertiary: "#DDB7FF" },
    warm: { main: "#FF0F07", secondary: "#760101", tertiary: "#FFB7B7" },
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
