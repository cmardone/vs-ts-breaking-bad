import type { RouteRecordRaw } from "vue-router";

import CharacterId from "@/characters/pages/CharacterId.vue";
import CharacterLayout from "@/characters/layout/CharacterLayout.vue";
import CharacterList from "@/characters/pages/CharacterList.vue";
import CharacterSearch from "@/characters/pages/CharacterSearch.vue";

export const characterRoute: RouteRecordRaw = {
  path: "/characters",
  redirect: "/characters/list",
  component: CharacterLayout,
  children: [
    {
      path: "by/id",
      name: "character-id",
      component: CharacterId,
      props: { title: "By Id", visible: false },
    },
    {
      path: "list",
      name: "character-list",
      component: CharacterList,
      props: { title: "Character List", visible: true },
    },
    {
      path: "search",
      name: "character-search",
      component: CharacterSearch,
      props: { title: "Search", visible: true },
    },
  ],
};
