<script setup>
import NavMenu from './NavMenu.vue';
import ImageElement from './ImageElement.vue';
//import { toRefs } from 'vue';
import { useViewSettingsStore } from "@/stores/viewSettings";
import { appStore } from "../store";
import { computed} from 'vue';
const store = useViewSettingsStore(appStore);
const imageUrls = store.getImageSources;
const props = defineProps({
    view: {
    type: String,
    required: true
    }
})
const dynamicImageSource = computed(() =>
    imageUrls[props.view]
);
//const { view } = toRefs(props);
</script>

<template>
    <header class = "header">
        <ImageElement v-if="dynamicImageSource" :imageSource="dynamicImageSource"/>
        <NavMenu />
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
	padding: 3% 0 0 0;
    box-sizing: border-box;
    min-height: 30vh;

    @include respond-medium {
        flex-direction: row;
        justify-content: center;
        gap: 0;
        align-items: center;
        padding: 2% 0 8% 2%;
    }
}
</style>
