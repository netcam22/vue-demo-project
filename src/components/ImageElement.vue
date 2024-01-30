<script setup>
defineProps({
    imageSource: {
    type: String,
    required: true
    }
})
</script>

<template>
<img class = "logo" :src="imageSource" alt="My Logo">
</template>

<style lang="scss" scoped>
.logo {
        height: 20vw;
        margin: 3% auto 0 auto;
        z-index: 1;
        
        @include respond-medium {
            max-width: $logo-width-tablet;
            height: auto;
            flex-basis: $logo-width-tablet;
            margin: 0;
        }

        @include respond-large {
            max-width: $logo-width-desktop;
            flex-basis: $logo-width-desktop;
        }
    }

</style>