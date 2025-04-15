import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Family from "@/views/Family.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/family",
    name: "Family",
    component: Family,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
