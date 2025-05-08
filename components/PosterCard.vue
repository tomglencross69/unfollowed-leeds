<template>
  <article class="card">
    <img :src="poster.posterimageurl" :alt="poster.title" />
    <h1>hello</h1>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  poster: {
    posterImageURL: string
    eventName: string
    [key: string]: any  // optional: allows other fields without strict typing
  }
}>()

</script>

<style scoped>
.card {
  border: 1px solid black;
  overflow: hidden; 
  box-sizing: border-box; 
}

.card img {
  width: 100%;
  max-width: 100px;  /* Control the size of the image */
  height: auto;
}

</style>
