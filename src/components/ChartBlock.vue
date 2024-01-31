<script setup>
import { useHeadlineBannerStore } from '@/stores/headlineBanner';
import { appStore } from '../store.js';
const store = useHeadlineBannerStore(appStore);
import HeadlineBlock from './HeadlineBlock.vue';
</script>

<template>
<HeadlineBlock
    :section="store.getSection"
    :heading="store.getHeading"
    :paragraph="store.getParagraph"
    :button="store.getButton"
/>
<div class = "chart-box">
    <slot></slot>
</div>
</template>