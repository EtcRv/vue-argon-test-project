<template>
  <div class="wrapper">
    <NavBarMenu
      :navbarContents="navbarContents"
      @selectedContent="selectedContent"
    />
    <!-- End Side Bar -->

    <!-- Main content -->
    <div class="main-content">
      <ContentMenu
        :contentsDataShow="contentsDataShow"
        @sortByPrjName="sortByPrjName"
        @sortByCustomer="sortByCustomer"
        @sortByStatus="sortByStatus"
        @sortByDayStart="sortByDayStart"
        @sortByDayEnd="sortByDayEnd"
      ></ContentMenu>
    </div>
  </div>
</template>

<script>
import ContentMenu from "./ContentMenu.vue";
import NavBarMenu from "./NavbarMenu.vue";
export default {
  name: "Menu Screen",
  components: {
    ContentMenu,
    NavBarMenu,
  },
  props: ["navbarContents", "contentDatas"],
  data() {
    return {
      contentsDataShow: {},
    };
  },
  methods: {
    // Chọn nội dung hiển thị mà không reload lại trang
    selectedContent(item) {
      this.contentsDataShow = this.contentDatas[item];
    },

    // Sort theo tên của project
    sortByPrjName() {
      this.sortAlphabet(this.contentsDataShow, "prjname");
    },

    // Sort theo tên của customer
    sortByCustomer() {
      this.sortAlphabet(this.contentsDataShow, "customer");
    },

    // Sort theo tên của status
    sortByStatus() {
      this.sortAlphabet(this.contentsDataShow, "status");
    },

    // Sắp xếp theo ngày bắt đầu project
    sortByDayStart() {
      this.sortAlphabet(this.contentsDataShow, "dayStart");
    },

    // Sắp xếp theo ngày bắt đầu project
    sortByDayEnd() {
      this.sortAlphabet(this.contentsDataShow, "dayLimited");
    },

    // Sort theo thứ tự bảng chữ cái Alphabet
    sortAlphabet(dataSort, valueSort) {
      for (let i = 0; i < dataSort.length; i++) {
        for (let j = i + 1; j < dataSort.length; j++) {
          if (dataSort[i][valueSort] > dataSort[j][valueSort]) {
            let dataExchange = dataSort[i];
            dataSort[i] = dataSort[j];
            dataSort[j] = dataExchange;
          }
        }
      }
    },

    // Sort ngày
    sortDay(dataSort, valueSort) {
      for (let i = 0; i < dataSort.length; i++) {
        let arrayNumsOfDayStartProjectI = dataSort[i][valueSort]
          .replace("年", " ")
          .replace("月", " ")
          .replace("日", "")
          .split(" ");
        for (let j = i + 1; j < dataSort.length; j++) {
          let arrayNumsOfDayStartProjectJ = dataSort[j][valueSort]
            .replace("年", " ")
            .replace("月", " ")
            .replace("日", "")
            .split(" ");
          if (
            Number(arrayNumsOfDayStartProjectI[0]) >
            Number(arrayNumsOfDayStartProjectJ[0])
          ) {
            let dataExchange = dataSort[i];
            dataSort[i] = dataSort[j];
            dataSort[j] = dataExchange;
          } else if (
            Number(arrayNumsOfDayStartProjectI[0]) ==
            Number(arrayNumsOfDayStartProjectJ[0])
          ) {
            if (
              Number(arrayNumsOfDayStartProjectI[1]) >
              Number(arrayNumsOfDayStartProjectJ[1])
            ) {
              let dataExchange = dataSort[i];
              dataSort[i] = dataSort[j];
              dataSort[j] = dataExchange;
            } else if (
              Number(arrayNumsOfDayStartProjectI[1]) ==
              Number(arrayNumsOfDayStartProjectJ[1])
            ) {
              if (
                Number(arrayNumsOfDayStartProjectI[2]) >
                Number(arrayNumsOfDayStartProjectJ[2])
              ) {
                let dataExchange = dataSort[i];
                dataSort[i] = dataSort[j];
                dataSort[j] = dataExchange;
              }
            }
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.main-content {
  background-color: rgba(30, 161, 123, 1);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
