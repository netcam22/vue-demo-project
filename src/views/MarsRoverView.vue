<script setup>
import PageHeader from '@/components/PageHeader.vue';
import DataChart from '@/components/DataChart.vue';
const view = "marsrover";
</script>

<template>
  <PageHeader :view = "view"/>
  <main class = "main-content main-content--marsrover">  
    <DataChart :view = "view"/>
  </main>
</template>

<style lang="scss" scoped>
.main-content {
  background-color: lighten(#efb948, 35%);
  min-height: 70vh;
}
.header {
    background-image: url("/src/assets/images/space.png");
    background-repeat: repeat-x;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    min-height: 30vh;
    padding: 0;
    @include respond-medium {
        padding: 2% 0 2% 2%;
    }
}
</style>