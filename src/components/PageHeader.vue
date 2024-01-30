<script setup>
import NavMenu from './NavMenu.vue';
import ImageElement from './ImageElement.vue';
import {HEADER_SETTINGS} from './../data/headerSettings';
/*
import { useViewSettingsStore } from "@/stores/viewSettings";
import { appStore } from "../store";
import { computed} from 'vue';
const store = useViewSettingsStore(appStore);
const imageUrls = store.getImageSources;
const menuStyles = store.getMenuStyles;
*/
const props = defineProps({
    view: {
    type: String,
    required: true
    }
})
const {imageSource, menuStyle, mobileBackground} = HEADER_SETTINGS[props.view];
/*
const dynamicImageSource = computed(() =>
    imageUrls[props.view]
);
const dynamicMenuStyle = computed(() =>
    menuStyles[props.view]
);
*/
</script>

<template>
    <header class = "header header--fakelandia">
        <ImageElement v-if="imageSource" :imageSource="imageSource"/>
        <NavMenu :menuStyle = "menuStyle" :mobileBackground = "mobileBackground"/>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
	flex-direction: row;
	align-items: flex-start;
    align-content: flex-start;
	justify-content: flex-end;
    gap: 40vw;
	flex-wrap: wrap;
    box-sizing: border-box;
    min-height: 30vh;
    @include respond-medium {
        flex-direction: row;
        justify-content: center;
        gap: 0;
        align-items: center;
    }
}
</style>
