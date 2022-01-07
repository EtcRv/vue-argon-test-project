<template>
  <side-bar
    :background-color="sidebarBackground"
    short-title="Admin Page"
    title="Admin Page"
  >
    <div>
      <h6 class="navbar-heading">ログイン名：青木</h6>
      <base-button
        :text="ログアウト"
        size="lg"
        type="success"
        @click="logOutOfUser"
      >
        ログアウト
      </base-button>
    </div>

    <div
      class="navbar-content"
      v-for="navbarContent in navbarContents"
      :key="navbarContent.id"
    >
      <hr class="my-3" />
      <h6 class="navbar-heading">{{ navbarContent.header }}</h6>
      <ul class="navbar-nav">
        <li
          v-for="item in navbarContent.items"
          :key="item"
          class="navbar-nav-item"
          @click="onClickSelectedContent(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </side-bar>
</template>

<script>
import SideBar from "../../SidebarPlugin/SideBar.vue";
export default {
  name: "Navbar Menu",
  components: {
    SideBar,
  },
  props: ["navbarContents"],
  methods: {
    onClickSelectedContent(item) {
      this.$emit("selectedContent", item);
    },
    logOutOfUser() {
      window.location.href = "/login";
    },
  },
};
</script>

<style scoped>
.navbar-nav-item {
  font-size: 12px;
  width: 80%;
  padding-left: 30%;
  padding-bottom: 10px;
  cursor: pointer;
}
</style>
