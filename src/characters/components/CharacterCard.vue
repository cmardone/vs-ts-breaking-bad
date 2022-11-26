<script setup lang="ts">
import type { Character } from "@/characters/types/character";
const props = defineProps<{ character: Character }>();
</script>

<template>
  <div class="character-card">
    <img :src="props.character.img" :alt="props.character.name" />
    <h3>{{ props.character.name }}</h3>
  </div>
</template>

<style scoped>
.character-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

img {
  width: 150px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
}
</style>
