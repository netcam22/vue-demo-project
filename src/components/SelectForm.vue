<script setup>
import SelectInput from './SelectInput.vue';
import { SELECT_DATA } from '@/data/selectBoxData';
const props = defineProps({
    view: {
    type: String,
    required: true
    }
})
const {formColor, formId, selectBoxes, buttonColor, buttonText} = SELECT_DATA[props.view].selectFormData;
</script>

<template>
          <form class="select-box__form" :class="`select-box__form--${formColor}`" :id="formId">
            <SelectInput
            v-for="(item) in selectBoxes"
              :key="item.id"
              :label="item.label"
              :selectId="item.selectId" 
              :options="item.options"
          />
            <button class="select-box__button" :class="`select-box__button--${buttonColor}`" type="button">{{ buttonText }}</button>
          </form>
</template>

<style lang="scss" scoped>

.select-box {

  &__form {
    padding: 1%;
    margin: 0;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    flex-direction: column;
    align-items: center;
    align-content: center;
    box-shadow: $box-shadow;
  }

  &__form--blue {
    background-color: lighten($blueberry, 40%);
    color: $dark-blue;
  }

  &__button {
    margin: 2% 1%;
    padding: 2%;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    width: fit-content;

    @include respond-medium {
      margin: 1%;
      padding: 1%;
      font-size: 1rem;
    }

    &--red {
    background-color: darken($cherry, 10%);
    color: $coconut;
    border: $cherry solid 1px;
    }

    &--red:hover {
    background-color: $coconut;
    color: $cherry;
    }
  }
}
</style>