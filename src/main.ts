import { createApp } from "vue";
import App from "@/App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

import router from "@/router/index";

import "./assets/main.css";

createApp(App).use(VueQueryPlugin).use(router).mount("#app");
