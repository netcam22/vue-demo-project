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
  <section class = "headline" :class="section.class" :aria-labelledby="section.aria">
    <h1 class = "headline__heading" :class="heading.class" :id="section.aria">{{heading.text}}</h1>
      <p v-if="paragraph.text !=='' " :class="paragraph.class">
        {{paragraph.text}}
      </p>
      <a v-if="button.link !=='' " target = "_blank" :href="button.link">
      <button v-if="button.text !=='' " class = "headline__button" :class="button.class">
        {{button.text}}
      </button>
    </a>
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
  text-align: left;

  &--hero {
      background-color: $blueberry;
      background-image: url("/src/assets/images/webDevBackground.jpg");
      background-size: cover;
      text-align: center;
  }

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
    background-color: lighten($blueberry, 40%);
    color: $dark-blue;
    text-align: center;
  }

  &--lime {
    background-color: lighten($lime, 35%);
    color: $dark-blue;
    text-align: center;
  }

  &--yellow {
    background-color: lighten($lemon, 40%);
    color: $dark-blue;
    text-align: center;
  }

  &--half {
    @include respond-medium {
    flex-basis: 50%;
    }
  }

  &__heading {
  text-align: center;
  font-size: 1.7rem;

    &--box {
    margin: 3% 0 2% 0;
    padding: 0;
    text-align: center;
    }

    &--hero {
      background-color: darken($blueberry, 10%);
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
      background-color: darken($blueberry, 10%);
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
      background-color: darken($blueberry, 20%);
      border: darken($blueberry, 20%) solid 2px;
      color: $coconut;
      box-shadow: $box-shadow;

      &:hover {
        background-color: $coconut;
        color: darken($blueberry, 20%);
        transition: all 0.3s ease;
      }
    }

      &--hero {
      margin: 0 0 3% 0;
      background-color: $coconut;
      border: $coconut solid 1px;
      color: darken($cherry, 20%);
      @include respond-medium {
        padding: 1%;
      }

      &:hover {
      background-color: darken($cherry, 15%);
      color: $coconut;
      border-color: darken($cherry, 15%);
      transition: all 0.3s ease;
      }
    }
  }
}
</style>