<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

import breakingBadApi from "@/api/breakingBadApi";
import type { Character } from "@/characters/types/character";
import CharacterCard from "@/characters/components/CharacterCard.vue";

const getCharactersSlow = async (): Promise<Character[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const { data } = await breakingBadApi.get<Character[]>("/characters");
      resolve(data.filter((item) => ![14, 17, 39].includes(item.char_id)));
    }, 100);
  });
};

const { isLoading, data: characters } = useQuery(
  ["characters"],
  getCharactersSlow,
  {
    cacheTime: 60 * 1000,
    refetchOnReconnect: "always",
  }
);
</script>

<template>
  <h3 v-if="isLoading">Loading...</h3>
  <div class="card-list">
    <character-card
      v-for="char in characters"
      :key="`character-${char.char_id}`"
      :character="char"
    />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
