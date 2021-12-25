<template>
  <div class="menu_user">
    <div class="wrapper">
      <side-bar
        :background-color="sidebarBackground"
        short-title="User Page"
        title="User Page"
      >
        <div>
          <h6 class="navbar-heading">ログイン名：青木</h6>
          <base-button :text="ログアウト" size="lg" type="success">
            ログアウト
          </base-button>
        </div>
        <div
          class="navbar-content"
          v-for="navbarUserContent in navbarUserContents"
          :key="navbarUserContent.id"
        >
          <hr class="my-3" />
          <h6 class="navbar-heading">{{ navbarUserContent.header }}</h6>
          <ul class="navbar-nav">
            <li
              v-for="item in navbarUserContent.items"
              :key="item"
              class="navbar-nav-item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </side-bar>
      <!-- End Side Bar -->

      <!-- Main content -->
      <div class="main-content">
        <user-content></user-content>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../../SidebarPlugin/SideBar.vue";
import UserContent from "./UserContent.vue";
export default {
  components: { SideBar, UserContent },
  name: "Menu User",
  data() {
    return {
      navbarUserContents: [
        {
          id: 1,
          header: "案件管理",
          items: ["現在の案件", "案件検索", "案件登録"],
        },
        {
          id: 2,
          header: "各種設定",
          items: [
            "マイページ",
            "クライアント検索",
            "クライアント登録",
            "お問い合わせ",
          ],
        },
      ],
    };
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

.main-content {
  background-color: rgba(30, 161, 123, 1);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
