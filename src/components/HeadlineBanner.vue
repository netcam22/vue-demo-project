<script setup>
import { appStore } from '../store.js';
import { usePageHeadlineStore } from '@/stores/pageHeadline';
import HeadlineBlock from './HeadlineBlock.vue';
const headlineStore = usePageHeadlineStore(appStore);

defineProps({
    view: {
    type: String,
    required: true
    }
})
</script>

<template>
<div v-if="headlineStore.getDiv(view)!=='' " :class = "headlineStore.getDiv(view)"></div>
<HeadlineBlock
    :view="view"
    :section="headlineStore.getSection(view)"
    :heading="headlineStore.getHeading(view)"
    :paragraph="headlineStore.getParagraph(view)"
    :button="headlineStore.getButton(view)"
/>
</template>

<style lang="scss" scoped>
.image-box {
    flex-basis: 100%;
    background-position: center;
    margin: 0;
    padding: 2% 6%;
    text-align: center;

    @include respond-medium {
        flex-basis: 50%;
    }

    &--thirty {
        min-height: 30vh;
    }
}


</style>