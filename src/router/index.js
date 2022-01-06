import { createRouter, createWebHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";

import Dashboard from "../views/Dashboard.vue";

import RegisterScreen from "../views/RegisterScreen/RegisterScreen.vue";
import LoginScreen from "../views/LoginScreen/LoginScreen.vue";
import MenuUserPage from "../views/MenuUser/MenuUserPage.vue";
import MenuAdminPage from "../views/MenuAdmin/MenuAdminPage.vue";
import MenuClientPage from "../views/MenuClient/MenuClientPage.vue";
import SearchProblemScreen from "../views/SearchingScreen/SearchProblemScreen.vue";
import ItemsRegisterScreen from "../views/ItemsRegisterScreen/ItemsRegisterScreen.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
    ],
  },
  {
    path: "/login",
    component: LoginScreen,
  },
  {
    path: "/register",
    component: RegisterScreen,
  },

  {
    path: "/user",
    component: MenuUserPage,
  },
  {
    path: "/admin",
    component: MenuAdminPage,
  },
  {
    path: "/client",
    component: MenuClientPage,
  },
  {
    path: "/searching",
    component: SearchProblemScreen,
  },
  {
    path: "/itemsregister",
    component: ItemsRegisterScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
