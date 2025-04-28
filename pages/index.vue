<template>
  <div class="desktop-wrapper">
  <div class="top-section-mobile">
  <ScrollHeader/>
  <PageHeader/>
  <main class="poster-wrapper">
    <h1 class="poster-title">poster area</h1>
      <PosterCard class="poster-card"
      v-for="gig in gigs"
      :key="gig.slug"
      :gig="gig"
      />
    <!-- <NuxtLink to="/account">Account</NuxtLink> -->
    </main>
  </div>
  <div class="bottom-section-mobile"> 
    <NavBar/>
  </div>
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

@media (min-width: 768px) {
  .desktop-wrapper {
    display: grid
  
}

}

  .top-section-mobile {
      height:66vh;
      display: flex;
      flex-direction: column;
      border: solid blueviolet;
      overflow: hidden;
    }
    
  .bottom-section-mobile {
    height:33vh;
  }

  .poster-wrapper {
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

  .poster-title {
    text-align: center;
    font-size: 3rem;
    border: solid black;
  }



  </style>