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

.main-content {
    font-family: "BenchNine-Bold";
    flex-direction: row;
    flex-wrap: wrap;
    background-color: lighten($blueberry, 40%); 
  }
.header {
    font-family: "BenchNine-Bold";
    font-weight: 500;
    padding: 0;
    background-color: lighten($blueberry, 40%);
    background-image: linear-gradient($mid-blue, $coconut);
    min-height:fit-content;
    padding: 0;
    @include respond-medium {
        padding: 0;
    }
  }
</style>