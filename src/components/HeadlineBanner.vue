<script setup>
import { useHeadlineBannerStore } from '@/stores/headlineBanner';
import { appStore } from '../store.js';
const store = useHeadlineBannerStore(appStore);
import HeadlineBlock from './HeadlineBlock.vue';
</script>

<template>
<div :class = "store.getImage.class"></div>
<HeadlineBlock
    :section="store.getSection"
    :heading="store.getHeading"
    :paragraph="store.getParagraph"
    :button="store.getButton"
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

    &--headline-image {
    background-image: url("./../assets/images/houses.png");
    background-repeat: no-repeat;
    background-size: contain;
    }
    &--thirty {
        min-height: 30vh;
    }
}


</style>