<template>
    <div class="scroll-container">
      <div class="scroll-text">
        <div class="scroll-inner">
          <span v-for="n in 10" :key="n">no zuck no bezos no ads no doomscroll no endless feed no addiction no problem&#x00A0</span>
        </div>
      </div>
    </div>
  </template>
  
<script setup>

</script>

<style scoped lang="css">
.scroll-container {
  overflow: hidden;
  flex-shrink: 0;
  box-sizing: border-box;
  padding-bottom: 0.1rem;
}

.scroll-text {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}

.scroll-inner {
 font-size: clamp(1.3rem, 1vw, 2rem);
 font-family: 'MyCustomGothicFont', serif;
  display: inline-flex;
  animation: scroll-loop 60s linear infinite;
  line-height: 0.9;
}

@keyframes scroll-loop {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>