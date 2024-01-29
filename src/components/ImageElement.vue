<script setup>
defineProps({
    imageSource: {
    type: Image,
    required: true
    }
})
</script>

<template>
<img class = "logo" :src="imageSource" alt="My Logo">
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