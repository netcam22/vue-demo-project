<script setup>
defineProps({
    name: {
    type: String,
    required: true
    }
})
</script>

<template>
    <footer className = "footer">
        <p>@ Annette Le Sage 2024</p>
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