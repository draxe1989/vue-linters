<script setup lang="ts">
  import { useThemeStore } from '@/store/store'
  import { RouterView } from 'vue-router'

  useThemeStore()
</script>

<template>
  <RouterView />
</template>
