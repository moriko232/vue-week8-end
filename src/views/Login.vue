<template>
  <div class="full-bg">
    <div class="top">
      <h3>皂皂市集管理後台</h3>
    </div>
    <div class="container">
      <div class="row">
        <div class=" col-4 justify-content-center m-auto white">
          <h1 class="text-center mb-3 font-weight-bold">後台登入</h1>
          <form @submit.prevent="login">
            <div class="mb-2">
              <input
                type="email"
                class="form-control"
                v-model="user.email"
                placeholder="帳號(Email)"
                required
                autofocus
                @input="clearMessage"
                :disabled="isLoading"
              />
            </div>
            <div class="mb-2">
              <input
                type="password"
                class="form-control"
                v-model="user.password"
                placeholder="密碼"
                @input="clearMessage"
                required
                :disabled="isLoading"
              />
            </div>
            <button class="btn btn-dark form-control" type="submit" :disabled="isLoading">
              登入
              <span
                v-if="isLoading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          </form>

          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>

          <div v-if="successMessage" class="alert alert-success" role="alert">
            {{ successMessage }}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5"></div>
  </div>
</template>
<script>
const loginUrl = `${process.env.VUE_APP_PATH}auth/login`;

export default {
  data() {
    return {
      isLoading: false,
      user: {
        email: "",
        password: ""
      },
      errorMessage: "",
      successMessage: ""
    };
  },
  methods: {
    login() {
      const data = {
        email: this.user.email,
        password: this.user.password
      };
      this.isLoading = true;

      this.$http
        .post(loginUrl, data)
        .then(response => {
          this.successMessage = "登入成功，請稍候...";

          const token = response.data.token;
          const expired = response.data.expired;
          document.cookie = `token=${token}`;
          document.cookie = `expired=${new Date(expired * 1000)}`;
          setTimeout(() => {
            this.$router.push({ path: "/admin/products" });
          }, 2000);
          this.isLoading = false;
        })
        .catch(err => {
          if (err) {
            this.isLoading = false;
            this.errorMessage = "登入失敗";
            this.password = "";
          }
        });
    },
    clearMessage() {
      this.errorMessage = "";
      this.successMessage = "";
    }
  }
};
</script>