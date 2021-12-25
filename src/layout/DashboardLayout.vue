<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Home Page',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard',
          }"
        />

        <sidebar-item
          :link="{
            name: 'Login',
            icon: 'ni ni-planet text-blue',
            path: '/login',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Register',
            icon: 'ni ni-pin-3 text-orange',
            path: '/register',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Menu User',
            icon: 'ni ni-single-02 text-yellow',
            path: '/user',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Menu Admin',
            icon: 'ni ni-bullet-list-67 text-red',
            path: '/admin',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Menu Client',
            icon: 'ni ni-key-25 text-info',
            path: '/client',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Searching',
            icon: 'ni ni-circle-08 text-pink',
            path: '/searching',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Register Items',
            icon: 'ni ni-circle-08 text-pink',
            path: '/registeritems',
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
