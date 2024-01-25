<script setup>
import Button from "primevue/button";
import { usePrimeVue } from "primevue/config";
const PrimeVue = usePrimeVue();
import { ref } from "vue";
const currentTheme = ref("lara-light-green");
const toggleTheme = () => {
  console.log("click");
  let nextTheme =
    currentTheme.value === "lara-light-green"
      ? "lara-dark-green"
      : "lara-light-green";
  PrimeVue.changeTheme(currentTheme.value, nextTheme, "theme-link", () => {});
  currentTheme.value = nextTheme;
};
</script>

<template>
  <h1>test</h1>
  <Button @click="toggleTheme" label="switch" />
</template>

<style scoped></style>
