import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/TodoList.vue";

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/todolist",
  },
  {
    path: "/todolist",
    name: "todolist",
    component: HomeView,
  },
  {
    path: "/management",
    name: "management",
    component: () => import("@/views/ManagementPage"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
