<script setup>
//import { toRefs } from 'vue';
const props = defineProps({
    name: {
    type: String,
    required: true
    },
    title: {
    type: String,
    required: true
    },
    menuStyle: {
    type: String,
    required: true
    }
})
const menuItemClass = `navbar__item navbar__item--style ${props.menuStyle}`;
</script>

<template>
<li :class = "menuItemClass" ><RouterLink :to="{name: name}">{{title}}</RouterLink></li>
</template>

<style lang="scss" scoped>

.navbar {

&__item {
    margin: 0;
    padding: 4%;
    font-size: 1.5rem;
    transition: background-color 0.3s ease;

    @include respond-medium {
        font-size: 1.2rem;
        padding: 0;
        background-color: transparent;
    }
    @include respond-large {
        font-size: 1.9rem;
    }

    &:first-child {
        padding-top: 1rem;
    }

    &:last-child {
        padding-bottom: 1rem;
    }

    & a {
        text-decoration: none;
        word-break: keep-all;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    &:hover {
        @include respond-medium {
        background-color: transparent;
        }
    }

    &--style {
        padding: 0.5rem 2rem 0.5rem 2rem;
        @include respond-medium {
        border-bottom: none;
        background-color: transparent;
        padding: 0.5rem 2rem 0.5rem 2rem;
        }

        &:last-child:hover {
            border-bottom-right-radius: 20px;
        }

        & a {
                font-size: 1.6rem;
                line-height: 3rem;
            @include respond-small {
                font-size: 2rem;
            }
            @include respond-medium {
                font-size: 1.2rem;
            }
            @include respond-large {
                font-size: 1.6rem;
            }
        }

        & a:hover {
            color: $dark-blue;
        }

        & a:active {
            color: $dark-blue;
        }

        @include respond-medium {
            &:last-child {
                padding-bottom: 0.5rem;
            }

            &:hover {
                background-color: transparent;
                }

            & a:hover {
                color: $cherry;
            }
        }
    }
    &--marsrover {
        & a {
            color: darken($cherry, 10%);
            @include respond-medium {
                color: lighten($lemon, 10%);
            }
        }
    }
    &--fakelandia {
        & a {
            color: darken($cherry, 10%);
            @include respond-medium {
                color: $dark-blue;
            }
        }
    }
    &--home {
        & a {
            color: $dark-grey-blue;
            @include respond-medium {
                color: $dark-strong-blue;
            }
        }
    }
}
}
</style>