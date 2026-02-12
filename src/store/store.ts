import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkSystemTheme = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches

  const isDark = ref<boolean>(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : isDarkSystemTheme,
  )

  function setDark() {
    isDark.value = true
  }

  function setLight() {
    isDark.value = false
  }
  function toggleTheme() {
    isDark.value = !isDark.value
  }

  watch(
    isDark,
    (value) => {
      if (value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    },
    { immediate: true },
  )

  return { isDark, setDark, setLight, toggleTheme }
})
