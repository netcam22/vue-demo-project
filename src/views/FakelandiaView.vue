<script setup>
import PageHeader from '@/components/PageHeader.vue';
import ChartBlock from '@/components/ChartBlock.vue';
import PageFooter from '@/components/PageFooter.vue';

const view = "fakelandia";
</script>
<template>
  <PageHeader :view = "view"/>
  <main class = "main-content main-content--fakelandia">
    <ChartBlock :view = "view"/>
  </main>
  <PageFooter />
</template>

<style lang="scss" scoped >

.main-content {
  background-color: lighten($lemon, 40%);
  font-family: "Algeria";
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: stretch;
  min-height: 65vh;
  font-size: 1rem;
  padding: 0;
  @include respond-large {
    grid-template-columns: 1fr 1fr;
  }
  height: fit-content;
}
.header {
    background-color: lighten($blueberry, 42%);
    background-image: url("/src/assets/images/houses.png");
    background-repeat: repeat-x;
    background-position: bottom;
    font-family: "Algeria";
    font-weight: 500;
    min-height: 35vh;
    padding: 0;
    @include respond-medium {
        padding: 2% 0 7% 2%;
    }
  }
  .footer {
    background-color: lighten($blueberry, 40%);
    color: $dark-blue;
    font-family: "Algeria";
    font-size: 1.1rem;
}
</style>