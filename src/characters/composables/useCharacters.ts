import { onMounted, ref } from "vue";
import { isAxiosError } from "axios";

import breakingBadApi from "@/api/breakingBadApi";
import type { Character } from "@/characters/types/character";

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(true);
const errorMessage = ref<string>();

export const useCharacters = () => {
  onMounted(async () => await loadCharacters());

  const loadCharacters = async () => {
    if (characters.value.length > 0) return;
    isLoading.value = true;
    hasError.value = false;
    errorMessage.value = "";
    try {
      const { data } = await breakingBadApi.get<Character[]>("/characters");
      characters.value = data;
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
      hasError.value = true;
      if (isAxiosError(error)) {
        errorMessage.value = error.message;
        return;
      }
      errorMessage.value = "Houston, we got a problem!";
    }
  };
  return {
    characters,
    isLoading,
    hasError,
    errorMessage,
  };
};
