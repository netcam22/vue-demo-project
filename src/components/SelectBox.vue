<script setup>
import { SELECT_DATA } from '@/data/selectBoxData';
import SelectForm from './SelectForm.vue';

const props = defineProps({
    view: {
        type: String,
        required: true
    },
    handleOptionSubmit: {
        type: Function,
        required: true
    }
})
const {ariaLabel, heading, text} = SELECT_DATA[props.view].selectBoxData;
</script>

<template>
<section class = "select-box" :aria-labelledby="ariaLabel">

        <h1 class = "select-box__heading" :id="ariaLabel">{{heading}}</h1>
        <p class = "select-box__text">
            {{text}}
        </p>

        <SelectForm :view="view" :handleOptionSubmit="handleOptionSubmit"/>

        </section>
</template>

<style lang="scss" scoped>
.select-box {
    padding: 0;
    flex-basis: 100%;
    background-color: $lemon;
    color: $dark-blue;
    padding: 4%;
    font-size: 1rem;
    border: solid 1px $lemon;
    border-radius: 10px;
    box-shadow: $box-shadow;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    &__heading {
    margin: 0.5% 0;
    padding: 0;
    font-size: 1.3rem;
    text-align: center;
    }
    
    &__text {
    margin: 1% 0;
    padding: 0;
    font-size: 1rem;
    }
}

</style>