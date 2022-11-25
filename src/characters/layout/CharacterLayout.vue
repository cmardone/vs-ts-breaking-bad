<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";

import NavBar from "@/shared/components/NavBar.vue";
import { characterRoute } from "@/characters/router/index";
import type { RouterLink } from "@/shared/types/routerLink";

const links: RouterLink[] = characterRoute
  .children!.filter((item) => (item?.props as { visible: boolean }).visible)
  .map((item: RouteRecordRaw) => ({
    path: item.path,
    name: item.name as string,
    title: (item?.props as { title: string }).title,
  }));
</script>

<template>
  <div>
    <h1>Characters</h1>
    <NavBar :show-icon="false" :links="links"></NavBar>
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped></style>
