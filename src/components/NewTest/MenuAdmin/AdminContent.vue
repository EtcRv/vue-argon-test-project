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
          <base-button type="primary" size="sm">案件名順</base-button>
          <base-button type="primary" size="sm">クライアント名順</base-button>
          <base-button type="primary" size="sm">ステータス名順</base-button>
          <base-button type="primary" size="sm">納期早い順</base-button>
          <base-button type="primary" size="sm">納期遅い順</base-button>
        </div>
        <base-table thead-classes="thead-light" :data="adminContentsDataShow">
          <template v-slot:columns>
            <th>案件名</th>
            <th>クライアント名</th>
            <th>ステータス</th>
            <th>開始日</th>
            <th>納期</th>
            <th>備考</th>
          </template>

          <template v-slot:default="adminContentsDataShow">
            <th scope="row">
              {{ adminContentsDataShow.item.prjname }}
            </th>
            <td>
              {{ adminContentsDataShow.item.customer }}
            </td>
            <td>
              {{ adminContentsDataShow.item.status }}
            </td>
            <td>
              {{ adminContentsDataShow.item.dayStart }}
            </td>
            <td>
              {{ adminContentsDataShow.item.dayLimited }}
            </td>
            <td>
              {{ adminContentsDataShow.item.comment }}
            </td>
          </template>
        </base-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin content",
  props: ["adminContentsDataShow"],
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
