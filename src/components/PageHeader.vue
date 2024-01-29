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
        <ImageElement :imageSource="dynamicImageSource"/>
        <NavMenu />
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 2% 0 20% 0;
    box-sizing: border-box;
    min-height: 30vh;

    @include respond-medium {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 2% 0 8% 2%;
    }
}
</style>
