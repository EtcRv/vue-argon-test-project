<template>
  <Menu
    :navbarContents="navbarAdminContents"
    :contentDatas="adminContentsDatas"
  />
</template>

<script>
import Menu from "../ReuseComponent/Menu.vue";
export default {
  name: "Menu Admin",
  components: {
    Menu,
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
            prjname: "BBシステム",
            customer: "山田花子様",
            status: "見積もり中",
            dayStart: "2021年6月1日",
            dayLimited: "2021年9月10日",
            comment: "",
          },
          {
            prjname: "AAシステム",
            customer: "青木太郎様",
            status: "要件定義中",
            dayStart: "2021年7月1日",
            dayLimited: "2021年8月10日",
            comment: "大口クライアント",
          },

          {
            prjname: "DDシステム",
            customer: "株式会社AA様",
            status: "開発中",
            dayStart: "2021年8月2日",
            dayLimited: "2021年10月10日",
            comment: "",
          },
          {
            prjname: "CCシステム",
            customer: "林太郎様",
            status: "スケジュール調整中",
            dayStart: "2021年7月11日",
            dayLimited: "2021年9月12日",
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
};
</script>

<style scoped></style>
