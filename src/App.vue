<script setup lang="ts">
import { RouterView } from "vue-router";

import NavBar from "@/shared/components/NavBar.vue";
import type { RouterLink } from "@/shared/types/RouterLink";

const links: RouterLink[] = [
  { path: "/", name: "home", title: "Home" },
  { path: "/about", name: "about", title: "About" },
  { path: "/characters", name: "characters", title: "Characters" },
];
</script>

<template>
  <div class="wrapper">
    <header>
      <NavBar title="Breaking Bad" :links="links" />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
