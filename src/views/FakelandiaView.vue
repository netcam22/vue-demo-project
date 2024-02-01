<script setup>
import PageHeader from '@/components/PageHeader.vue';
import DataChart from '@/components/DataChart.vue';
const view = "fakelandia";
</script>
<template>
  <PageHeader :view = "view"/>
  <main class = "main-content main-content--fakelandia">
    <slot-chart-block :view = "view">
      <DataChart :view = "view"/>
    </slot-chart-block>
  </main>
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
</style>