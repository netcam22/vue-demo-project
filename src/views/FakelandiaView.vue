<script setup>
import PageHeader from '@/components/PageHeader.vue';
import PieChart from '@/components/PieChart.vue';
const view = "fakelandia";
</script>

<template>
  <PageHeader :view = "view" />
  <main class = "main-content main-content__fakelandia">  
Fakelandia content goes here
<PieChart/>
  </main>
</template>

<style lang="scss" >
.main-content--fakelandia {
  font-family: 'Courier New', Courier, monospace;
}
</style>