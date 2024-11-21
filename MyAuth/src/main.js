import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Authorization from "./components/Authorization.vue";
import CountriesPage from "./components/CountriesPage.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: CountriesPage,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
