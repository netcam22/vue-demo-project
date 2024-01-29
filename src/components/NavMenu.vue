<script setup>
defineProps({
    menuStyle: {
    type: String,
    required: true
    }
})
import NavItem from "./NavItem.vue";
import { useNavItemsStore } from "@/stores/navItems";
import { appStore } from "../store.js";
const store = useNavItemsStore(appStore);
</script>

<template>
  <nav className="navbar navbar--style">
    <div className="navbar__element">
      <input
        aria-labelledby="toggle"
        className="navbar__checkbox"
        type="checkbox"
      />
      <span id="toggle" className="navbar__sr-only">Toggle mobile menu</span>
      <span className="navbar__burger navbar__burger--color"></span>
      <span className="navbar__burger navbar__burger--color"></span>
      <span className="navbar__burger navbar__burger--color"></span>
      <ul className="navbar__list navbar__list--style navbar__list--transition">
        <NavItem
          v-for="item in store.getMenu"
          :key="item.id"
          :name="item.name"
          :title="item.title"
          :menuStyle="menuStyle"
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
    flex-basis: 50%;
  }

  @include respond-large {
    flex-basis: 75%;
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
    margin: 0;
    top: 0;
    left: -100vw;
    z-index: 0;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    width: 100vw;
    transform: translate(-100vw, 0);
    transition: none;

    @include respond-medium {
      background-color: transparent;
      width: 80vw;
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
      width: 70vw;
    }

    &--transition {
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    &--style {
      background-color: $lemon;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      box-shadow: $box-shadow;

      @include respond-medium {
        background-color: transparent;
        border: none;
        line-height: 3rem;
        box-shadow: none;
      }
    }
  }

  &__element {
    display: block;
    position: relative;
    z-index: 1;
    margin: 0;
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
