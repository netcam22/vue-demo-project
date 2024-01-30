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

:root {
    --strong-orange: rgb(243, 126, 0);
    --med-strong-orange: rgb(249, 168, 81);
    --med-orange: rgb(247, 178, 105);
    --mid-orange: rgb(250, 213, 156);
    --strong-blue: rgb(2, 125, 208);
    
    --med-blue: rgb(152, 198, 235);
    --mid-blue: rgb(203, 226, 245);
    --light-blue: rgb(224, 237, 249);
    --mid-grey-blue: rgb(136, 178, 211);
   
    --white: rgb(255, 255, 255);
    --black: rgb(0, 0, 0);
}
.header {
    font-family: "BenchNine-Bold";
    font-weight: 500;
    padding: 0;
    background-color: lighten($blueberry, 40%); /* For browsers that do not support gradients */
    background-image: linear-gradient($mid-blue, $coconut);
    min-height:fit-content;
    padding: 0;
    @include respond-medium {
        padding: 0;
    }
  }
  .main-content {
    font-family: "BenchNine-Bold";
    flex-direction: row;
    flex-wrap: wrap;
    background-color: lighten($blueberry, 40%); /* For browsers that do not support gradients */
    background-image: linear-gradient($mid-blue, $coconut);
  }
</style>