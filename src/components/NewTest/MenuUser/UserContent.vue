<template>
  <div class="user-content-main">
    <base-nav
      class="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-warning user-content-problem"
    >
      <template v-slot:brand>
        <p class="navbar-brand">【現在の案件】</p>
      </template>
    </base-nav>

    <div class="user-content-button-table">
      <div class="table-responsive">
        <div class="button-sort">
          <base-button type="primary" size="sm">案件名順</base-button>
          <base-button type="primary" size="sm">クライアント名順</base-button>
          <base-button type="primary" size="sm">ステータス名順</base-button>
          <base-button type="primary" size="sm">納期早い順</base-button>
          <base-button type="primary" size="sm">納期遅い順</base-button>
        </div>
        <base-table thead-classes="thead-light" :data="columnsDatas">
          <template v-slot:columns>
            <th>案件名</th>
            <th>クライアント名</th>
            <th>ステータス</th>
            <th>開始日</th>
            <th>納期</th>
            <th>備考</th>
          </template>

          <template v-slot:default="columnsDatas">
            <th scope="row">
              {{ columnsDatas.item.prjname }}
            </th>
            <td>
              {{ columnsDatas.item.customer }}
            </td>
            <td>
              {{ columnsDatas.item.status }}
            </td>
            <td>
              {{ columnsDatas.item.dayStart }}
            </td>
            <td>
              {{ columnsDatas.item.dayLimited }}
            </td>
            <td>
              {{ columnsDatas.item.comment }}
            </td>
          </template>
        </base-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User content",

  data() {
    return {
      columnsDatas: [
        {
          prjname: "AAシステム",
          customer: "青木太郎様",
          status: "要件定義中",
          dayStart: "2021年7月1日",
          dayLimited: "2021年8月10日",
          comment: "大口クライアント",
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
          prjname: "AAシステム",
          customer: "青木太郎様",
          status: "要件定義中",
          dayStart: "2021年7月1日",
          dayLimited: "2021年8月10日",
          comment: "大口クライアント",
        },
      ],
    };
  },
};
</script>

<style scoped>
.user-content-main {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user-content-problem {
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

.user-content-button-table {
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
