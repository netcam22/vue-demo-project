<script setup>
import { useHeadlineBannerStore } from '@/stores/headlineBanner';
import { appStore } from '../store.js';
const store = useHeadlineBannerStore(appStore);
import SelectBox from './SelectBox.vue';
</script>

<template>
<slot-headline-block
    :section="store.getSection"
    :heading="store.getHeading"
    :paragraph="store.getParagraph">
    <SelectBox/>
</slot-headline-block>
<div class = "chart-box">
    <slot></slot>
</div>
</template>