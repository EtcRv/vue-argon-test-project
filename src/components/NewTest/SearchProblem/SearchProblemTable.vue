<template>
  <div class="search_problem-result">
    <base-button type="info" class="mb-3 ml-5">編集</base-button>
    <base-table thead-classes="thead-light" :data="dataResults">
      <template v-slot:columns>
        <th>No</th>
        <th>案件名</th>
        <th>クライアント名</th>
        <th>開始日</th>
        <th>納品日</th>
        <th>ステータス</th>
      </template>

      <template v-slot:default="dataResults">
        <th scope="row">
          {{ dataResults.item.index }}
        </th>
        <td>
          {{ dataResults.item.prjname }}
        </td>
        <td>
          {{ dataResults.item.customer }}
        </td>
        <td>
          {{ dataResults.item.dayStart }}
        </td>
        <td>
          {{ dataResults.item.dayLimited }}
        </td>
        <td>
          {{ dataResults.item.status }}
        </td>
        <td>
          <a :href="dataResults.item.linkProject">プロセス画面へ</a>
        </td>
      </template>
    </base-table>
  </div>
</template>

<script>
export default {
  name: "Search Problem Table",
  props: ["dataResults"],
};
</script>

<style></style>
