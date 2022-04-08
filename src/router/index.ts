import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RouterNames from "@/router/name";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouterNames.homeLayout,
    component: () => import("@/layout/HomeLayout.vue"),
    children: [
      {
        path: "",
        name: RouterNames.home,
        component: () => import("@/views/HomePage.vue"),
      },
    ]
  },
  {
    path: "/sign",
    name: RouterNames.signLayout,
    component: () => import("@/layout/SignLayout.vue"),
    children: [
      {
        path: "in",
        name: RouterNames.signIn,
        component: () => import("@/views/SignIn.vue"),
      },
      {
        path: "up",
        name: RouterNames.signUp,
        component: () => import("@/views/SignUp.vue"),
      },
      {
        path: "forgot-password",
        name: RouterNames.forgotPassword,
        component: () => import("@/views/ForgotPassword.vue"),
      },
    ]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
