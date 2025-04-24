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
  display: block;
  /* flex-direction: column; */
  /* align-items: center; */
  /* border: 1px solid black; */
  /* padding: 1rem; */
  font-family: "Times New Roman", serif;
  margin: 1rem;
 
}
.card img {
  width: 30%;
  height: auto;
  /* margin-bottom: 1rem; */
}

</style>
