import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Authorization from "./components/Authorization.vue";
import ListCountries from "./components/ListCountries.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: ListCountries,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
