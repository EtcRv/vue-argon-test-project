<template>
  <div>
    <div class="row justify-content-center" v-show="registerPart === 'Part1'">
      <div class="col-lg-7 col-md-7">
        <div class="row mt-5 mb-5 title">
          <strong>ユーザー登録</strong>
        </div>

        <div class="card bg-secondary shadow border-0 mb-5">
          <div class="card-header px-lg-5 py-lg-5">
            <form @submit.prevent="submitFormHandle">
              <div class="register-form">
                <div class="register-form_left">
                  <!-- Name -->
                  <el-popover
                    placement="left"
                    :width="200"
                    trigger="click"
                    content="は必須項目です。"
                  >
                    <template #reference>
                      <div
                        class="form-input"
                        :style="[
                          newUserIsValid.name ? '' : 'border: 2px solid red;',
                        ]"
                      >
                        <i class="fas fa-user"></i>
                        <input
                          type="text"
                          name="Name"
                          placeholder="お名前"
                          v-model="newUser.name"
                        />
                      </div>
                    </template>
                  </el-popover>

                  <!-- Company/Store name -->
                  <el-popover
                    placement="left"
                    :width="200"
                    trigger="click"
                    content="は必須項目です。"
                  >
                    <template #reference>
                      <div
                        class="form-input"
                        :style="[
                          newUserIsValid.companyName
                            ? ''
                            : 'border: 2px solid red;',
                        ]"
                      >
                        <i class="fas fa-building"></i>
                        <input
                          type="text"
                          name="CompanyName"
                          placeholder="会社名/屋号"
                          v-model="newUser.companyName"
                        />
                      </div>
                    </template>
                  </el-popover>

                  <!-- Telephone number -->
                  <div class="form-input">
                    <i class="fas fa-phone-alt"></i>
                    <input
                      type="number"
                      name="phoneNumber"
                      placeholder="電話番号"
                      v-model="newUser.phoneNumber"
                    />
                  </div>

                  <!-- Email -->
                  <el-popover
                    placement="left"
                    :width="200"
                    trigger="click"
                    content="は必須項目です。"
                  >
                    <template #reference>
                      <div
                        class="form-input"
                        :style="[
                          newUserIsValid.email ? '' : 'border: 2px solid red;',
                        ]"
                      >
                        <i class="fas fa-envelope"></i>
                        <input
                          type="email"
                          name="email"
                          placeholder="メールアドレス"
                          v-model="newUser.email"
                        />
                      </div>
                    </template>
                  </el-popover>

                  <!-- ID -->
                  <el-popover
                    placement="left"
                    :width="200"
                    trigger="click"
                    content="は必須項目です。"
                  >
                    <template #reference>
                      <div
                        class="form-input"
                        :style="[
                          newUserIsValid.id ? '' : 'border: 2px solid red;',
                        ]"
                      >
                        <i class="fas fa-portrait"></i>
                        <input
                          type="text"
                          name="id"
                          placeholder="ログインID"
                          v-model="newUser.id"
                        />
                      </div>
                    </template>
                  </el-popover>

                  <!-- Password -->
                  <el-popover
                    placement="left"
                    :width="200"
                    trigger="click"
                    title="は必須項目です。"
                    content="Pass phải có độ dài lớn hơn hoặc bằng 6"
                  >
                    <template #reference>
                      <div
                        class="form-input"
                        :style="[
                          newUserIsValid.password
                            ? ''
                            : 'border: 2px solid red;',
                        ]"
                      >
                        <i class="fa fa-lock"></i>
                        <input
                          type="password"
                          name="password"
                          placeholder="ログインパスワード"
                          v-model="newUser.password"
                        />
                      </div>
                    </template>
                  </el-popover>

                  <!-- Confirm Password -->
                  <el-popover
                    placement="left"
                    :width="200"
                    trigger="click"
                    content="は必須項目です。"
                  >
                    <template #reference>
                      <div
                        class="form-input"
                        :style="[
                          newUserIsValid.confirmPassword
                            ? ''
                            : 'border: 2px solid red;',
                        ]"
                      >
                        <i class="fa fa-lock"></i>
                        <input
                          type="password"
                          name="password"
                          placeholder="確認パスワード"
                          v-model="newUser.confirmPassword"
                        />
                      </div>
                    </template>
                  </el-popover>
                </div>
                <div class="register-form_right">
                  <!-- Kinds -->
                  <el-popover
                    placement="right"
                    :width="200"
                    trigger="hover"
                    content="は必須項目です。"
                  >
                    <template #reference>
                      <div class="register-form-radio">
                        <span :style="[newUserIsValid.type ? '' : 'color: red']"
                          >種別</span
                        >
                        <input
                          type="radio"
                          name="Type"
                          v-model="newUser.type"
                          value="法人"
                        />
                        法人

                        <input
                          type="radio"
                          name="Type"
                          v-model="newUser.type"
                          value="個人"
                        />
                        個人
                      </div>
                    </template>
                  </el-popover>

                  <!-- Industry -->
                  <div class="register-form-selector">
                    <span>業種</span>
                    <select v-model="newUser.industry">
                      <option>WEBディレクター</option>
                      <option>ABC</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="text-center submit-form">
                <strong
                  class="mt-4 text-center mb-4"
                  style="color: #f5365c"
                  v-show="errorRegister == true"
                  >Tên tài khoản đã tồn tại</strong
                >
                <button type="submit" style="width: 40%">登録</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="justify-content-center align-items-center card"
      v-show="registerPart === 'Part2'"
    >
      <div class="card-header px-sm-5 py-sm-5">
        <strong>
          ユーザー登録が完了しました。
          登録確認メールをご指定のメールアドレスに送信しました。
          メールが届いていない場合、迷惑メール防止機能により迷惑メールと間違えられている場合があります。
        </strong>
      </div>
      <div class="card-body">
        <base-button type="primary" @click="moveToLoginPage"
          >ログインはこちら</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      newUser: {
        name: "",
        companyName: "",
        phoneNumber: "",
        email: "",
        id: "",
        password: "",
        confirmPassword: "",
        type: "",
        industry: "",
      },
      newUserIsValid: {
        name: true,
        companyName: true,
        email: true,
        id: true,
        password: true,
        confirmPassword: true,
        type: true,
      },

      registerPart: "Part1",
      accountsData: this.$store.getters.accountsData,
      errorRegister: false,
    };
  },
  methods: {
    submitFormHandle() {
      this.newUserIsValid.name = this.checkInputInNewUsers(this.newUser.name);
      this.newUserIsValid.email = this.checkInputInNewUsers(this.newUser.email);
      this.newUserIsValid.companyName = this.checkInputInNewUsers(
        this.newUser.companyName
      );
      this.newUserIsValid.id =
        this.checkInputInNewUsers(this.newUser.id) &&
        !this.checkNewUserInAccounts();
      this.newUserIsValid.type = this.checkInputInNewUsers(this.newUser.type);
      this.newUserIsValid.password = this.checkPasswordInNewUsers();
      this.newUserIsValid.confirmPassword = this.checkConfirmPasswordInNewUsers();

      // Nếu không có input nào bị lỗi, thì post dữ liệu lên và chuyển trang
      if (
        this.newUserIsValid.name &&
        this.newUserIsValid.email &&
        this.newUserIsValid.companyName &&
        this.newUserIsValid.id &&
        this.newUserIsValid.type &&
        this.newUserIsValid.password &&
        this.newUserIsValid.confirmPassword
      ) {
        this.postAccountToAccountsData();
        this.registerPart = "Part2";
      }
    },

    // Kiểm tra xem input nhập có rỗng hay không.
    checkInputInNewUsers(valueCheck) {
      if (valueCheck.trim().length == 0) {
        return false;
      }
      return true;
    },

    // Kiểm tra tài khoản đăng ký đã tồn tại hay chưa
    checkNewUserInAccounts() {
      let flag = 1;
      for (let i = 0; i < this.accountsData.length; i++) {
        if (this.accountsData[i].id == this.newUser.id) {
          flag = 0;
          break;
        }
      }
      if (flag == 0) {
        this.newUserIsValid.id = false;
        this.errorRegister = true;
        return true;
      } else {
        return false;
      }
    },

    // Kiểm tra xem password có thỏa mãn hay không
    checkPasswordInNewUsers() {
      if (this.newUser.password.trim().length < 6) {
        return false;
      }
      return true;
    },

    // Kiểm tra xem confirmPassword có trống và trùng hay không
    checkConfirmPasswordInNewUsers() {
      if (
        this.newUser.confirmPassword.trim().length == 0 ||
        this.newUser.confirmPassword != this.newUser.password
      ) {
        return false;
      }
      return true;
    },

    // Chuyển hướng trang sang login
    moveToLoginPage() {
      window.location.href = "/login";
    },

    // Post dữ liệu lên API
    async postAccountToAccountsData() {
      try {
        let response = await fetch(
          "https://fir-project-vue-default-rtdb.asia-southeast1.firebasedatabase.app/Accounts.json",
          {
            method: "POST",
            body: JSON.stringify(this.newUser),
          }
        );
        await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.submit-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register-form {
  display: flex;
  justify-content: space-around;
}

.error-input {
  outline: red;
}

.register-form-radio {
  padding: 15px;
  display: flex;
  margin: 15px 0;
  align-items: center;
}

.register-form-radio > span {
  padding-right: 15px;
}

.register-form-radio > input {
  margin: 0 5px 0 10px;
}

.register-form-selector {
  padding: 15px;
  margin: 15px 0;
}

.register-form-selector > span {
  padding-right: 15px;
}

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
  width: 400px;
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
