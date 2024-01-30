<script setup>
import PageHeader from '@/components/PageHeader.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import HeadlineBanner from '@/components/HeadlineBanner.vue';
const view = "home";
</script>

<template>
  <PageHeader :view = "view" />
  <main class = "main-content">
    <HeroBanner />
    <HeadlineBanner />
  </main>
</template>

<style lang="scss" scoped>
.header {
    font-family: Lucida Calligraphy;
    font-weight: 500;
    padding: 0;
    background-color: lighten($blueberry, 40%); /* For browsers that do not support gradients */
    background-image: linear-gradient(lighten($blueberry, 20%), $coconut);
    min-height:fit-content;
  }
  .main-content {
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>