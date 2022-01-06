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
                v-model="user.id"
              />
            </div>

            <!-- PassWord -->
            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="パスワード"
                v-model="user.password"
              />
            </div>

            <strong
              class="mt-4 text-center"
              style="color: #f5365c"
              v-show="errorSignIn == true"
              >Tên tài khoản hoặc mật khẩu chưa đúng</strong
            >

            <div class="text-center mt-4">
              <base-button
                type="primary"
                @click="submitFormHandle(user.id, user.password)"
                >Sign in</base-button
              >
            </div>
          </form>
          <div class="card-body bg-transparent">
            <!-- <div class="text-muted text-center mt-2 mb-3">
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
            </div> -->

            <router-link to="/register">
              <div class="text-center mt-2">
                <small>Create new account</small>
              </div>
            </router-link>
          </div>
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
      user: {
        id: "",
        password: "",
      },
      accountsData: this.$store.getters.accountsData,
      errorSignIn: false,
    };
  },
  methods: {
    submitFormHandle(id, password) {
      let flag = 0;
      // Check user
      for (let i = 0; i < this.accountsData.length; i++) {
        if (
          id == this.accountsData[i].id &&
          password == this.accountsData[i].password
        ) {
          window.location.href = "/user";
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        this.user.id = id;
        this.user.password = "";
        this.errorSignIn = true;
      }
    },
  },
  created() {
    this.$store.dispatch("getAccountsDataFromAPI");
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
