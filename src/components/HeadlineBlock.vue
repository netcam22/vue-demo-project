<script setup>
defineProps({
  section: {
    type: Object,
    required: true
  },
  heading: {
    type: Object,
    required: true
  },
  paragraph: {
    type: Object,
    required: true
  },
  button: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section :class="section.class" :aria-labelledby="section.aria">
    <h1 :class="heading.class" :id="section.aria">{{heading.text}}</h1>
      <p v-if="paragraph.text !=='' " :class="paragraph.class">
        {{paragraph.text}}
      </p>
      <button v-if="button.text !=='' " :class="button.class">
        {{button.text}}
      </button>
      <slot></slot>
  </section>
</template>

<style lang="scss" scoped>

.headline {
  margin: 0;
  text-align: center;
  flex-basis: 100%;
  background-position: center;
  padding: 2% 6%;

  @include respond-medium {
    text-align: left;
  }

  &--thirty {
    min-height: 30vh;
  }

  &--fifty {
    min-height: 50vh;
  }

  &--blue {
    background-color: lighten($blueberry, 20%);
    color: $dark-blue;
  }

  &--half {
    @include respond-medium {
    flex-basis: 50%;
    text-align: left;
    }
  }

  &__heading {
  text-align: center;
  font-size: 1.7rem;

    &--box {
    margin: 3% 0 2% 0;
    padding: 0;
    width:fit-content;
    text-align: center;
      @include respond-medium {
        text-align: left;
      }
    }

    &--hero {
      background-color: $blueberry;
      color: $coconut;
      font-size: 3rem;
      font-weight: 600;
      margin: 3% 0;
      padding: 1% 2%;
      width: 100%;
      @include respond-medium {
          width:fit-content;
      }
    }
  }

  &__text {
    width: 100%;
    font-size: 1.3rem;

    &--box {
      margin: 1% 0;
      padding: 0;
    }

    &--hero {
      color: $blueberry;
      background-color: $coconut;
      font-size: 1.4rem;
      font-weight: 600;
      margin: 2% 0;
      padding: 1% 2%;

        @include respond-medium {
          width: 50%;
        }
    }
  }

  &__button {
    cursor: pointer;
    font-size: 1rem;
    padding: 1.5%;
    font-weight: 600;
    cursor: pointer;
    width: fit-content;
    border-radius: 80px;

    &--box {
      margin: 1% 0 3% 0;
      background-color: transparent;
      border: $blueberry solid 2px;
      color: $coconut;

      &:hover {
        background-color: $coconut;
        color: $blueberry;
      }
    }

    &--hero {
      margin: 0 0 3% 0;
      background-color: $coconut;
      border: $coconut solid 1px;
      color: $cherry; 
      @include respond-medium {
        padding: 1%;
      }

      &:hover {
        background-color: $cherry;
        color: $coconut;
        border-color: $cherry;
      }
    }
  }
}
</style>