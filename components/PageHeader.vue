<template>
    <div class="header-wrapper">
        <h1 class="header">
            UNFOLLOWED><i>Leeds</i>
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
}

.header {
font-size: 2.3rem;
color: var(--customLinkBlue);
padding: 0 0.2rem 0 0.2rem;
line-height: 0.7;
}

.subtitle {
display: flex;
flex-direction: column;
font-size: 1rem;
line-height: 1;
padding: 0 0 0 0.2rem
}

@media (min-width: 768px) {
.subtitle {
display: inline;
}
}

</style>