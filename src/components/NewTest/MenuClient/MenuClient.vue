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
              @click="selectedContent(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </side-bar>
      <!-- End Side Bar -->

      <!-- Main content -->
      <div class="main-content">
        <client-content
          :clientContentsDataShow="clientContentsDataShow"
        ></client-content>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../../SidebarPlugin/SideBar.vue";
import ClientContent from "./ClientContent.vue";
export default {
  components: { SideBar, ClientContent },
  name: "Menu Client",
  data() {
    return {
      navbarUserContents: [
        {
          id: 1,
          header: "案件管理",
          items: ["現在の案件", "案件検索"],
        },
      ],
      clientContentsDatas: {
        現在の案件: [
          {
            prjname: "AAシステム",
            customer: "青木太郎様",
            status: "要件定義中",
            dayStart: "2021年7月1日",
            dayLimited: "2021年8月10日",
            comment: "大口クライアント",
          },
          {
            prjname: "BBシステム",
            customer: "山田花子様",
            status: "見積もり中",
            dayStart: "2021年6月1日",
            dayLimited: "2021年9月10日",
            comment: "",
          },
        ],
        案件検索: [
          {
            prjname: "CCシステム",
            customer: "林太郎様",
            status: "スケジュール調整中",
            dayStart: "2021年7月11日",
            dayLimited: "2021年9月12日",
            comment: "",
          },
          {
            prjname: "DDシステム",
            customer: "株式会社AA様",
            status: "開発中",
            dayStart: "2021年8月2日",
            dayLimited: "2021年10月10日",
            comment: "",
          },
        ],
      },
      clientContentsDataShow: {},
    };
  },
  methods: {
    selectedContent(item) {
      this.clientContentsDataShow = this.clientContentsDatas[item];
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

.main-content {
  background-color: rgba(30, 161, 123, 1);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
