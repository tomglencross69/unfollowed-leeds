<template>
  <div class="top-section">
  <ScrollHeader/>
  <PageHeader/>
  <main class="wrapper">
    <h1 class="title">poster area</h1>
      <PosterCard class="poster-card"
      v-for="gig in gigs"
      :key="gig.slug"
      :gig="gig"
      />
    <!-- <NuxtLink to="/account">Account</NuxtLink> -->
    </main>
  </div>
  <div class="bottom-or-side"> 
    <NavBar/>
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
      border: solid blueviolet;
      overflow: hidden;
    }
    
  .bottom-or-side {
    height:33vh;
  }

  .wrapper {
    font-family: "Times New Roman", serif;
    border: solid red;
    /* flex and flex-grow one make the container fill the top section */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    overflow-y: auto;
  box-sizing: border-box;
  }

  .title {
    text-align: center;
    font-size: 3rem;
    border: solid black;
  }



  </style>