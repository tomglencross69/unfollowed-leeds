<template>
    <section class="flex">
<HelloTestCard
v-for="welcomeMessage in welcome"
:key="welcomeMessage.index"
:welcomeMessage="welcomeMessage"
/>
    </section>
</template>

<script setup lang="ts">

type WelcomeMessageType = {
    message: string
    alt: string
    index: number
}

const welcome: WelcomeMessageType[] = [
    {
    message: "hello",
    alt: "welcome to account page",
    index: 1
    },
    {
    message: "hello again",
    alt: "welcome to account page again",
    index: 2
    }
]
</script>

<style lang="scss" scoped>

</style>