<template>
    <div class="header-wrapper">
        <h1 class="header">
            UNFOLLOWED&gt;<wbr><i>Leeds</i>
        </h1>
        <h2 class="subtitle">
            <span>See what's happening. </span>
            <span>Add your own event poster. </span>
            <span>Leave and get on with your life. </span>
        </h2>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.header-wrapper {
font-family: "Times New Roman", serif;
flex-shrink: 0;
  overflow: hidden;
  box-sizing: border-box;

}

.header {
font-size: clamp(2.3rem, 8vw, 9rem);
color: var(--customLinkBlue);
line-height: 0.75;
word-break: break-word;
}

.subtitle {
display: flex;
flex-direction: column;
font-size: clamp(1.2rem, 2.8vw, 2rem);
line-height: 1;
padding: 0 0 0 0.2rem
}

@media (min-width: 768px) {
.subtitle {
display: inline;
}
}

</style>