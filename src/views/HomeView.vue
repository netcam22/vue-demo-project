<script setup>
import PageHeader from '@/components/PageHeader.vue';
const view = "home";
</script>

<template>
  <PageHeader :view = "view" />
  <main class = "main-content">
    Home content goes here
  </main>
</template>

<style scoped>
.header {
    font-family: Lucida Calligraphy;
    font-weight: 500;
    padding: 0;
    @include respond-medium {
        padding: 2% 0 7% 2%;
    }
  }
</style>