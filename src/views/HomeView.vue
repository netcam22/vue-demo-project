<script setup>
import PageHeader from '@/components/PageHeader.vue';
import HeadlineBanner from '@/components/HeadlineBanner.vue';
const view = "home";
const reactView = "react";
const javascriptView = "javascript";
const bannerView = "hero";
</script>

<template>
  <PageHeader :view = "view" />
  <main class = "main-content">
    <HeadlineBanner :view = "bannerView"/>
    <HeadlineBanner :view = "reactView"/>
    <HeadlineBanner :view = "javascriptView"/>
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
    min-height:fit-content;
    padding: 0;
    @include respond-medium {
        padding: 0;
    }
  }
</style>