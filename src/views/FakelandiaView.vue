<script setup>
import PageHeader from '@/components/PageHeader.vue';
import DataChart from '@/components/DataChart.vue';
const view = "fakelandia";
</script>
<template>
  <PageHeader :view = "view"/>
  <main class = "main-content main-content--fakelandia">  
<DataChart :view = "view"/>
  </main>
</template>

<style lang="scss" scoped >

.main-content {
  background-color: lighten($lemon, 40%);
  font-family: "Algeria";
}
.header {
    background-color: lighten($blueberry, 42%);
    background-image: url("/src/assets/images/houses.png");
    background-repeat: repeat-x;
    background-position: bottom;
    font-family: "Algeria";
    font-weight: 500;
    padding: 0;
    @include respond-medium {
        padding: 2% 0 7% 2%;
    }
  }
</style>