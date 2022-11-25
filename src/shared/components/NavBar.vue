<script setup lang="ts">
import type { RouterLink } from "@/shared/types/routerLink";

interface Props {
  title?: string;
  links?: RouterLink[];
  showIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showIcon: true,
  links: () => [],
});

// const { isActive } = useLink(props.links.map((item) => ({ to: item.path })));
/* const isActive = (itemPath: string) => {
  const { path } = useRoute();
  console.log(path, itemPath);

  return path === itemPath;
}; */
</script>

<template>
  <nav>
    <img
      v-if="props.showIcon"
      src="@/assets/logo.svg"
      alt="Vue Logo"
      height="25"
      width="25"
    />
    <span v-if="props.title">{{ props.title }}</span>

    <RouterLink
      v-for="(link, index) in props.links"
      :to="link.path"
      :key="`link-${link.name}-${index}`"
    >
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
}

img {
  margin-right: 5px;
}

span {
  margin-right: 10px;
}

a {
  margin-right: 5px;
}

.router-link-active {
  text-decoration: underline;
}

.router-link-exact-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>
