import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SimpleLayout from "@/components/layouts/SimpleLayout.vue";
import SignupPage from "@/pages/SignupPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    // ignore this if DefaultLayout is used
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: {
      layout: SimpleLayout,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
    meta: {
      layout: SimpleLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
