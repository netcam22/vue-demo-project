<script setup>
import SelectOption from './SelectOption.vue';
import {useDataTallyStore} from '@/stores/dataTally';
import { appStore } from '../store.js';
import { ref } from 'vue';

const chartDataStore = useDataTallyStore(appStore);

defineProps({
    label: {
    type: String,
    required: true
    },
    selectId: {
    type: String,
    required: true
    },
    options: {
    type: Array,
    required: true
    }
})

const selected = ref();

function handleOptionChange(event) {
    chartDataStore.markSelected(event.target.id, selected.value);
}
</script>

<template>
    <label class="select-box__label" :for="selectId">{{ label }}</label>

        <select class="select-box__input" :id="selectId" v-model="selected" 
        v-on:change="handleOptionChange">
            <SelectOption
            v-for="(option) in options"
            :key="option.value"
            :value="option.value"
            :text="option.text"
            />
    </select>
</template>

<style lang="scss" scoped>

.select-box {
    &__label {
    background-color: transparent;
    padding: 0.2%;
    margin: 0.2%;
    }
    &__input {
    background-color: white;
    color: $dark-blue;
    padding: 0.2%;
    margin: 0.2%;
    width: auto;
    font-size: 1.2rem;
    }
}
</style>