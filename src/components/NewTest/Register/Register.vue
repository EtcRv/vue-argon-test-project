<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="row mt-5 mb-5 title">
        <strong>ユーザー登録</strong>
      </div>

      <div class="card bg-secondary shadow border-0">
        <div class="card-header px-lg-5 py-lg-5">
          <form role="form">
            <!-- Name -->
            <div class="form-input">
              <i class="fas fa-user"></i>
              <input type="text" name="Name" placeholder="" />
            </div>

            <!-- Company/Store name -->
            <div class="form-input">
              <i class="fas fa-building"></i>
              <input type="text" name="CompanyName" placeholder="ログインID" />
            </div>

            <!-- Telephone number -->
            <div class="form-input">
              <i class="fas fa-phone-alt"></i>
              <input
                type="number"
                name="phoneNumber"
                placeholder="ログインID"
              />
            </div>

            <!-- Email -->
            <div class="form-input">
              <i class="fas fa-phone-alt"></i>
              <input type="email" name="email" placeholder="ログインID" />
            </div>

            <!-- ID -->
            <div class="form-input">
              <i class="fas fa-phone-alt"></i>
              <input type="text" name="id" placeholder="ログインID" />
            </div>

            <!-- Password -->
            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="パスワード"
                v-model="newUser.password"
              />
              <i class="fa fa-eye-slash icon-eye"></i>
            </div>

            <!-- Confirm Password -->
            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="パスワード"
                v-model="model.password"
              />
              <i class="fa fa-eye-slash icon-eye"></i>
            </div>

            <div class="text-center">
              <base-button type="primary">Sign in</base-button>
            </div>
          </form>
          <div class="card-body bg-transparent">
            <div class="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div class="btn-wrapper text-center">
              <a href="#" class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon"
                  ><img src="img/icons/common/github.svg"
                /></span>
                <span class="btn-inner--text">Github</span>
              </a>
              <a href="#" class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon"
                  ><img src="img/icons/common/google.svg"
                /></span>
                <span class="btn-inner--text">Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="justify-content-center align-items-center card">
    <div class="card-header px-sm-5 py-sm-5">
      <strong>
        ユーザー登録が完了しました。
        登録確認メールをご指定のメールアドレスに送信しました。
        メールが届いていない場合、迷惑メール防止機能により迷惑メールと間違えられている場合があります。
      </strong>
    </div>
    <div class="card-body">
      <base-button type="primary">ログインはこちら</base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      newUser: {
        id: "",
        companyName: "",
      },
    };
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  display: flex;
  justify-content: center;
}

.form-input {
  border-radius: 8px;
  border: 1px solid #a7a8b0;
  padding: 15px;
  display: flex;
  align-items: center;
  color: #a7a8b0;
  margin: 15px 0;
}
.form-input input {
  padding: 0 15px;
  outline: none;
  border: none;
  line-height: normal;
  width: 100%;
}
.form-input .icon-eye {
  cursor: pointer;
}
</style>
