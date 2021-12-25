import { createRouter, createWebHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import Icons from "../views/Icons.vue";
import Maps from "../views/Maps.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";

import RegisterScreen from "../views/RegisterScreen/RegisterScreen.vue";
import LoginScreen from "../views/LoginScreen/LoginScreen.vue";
import MenuUserPage from "../views/MenuUser/MenuUserPage.vue";
import MenuAdminPage from "../views/MenuAdmin/MenuAdminPage.vue";
import MenuClientPage from "../views/MenuClient/MenuClientPage.vue";
import SearchProblemScreen from "../views/SearchingScreen/SearchProblemScreen.vue";
import RegisterItemsScreen from "../views/RegisterItemsScreen/RegisterItemsScreen.vue";

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
      {
        path: "/icons",
        name: "icons",
        components: { default: Icons },
      },
      {
        path: "/maps",
        name: "maps",
        components: { default: Maps },
      },
      {
        path: "/profile",
        name: "profile",
        components: { default: Profile },
      },
      {
        path: "/tables",
        name: "tables",
        components: { default: Tables },
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        components: { default: LoginScreen },
      },
    ],
  },
  {
    path: "/",
    redirect: "register",
    component: RegisterScreen,
    children: [
      {
        path: "/register",
        name: "register",
        components: { default: RegisterScreen },
      },
    ],
  },
  {
    path: "/",
    redirect: "user",
    component: MenuUserPage,
    children: [
      {
        path: "/user",
        name: "user",
        components: { default: MenuUserPage },
      },
    ],
  },
  {
    path: "/",
    redirect: "admin",
    component: MenuAdminPage,
    children: [
      {
        path: "/admin",
        name: "admin",
        components: { default: MenuAdminPage },
      },
    ],
  },
  {
    path: "/",
    redirect: "client",
    component: MenuClientPage,
    children: [
      {
        path: "/client",
        name: "client",
        components: { default: MenuClientPage },
      },
    ],
  },
  {
    path: "/",
    redirect: "searching",
    component: SearchProblemScreen,
    children: [
      {
        path: "/searching",
        name: "searching",
        components: { default: SearchProblemScreen },
      },
    ],
  },
  {
    path: "/",
    redirect: "registeritems",
    component: RegisterItemsScreen,
    children: [
      {
        path: "/registeritems",
        name: "registeritems",
        components: { default: RegisterItemsScreen },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
