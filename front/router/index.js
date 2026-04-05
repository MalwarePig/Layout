import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("../src/components/Pages/Login/Login.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../src/components/Layout/CrmLayout.vue"),
    },
  ],
});

export default router;
