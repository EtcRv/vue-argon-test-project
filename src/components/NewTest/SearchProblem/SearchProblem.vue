<template>
  <div class="search_problem">
    <div class="search_problem-form mt-5 mb-5 ml-5">
      <form role="form">
        <strong class="form-header">案件検索</strong>

        <!-- Name Inputs -->
        <div class="form-inputs" style="width: 40%">
          <div class="form-inputs-input">
            <span class="input-text">案件名</span>
            <input type="text" name="ProjectName" />
          </div>
          <div class="form-inputs-input">
            <span class="input-text">クライアント</span>
            <input type="text" name="Customer" />
          </div>
        </div>

        <!-- Date Inputs -->
        <div class="form-inputs" style="width: 60%">
          <div class="form-inputs-input">
            <span class="input-text">開始日</span>
            <input type="date" name="DayStartProject" />
            <span class="input-text">~</span>
            <input type="date" name="DayEndProject" />
          </div>
          <div class="form-inputs-input">
            <span class="input-text">納品日</span>
            <input type="date" name="DayStartDelivery" />
            <span class="input-text">~</span>
            <input type="date" name="DayEndDelivery" />
          </div>
        </div>

        <!-- Status Inputs -->
        <div class="form-inputs" style="width: 80%">
          <span class="input-text">ステータス</span>
          <div class="form-inputs-input">
            <base-checkbox> 納品済み </base-checkbox>
          </div>
          <div class="form-inputs-input">
            <base-checkbox> 要件定義 </base-checkbox>
          </div>
          <div class="form-inputs-input">
            <base-checkbox> 見積もり </base-checkbox>
          </div>
          <div class="form-inputs-input">
            <base-checkbox> スケジュール </base-checkbox>
          </div>
          <div class="form-inputs-input">
            <base-checkbox> ヒアリング </base-checkbox>
          </div>
          <div class="form-inputs-input">
            <base-checkbox> デザイン </base-checkbox>
          </div>
          <div class="form-inputs-input">
            <base-checkbox> 提案 </base-checkbox>
          </div>
          <div class="form-inputs-input">
            <base-checkbox> 修正 </base-checkbox>
          </div>
          <div class="form-inputs-input">
            <base-checkbox> 失注 </base-checkbox>
          </div>
        </div>

        <!-- Sort Inputs -->
        <div class="form-inputs" style="width: 60%">
          <div class="form-inputs-input">
            <span class="input-text">並び替え1</span>
            <select>
              <option>案件名：昇順</option>
              <option>案件名：降順</option>
              <option>クライアント名：昇順</option>
              <option>クライアント名：降順</option>
            </select>
          </div>
          <div class="form-inputs-input">
            <span class="input-text">並び替え2</span>
            <select>
              <option>案件名：昇順</option>
              <option>案件名：降順</option>
              <option>クライアント名：昇順</option>
              <option>クライアント名：降順</option>
            </select>
          </div>
          <div class="form-inputs-input">
            <span class="input-text">並び替え1</span>
            <select>
              <option>案件名：昇順</option>
              <option>案件名：降順</option>
              <option>クライアント名：昇順</option>
              <option>クライアント名：降順</option>
            </select>
          </div>
        </div>

        <!-- Submit Button -->
        <base-button type="success" class="submit-btn">検索</base-button>
      </form>
    </div>
    <hr class="my-3" style="width: 80vw" />
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
            {{ dataResults.item.id }}
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
  </div>
</template>

<script>
export default {
  name: "Search Problem",
  data() {
    return {
      dataResults: [
        {
          id: 1,
          prjname: "AAAシステム",
          customer: "株式会社AA",
          dayStart: "2021年1月1日",
          dayLimited: "2021年5月1日",
          status: "納品済み",
          linkProject: "/",
        },
        {
          id: 2,
          prjname: "AAAシステム",
          customer: "株式会社AA",
          dayStart: "2021年1月1日",
          dayLimited: "2021年5月1日",
          status: "納品済み",
          linkProject: "/",
        },
        {
          id: 3,
          prjname: "AAAシステム",
          customer: "株式会社AA",
          dayStart: "2021年1月1日",
          dayLimited: "2021年5月1日",
          status: "納品済み",
          linkProject: "/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.search_problem {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.search_problem-form {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-header {
  font-size: 20px;
}

.form-inputs {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}

.input-text {
  margin: 0 5px;
}

.form-inputs-input input {
  margin: 0 5px;
}

.submit-btn {
  position: absolute;
  top: 5px;
  right: 260px;
}
</style>
