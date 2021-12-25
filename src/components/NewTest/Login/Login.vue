<template>
  <div class="row justify-content-center login-page">
    <div class="col-lg-5 col-md-7">
      <div class="row mt-5 mb-5 title">
        <strong>ここにサービス紹介、コピーを入れる</strong>
      </div>

      <div class="card bg-secondary shadow border-0">
        <div class="card-header px-lg-5 py-lg-5">
          <!-- ID -->
          <form role="form">
            <div class="form-input">
              <i class="fas fa-user"></i>
              <input
                type="text"
                name="id"
                placeholder="ログインID"
                v-model="model.id"
              />
            </div>

            <!-- PassWord -->
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
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light"><small>Forgot password?</small></a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/register" class="text-light"
            ><small>Create new account</small></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      model: {
        id: "",
        password: "",
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
