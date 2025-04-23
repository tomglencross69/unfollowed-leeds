<template>
    <div class="scroll-container">
        <div class="scroll-text">
            <div class="scroll-inner">
            <span>This is the scrolling text. </span>
            <span>This is the scrolling text.</span>
            <span>This is the scrolling text.</span>
        </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>

.scroll-container {
border: 1px solid black;
overflow: hidden;
}

.scroll-text {
    display: flex;
    white-space: nowrap;
}

.scroll-inner {
    display: inline-flex;
    animation: my-animation 10s linear infinite;
}

@keyframes my-animation {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}

</style>