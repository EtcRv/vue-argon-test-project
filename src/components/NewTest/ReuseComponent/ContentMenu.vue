<template>
  <div class="admin-content-main">
    <base-nav
      class="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-warning admin-content-problem"
    >
      <template v-slot:brand>
        <p class="navbar-brand">【現在の案件】</p>
      </template>
    </base-nav>

    <div class="admin-content-button-table">
      <div class="table-responsive">
        <div class="button-sort">
          <base-button type="primary" size="sm" @click="OnClickSortProjectName"
            >案件名順</base-button
          >
          <base-button type="primary" size="sm" @click="OnClickSortCustomer"
            >クライアント名順</base-button
          >
          <base-button type="primary" size="sm" @click="OnClickSortStatus"
            >ステータス名順</base-button
          >
          <base-button type="primary" size="sm" @click="OnClickSortDayStart"
            >納期早い順</base-button
          >
          <base-button type="primary" size="sm" @click="OnClickSortDayEnd"
            >納期遅い順</base-button
          >
        </div>
        <base-table thead-classes="thead-light" :data="contentsDataShow">
          <template v-slot:columns>
            <th>案件名</th>
            <th>クライアント名</th>
            <th>ステータス</th>
            <th>開始日</th>
            <th>納期</th>
            <th>備考</th>
          </template>

          <template v-slot:default="contentsDataShow">
            <th scope="row">
              {{ contentsDataShow.item.prjname }}
            </th>
            <td>
              {{ contentsDataShow.item.customer }}
            </td>
            <td>
              {{ contentsDataShow.item.status }}
            </td>
            <td>
              {{ contentsDataShow.item.dayStart }}
            </td>
            <td>
              {{ contentsDataShow.item.dayLimited }}
            </td>
            <td>
              {{ contentsDataShow.item.comment }}
            </td>
          </template>
        </base-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu Content",
  props: ["contentsDataShow"],
  data() {
    return {};
  },
  methods: {
    OnClickSortProjectName() {
      this.$emit("sortByPrjName");
    },
    OnClickSortCustomer() {
      this.$emit("sortByCustomer");
    },
    OnClickSortStatus() {
      this.$emit("sortByStatus");
    },
    OnClickSortDayStart() {
      this.$emit("sortByDayStart");
    },
    OnClickSortDayEnd() {
      this.$emit("sortByDayEnd");
    },
  },
};
</script>

<style scoped>
.admin-content-main {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.admin-content-problem {
  width: 100%;
  display: flex;
  align-items: center;
}

.button-sort {
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.admin-content-button-table {
  background-color: #f6f9fc;
  width: 100%;
}

.table-responsive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
