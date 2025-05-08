<!-- layouts/default.vue -->
<template>
    <div class="app-wrapper">
      <!-- Headers are always at the top, full width -->
      <ScrollHeader class="scroll-header" />
      <PageHeader class="page-header" />
  
      <!-- Main content area has different layouts for mobile vs desktop -->
      <div class="content-area">
        <!-- Left navbar for desktop -->
        <NavBar class="desktop-navbar" />
  
        <!-- Poster area wrapper where slot content will be injected -->
        <div class="poster-wrapper">
            <slot></slot>
        </div>
      </div>
  
      <!-- Bottom navbar for mobile only -->
      <NavBar class="mobile-navbar" />
    </div>
  </template>
  
  <style scoped>
  .app-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .scroll-header,
  .page-header {
    width: 100%;
  }
  
  .content-area {
    height: 66vh;
    display: flex;
    flex-direction: column;
    border: solid blueviolet;
    overflow: hidden;
  }
  
  .desktop-navbar {
    display: none;
  }
  
  .mobile-navbar {
    height: 33vh;
    display: block;
  }
  
  .poster-wrapper {
    flex-grow: 1;
  }
  
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
      display: none;
    }
  
    .poster-wrapper {
      width: 75%;
      height: 100%;
    }
  }
  </style>
  