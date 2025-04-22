<template>
  <article class="card">
    <img :src="gig.poster" :alt="gig.title" />
    <h2>{{ gig.title }}</h2>
    <p class="date">{{ gig.date }}</p>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  font-family: "Times New Roman", serif;
  background-color: #fefefe;
}
.card img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
.card .date {
  font-size: 0.9rem;
  color: #555;
}
</style>
