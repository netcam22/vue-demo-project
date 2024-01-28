<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style scoped>
.mode-button {
  flex-basis: 22%;
  padding: 0.5%;
  margin: 1% 1% 0 0;
  width: fit-content;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
}

.mode-button--white {
  background-color: var(--white);
  color: var(--red-purple);
  border: var(--dark) solid 1px;
}

.mode-button--red:hover {
  background-color: var(--mid-blue);
  color: var(--white);
  border: var(--mid-blue) solid 1px;
}

.mode-button--red {
  background-color: var(--red-purple);
  color: var(--white);
  border: var(--red-purple) solid 1px;
}

.mode-button--white:hover {
  background-color: var(--white);
  color: var(--mid-blue);
  border: var(--dark) solid 1px;
}

@media (min-width: 768px) {
  .mode-button {
    flex-basis: 10%;
    margin: 0.5% 0.5% 0 0;
    font-size: 1.1rem;
  } 
}

</style>
