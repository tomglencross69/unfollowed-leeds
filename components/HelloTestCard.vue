<template>
    <div>
        <h2>{{ welcomeMessage.message }}</h2>
        <h3>{{ welcomeMessage.alt }}</h3>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    welcomeMessage: {
      message: string
      alt: string
      index: number
    }
  }>()
</script>

<style scoped>

</style>