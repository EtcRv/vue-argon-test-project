<template>
  <div class="menu_admin">
    <div class="wrapper">
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
          v-for="navbarAdminContent in navbarAdminContents"
          :key="navbarAdminContent.id"
        >
          <hr class="my-3" />
          <h6 class="navbar-heading">{{ navbarAdminContent.header }}</h6>
          <ul class="navbar-nav">
            <li
              v-for="item in navbarAdminContent.items"
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
        <admin-content
          :adminContentsDataShow="adminContentsDataShow"
        ></admin-content>
      </div>
    </div>
  </div>
</template>

<script>
import AdminContent from "./AdminContent.vue";
import SideBar from "../../SidebarPlugin/SideBar.vue";
export default {
  name: "Menu Admin",
  components: {
    AdminContent,
    SideBar,
  },
  data() {
    return {
      navbarAdminContents: [
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
        {
          id: 3,
          header: "マスタ管理",
          items: ["ユーザーマスタ", "管理マスタ", "業種マスタ", "ランクマスタ"],
        },
      ],
      adminContentsDatas: {
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
            prjname: "BBシステム",
            customer: "山田花子様",
            status: "見積もり中",
            dayStart: "2021年6月1日",
            dayLimited: "2021年9月10日",
            comment: "",
          },
        ],
        案件登録: [
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
      adminContentsDataShow: {},
    };
  },
  methods: {
    selectedContent(item) {
      this.adminContentsDataShow = this.adminContentsDatas[item];
      console.log(this.adminContentsDataShow);
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
