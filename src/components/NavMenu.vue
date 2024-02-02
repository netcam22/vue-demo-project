<script setup>
import { useNavItemsStore } from "@/stores/navItems";
import { appStore } from "../store.js";
const store = useNavItemsStore(appStore);
import NavItem from "./NavItem.vue";

defineProps({
  navTextColor: {
    type: String,
    required: true
    },
    mobileBackground: {
    type: String,
    required: true
    }
})
</script>

<template>
  <nav class="navbar navbar--style">
    <div class="navbar__element">
      <input
        aria-labelledby="toggle"
        class="navbar__checkbox"
        type="checkbox"
      />
      <span id="toggle" class="navbar__sr-only">Toggle mobile menu</span>
      <span class="navbar__burger navbar__burger--color"></span>
      <span class="navbar__burger navbar__burger--color"></span>
      <span class="navbar__burger navbar__burger--color"></span>
      <ul class="navbar__list navbar__list--style navbar__list--transition"
      :class="`navbar__list--${mobileBackground}`">
        <NavItem
          v-for="item in store.getMenu"
          :key="item.id"
          :name="item.name"
          :title="item.title"
          :navTextColor="navTextColor"
        />
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">

.navbar {
  position: sticky;
  margin: 0;
  padding: 0;
  z-index: 1000;
  max-height: fit-content;
  flex-basis: 1fr;
  box-sizing: border-box;
  align-self: flex-start;

  &::before,
  &::after {
    box-sizing: border-box;
    margin: 0;
  }

  @include respond-medium {
    flex-basis: 70vw;
  }

  @include respond-large {
    flex-basis: 70vw;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
    flex-direction: column;
    position: absolute;
    margin: 0 auto;
    top: 0;
    left: -100vw;
    z-index: 0;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    width: 110vw;
    transform: translate(-100vw, 0);
    transition: none;

    @include respond-medium {
      background-color: transparent;
      width: 80vw;
      margin: 0 0 0 -5vw;
      left: 0;
      padding: 0;
      position: relative;
      flex-wrap: wrap;
      align-content: center;
      transform: none;
      transition: none;
      flex-direction: row;
      align-items: baseline;
      justify-content: center;
    }

    @include respond-large {
      flex-wrap: nowrap;
      width: 80vw;
    }

    &--transition {
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    &--style {
      border-bottom-right-radius: 20px;
      box-shadow: $box-shadow;

      @include respond-medium {
        border: none;
        line-height: 3rem;
        box-shadow: none;
      }
    }

    &--lemon {
      background-color: $lemon;
      @include respond-medium {
        background-color: transparent;
      }
    }
    &--violet {
      background-color: $violet;
      @include respond-medium {
        background-color: transparent;
      }
    }
    &--light-blue {
      background-color: lighten($blueberry, 30%);
      @include respond-medium {
        background-color: transparent;
      }
    }
  }

  &__element {
    display: block;
    position: relative;
    z-index: 1;
    margin: 0;
    width: 10vw;
    padding: 1rem 0;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @include respond-medium {
      position: sticky;
      padding: 0;
    }
  }

  &__burger {
    display: block;
    width: 33px;
    height: 4px;
    margin-right: 2rem;
    margin-bottom: 5px;
    position: relative;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition:
      transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;

    @include respond-medium {
      display: none;
    }

    &:first-child {
      transform-origin: 0% 0%;
    }

    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    &--color {
      background: darken($olive, 10%);
    }
  }

  &__checkbox {
    display: block;
    width: 3rem;
    height: 2.5rem;
    position: absolute;
    top: 0;
    left: -1rem;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
    @include respond-medium {
      display: none;
    }

    &:checked ~ .navbar__burger {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
    }

    &:checked ~ .navbar__burger:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    &:checked ~ .navbar__burger:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -1px);
    }

    &:checked ~ .navbar__list{
        transform: none;
    }
    &:not(:checked) ~ .navbar__list--transition {
        transition: none;
    }

  }

  &__sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }
}
</style>
