<template>
<div class="nav-wrapper">
    <div class="search-wrapper">
        <p>search via date & time</p>
        <p>today / tomorrow</p>
        <p>next 7 days</p>
        <p>next 14 days</p>
        <p>date range _____ to _____</p>
    </div>
    <div class="newly-posted-wrapper">
        <p>newly posted</p>
        <p>already happened</p>
    </div>
    <div class="account-wrapper">
        <p>add poster</p>
        <p>sign-up / login</p>
        <p>about / faq</p>
    </div>
</div>

</template>

<script lang="ts" setup>

</script>

<style lang="css" scoped>
 .nav-wrapper {
    display: flex;
    flex-direction: column;
font-family: "Times New Roman", serif;
line-height: 1.1;
 }

.search-wrapper{
padding: 0.5rem 0 0.5rem 1rem
}

.newly-posted-wrapper{
    padding: 0.5rem 0 0.5rem 1rem
}

.account-wrapper{
    padding: 0.5rem 0 0.5rem 1rem
}
</style>