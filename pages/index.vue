<!-- pages/index.vue -->
<template>
  <PosterCanvas class="poster-canvas">
    
    <PosterCard
      class="poster-card"
      v-for="poster in posters"
      :key="poster.slug"
      :poster="poster"
    />
  </PosterCanvas>
</template>

<script setup lang="ts">
const { data: posters, error} = await useAsyncData('posters', () => $fetch('/api/posters'))

if (error.value) {
  console.error('Error fetching poster:', error.value)
}
</script>

<style scoped>
.poster-canvas {
  font-family: "Times New Roman", serif;
  border: solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  box-sizing: border-box;
}

.poster-card {
  /* Add any needed styling for individual poster cards */
}
</style>
