<script setup lang="ts">
import { ref } from "vue";

import breakingBadApi from "@/api/breakingBadApi";
import type { Character } from "@/characters/types/character";

const { data } = await breakingBadApi.get<Character[]>("/characters");
let characters = ref<Character[]>(data);
// breakingBadApi
//   .get<Character[]>("/characters")
//   .then((rs) => (characters.value = rs.data));
</script>

<template>
  <ul>
    <li v-for="char in characters" :key="`character-${char.char_id}`">
      {{ char.name }}
    </li>
  </ul>
</template>

<style scoped></style>
