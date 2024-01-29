<script setup>
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
</script>

<template>
<img class = "logo" :src="dynamicImageSource" alt="My Logo">
</template>

<style lang="scss" scoped>
.logo {
        width: $logo-width-mobile;
        flex-basis: $logo-width-mobile;
        margin: 0 0 10% 0;
        z-index: 1;
        
        @include respond-medium {
            max-width: $logo-width-tablet;
            flex-basis: $logo-width-tablet;
            margin: 0;
        }

        @include respond-large {
            max-width: $logo-width-desktop;
            flex-basis: $logo-width-desktop;
        }
    }

</style>