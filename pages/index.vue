<template>
  
  <div class="app-wrapper">
    <!-- Headers are always at the top, full width -->
    <ScrollHeader class="scroll-header"/>
    <PageHeader class="page-header"/>
    
    <!-- Main content area has different layouts for mobile vs desktop -->
    <div class="content-area">
      <!-- Left navbar for desktop -->
      <NavBar class="desktop-navbar"/>
      
      <!-- Poster area -->
      <PosterCanvas class="poster-canvas">

        <!-- <h1 class="poster-title">poster area</h1> -->
        <PosterCard class="poster-card"
          v-for="poster in posters"
          :key="poster.slug"
          :poster="poster"
        />
      </PosterCanvas>
    </div>
    
    <!-- Bottom navbar for mobile only -->
    <NavBar class="mobile-navbar"/>
  </div>
</template>
  
<script setup lang="ts">

const {data: posters, error, pending} = await useAsyncData('posters', () => $fetch('/api/posters'))
if (error.value) {
  console.error('Error fetching poster:', error.value)
}
</script>
  
<style scoped>
/* Common styles */
.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.scroll-header, .page-header {
  width: 100%;
}

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

.poster-title {
  text-align: center;
  font-size: 3rem;
  border: solid black;
}

/* Mobile layout (default) */
.content-area {
  height: 66vh;
  display: flex;
  flex-direction: column;
  border: solid blueviolet;
  overflow: hidden;
}

.desktop-navbar {
  display: none; /* Hide on mobile */
}

.mobile-navbar {
  height: 33vh;
  display: block;
}

.poster-wrapper {
  flex-grow: 1;
}

/* Desktop layout */
@media (min-width: 768px) {
  .content-area {
    flex-direction: row;
    flex-grow: 1;
    height: auto;
  }
  
  .desktop-navbar {
    display: block;
    width: 25%;
    border: solid green;
  }
  
  .mobile-navbar {
    display: none; /* Hide on desktop */
  }
  
  .poster-wrapper {
    width: 75%;
    height: 100%;
  }
}
</style>