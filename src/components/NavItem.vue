<script setup>
defineProps({
    name: {
    type: String,
    required: true
    },
    title: {
    type: String,
    required: true
    }
})
</script>

<template>
<li class = "navbar__item navbar__item--style" ><RouterLink :to="{name: name}">{{title}}</RouterLink></li>
</template>

<style lang="scss" scoped>
</style>