<template>
  <article class="card">
    <img :src="gig.poster" :alt="gig.title" />
    <!-- <h2>{{ gig.title }}</h2> -->
  </article>
</template>

<script setup lang="ts">
defineProps<{
  gig: {
    title: string
    poster: string
    date: string
    slug: string
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
