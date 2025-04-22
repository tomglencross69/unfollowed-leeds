<template>
  <PageHeader/>
    <main class="wrapper">
      <h1 class="title">THE GIG WALL</h1>
      <section class="grid">
        <PosterCard
          v-for="gig in gigs"
          :key="gig.slug"
          :gig="gig"
        />
      </section>
      <NuxtLink to="/account">Account</NuxtLink>
    </main>
  </template>
  
  <script setup lang="ts">
  const gigs = [
    {
      title: "The Swans at The Haunt",
      date: "2025-06-01",
      poster: "/posters/poster1.jpg",
      slug: "swans-haunt"
    },
    {
      title: "Tropical Goth @ Nowhere Bar",
      date: "2025-04-30",
      poster: "/posters/poster2.jpg",
      slug: "tropical-goth"
    }
  ]
  </script>
  
  <style scoped>
  .wrapper {
    max-width: 800px;
    margin: auto;
    font-family: "Times New Roman", serif;
    padding: 2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  .title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  </style>