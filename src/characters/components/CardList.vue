<script setup lang="ts">
import { useCharacters } from "@/characters/composables/useCharacters";
const { characters, isLoading, hasError, errorMessage } = useCharacters();
</script>

<template>
  <h3 v-if="isLoading">Loading...</h3>
  <h3 v-if="hasError">{{ errorMessage }}</h3>
  <ul>
    <li v-for="char in characters" :key="`character-${char.char_id}`">
      {{ char.name }}
    </li>
  </ul>
</template>

<style scoped></style>
