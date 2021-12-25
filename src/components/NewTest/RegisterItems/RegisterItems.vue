<template>
  <div class="card">
    <div class="card-header">
      <strong>案件登録</strong>
      <p>*は必須項目です。</p>
    </div>
    <div class="card-body">
      <!-- First Form -->
      <form>
        <div class="form-title">
          <strong>■ 基本情報</strong>
        </div>
        <div class="form-content">
          <div class="form-content-input">
            <strong>*</strong>
            <span>案件名</span>
            <input type="text" />
          </div>
          <div class="form-content-input">
            <strong>*</strong>
            <span>クライアント</span>
            <select>
              <option></option>
            </select>
            <p class="muted">
              ※新規のクライアントは、左メニュー「クライアント登録」を先に行ってください。
            </p>
          </div>
          <div class="form-content-input">
            <strong>*</strong>
            <span>開始日</span>
            <input type="date" />
          </div>
          <div class="form-content-input">
            <strong>*</strong>
            <span>納期</span>
            <input type="date" />
          </div>
          <div class="form-content-input">
            <span>概要</span>
            <textarea
              class="form-control form-control-alternative"
              rows="3"
              placeholder="Write a large text here ..."
              style="width: 60%"
            ></textarea>
          </div>
        </div>
      </form>

      <!-- Second Form -->
      <form>
        <div class="form-title">
          <strong>■ 各種スケジュール日程</strong>
        </div>
        <div class="form-content"></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register Items",
};
</script>

<style></style>
