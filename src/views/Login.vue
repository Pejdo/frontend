<template>
  <div class="login  hej">
    <el-card>
      <h2>Login</h2>
      <el-form
        class="login-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.native.prevent="login"
      >
        <el-form-item prop="username">
          <el-input
            v-model="model.username"
            placeholder="Username"
            prefix-icon="fas fa-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="model.password"
            placeholder="Password"
            type="password"
            prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
            >Login</el-button
          >
        </el-form-item>
        <div>
          <a class="forgot-password" href="https://oxfordinformatics.com/"
            >Forgot password ?</a
          ><br />
          <router-link class="račun" to="/registracija"
            >Nemate račun ?</router-link
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "login",
  data() {
    return {
      store,
      validCredentials: {
        username: "lightscope",
        password: "lightscope",
      },
      model: {
        username: "",
        password: "",
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur",
          },
          {
            min: 4,
            message: "Username length should be at least 5 characters",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    simulateLogin() {
      return new Promise((resolve) => {
        setTimeout(resolve, 800);
      });
    },
    async login() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      await this.simulateLogin();
      this.loading = false;
      if (
        this.model.username === this.store.uname &&
        this.model.password === this.store.password
      ) {
        this.$message.success("Login successfull");
      } else {
        this.$message.error("Username or password is invalid");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$teal: rgb(0, 124, 137);
.login {
  display: flex;
  justify-content: center;
}
.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}
.el-button--primary {
  background: $teal;
  border-color: $teal;

  &:hover,
  &.active,
  &:focus {
    background: lighten($teal, 7);
    border-color: lighten($teal, 7);
  }
}
.login .el-input__inner:hover {
  border-color: $teal;
}
.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
  .el-input__icon {
    width: 30px;
  }
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
a {
  color: $teal;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten($teal, 7);
  }
}
.račun {
  margin-top: 10px;
}
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .el-form-item__content button {
    width: 40%;
    margin-top: 5px;
    float: center;
  }
  a.forgot-password {
    float: center;
    margin-top: 0px;
  }
  a.račun {
    float: center;
    margin-top: 10px;
  }
}
</style>
