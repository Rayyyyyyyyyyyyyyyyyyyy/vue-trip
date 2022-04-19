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
    path: "/trip-list",
    name: RouterNames.tripList,
    component: () => import("@/views/trip/TripList.vue")
  },
  {
    path: "/trip-list/:id",
    name: RouterNames.tripPage,
    props: true,
    component: () => import("@/views/trip/TripPage.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: RouterNames.page404,
    component: () => import("@/views/NotFound.vue")
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
