<template>
  <div class="top-section">
  <ScrollHeader/>
  <PageHeader/>
  <h1 class="title">poster area</h1>
  <main class="wrapper">
    <section>
      <PosterCard
      v-for="gig in gigs"
      :key="gig.slug"
      :gig="gig"
      />
    </section>
    <!-- <NuxtLink to="/account">Account</NuxtLink> -->
    </main>
  </div>
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
    .top-section {
      height:66vh;
      display: flex;
      flex-direction: column;
      border: solid blueviolet
    }
    
  .wrapper {
    font-family: "Times New Roman", serif;
    border: solid red;
    /* flex and flex-grow one make the container fill the top section */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .title {
    text-align: center;
    font-size: 3rem;
    border: solid black;
  }


  </style>