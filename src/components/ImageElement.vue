<script>
import { useViewSettingsStore } from "@/stores/viewSettings";
import { appStore } from "../store";
import { ref } from 'vue';
const store = useViewSettingsStore(appStore);
const imageUrls = store.getImageSources;
export default {
    props: {view: String},
    data(props) {
        return {
            imageSources: imageUrls,
            currentImageIndex: ref(props.view),
        };
    },
    computed: {
            dynamicImageSource() {
                return this.imageSources[this.currentImageIndex];
            }
        }
}
</script>

<template>
<img class = "logo" :src="`/src/assets/${dynamicImageSource}`" alt="My Logo">
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