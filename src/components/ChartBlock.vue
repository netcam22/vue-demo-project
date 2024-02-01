<script setup>
import { useHeadlineBannerStore } from '@/stores/headlineBanner';
import { appStore } from '../store.js';
import SelectBox from './SelectBox.vue';
const store = useHeadlineBannerStore(appStore);

defineProps({
    view: {
    type: String,
    required: true
    }
})

</script>

<template>
<slot-headline-block
    :section="store.getSection"
    :heading="store.getHeading"
    :paragraph="store.getParagraph">

    <SelectBox :view = "view"/>
</slot-headline-block>
<div class = "chart-box">
    <slot></slot>
</div>
</template>