<script setup>
import {FOOTER_SETTINGS} from './../data/footerSettings';
const {author} = FOOTER_SETTINGS;
const date = new Date().getFullYear();
</script>

<template>
    <footer className = "footer">
        <p>{{`@ ${author} ${date}`}}</p>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    padding: 1% 2%;
    text-align: left;
    flex-shrink: 0;
    min-height: 5vh;
    font-weight: normal;
}
</style>