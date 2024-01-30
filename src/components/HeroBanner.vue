<script setup>
import {useHeroBannerStore} from '@/stores/heroBanner';
import { appStore } from '../store.js';
const store = useHeroBannerStore(appStore);
import HeadlineBlock from './HeadlineBlock.vue';
</script>

<template>
<HeadlineBlock
    :section="store.getSection"
    :heading="store.getHeading"
    :paragraph="store.getParagraph"
    :button="store.getButton"
/>
</template>

<style  lang="scss" scoped>
</style>