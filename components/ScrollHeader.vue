<template>
    <div class="scroll-container">
      <div class="scroll-text">
        <div class="scroll-inner">
          <span v-for="n in 10" :key="n">no zuck no ads no doomscroll no endless feed no addiction no problem&#x00A0</span>
        </div>
      </div>
    </div>
  </template>
  
<script setup>

</script>

<style scoped lang="css">
.scroll-container {
  overflow: hidden;
  border: 1px solid black;
}

.scroll-text {
  display: flex;
  white-space: nowrap;
}

.scroll-inner {
 font-family: 'MyCustomGothicFont', serif;
  display: inline-flex;
  animation: scroll-loop 30s linear infinite;
}

@keyframes scroll-loop {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-60%);
  }
}
</style>