<template>
  <div class="login  hej">
    <el-card>
      <h2>Login</h2>
      <el-form
        class="login-form"
        :model="ruleForm"
        :rules="rules"
        ref="form"
        @submit.native.prevent="login"
      >
        <el-form-item prop="email">
          <el-input
            v-model="ruleForm.email"
            placeholder="email"
            prefix-icon="fas fa-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            placeholder="Password"
            type="password"
            prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
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
import { Auth } from "@/services";
import store from "@/store.js";
export default {
  name: "login",
  data() {
    var validateEmail = (rule, value, callback) => {
      const reg = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      if (value === "") {
        callback(new Error("please input the email"));
      } else if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("Please enter a valid email address"));
      }
    };
    return {
      store,
      ruleForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [
          { required: true, message: "please input password", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    async login() {
      /* let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      } */
      let success = await Auth.login(
        this.ruleForm.email,
        this.ruleForm.password
      );
      /*  if (
        this.model.username === this.store.uname &&
        this.model.password === this.store.password
      ) {
        this.$message.success("Login successfull");
      } else {
        this.$message.error("Username or password is invalid");
      } */
      console.log("rezzz" + success);
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
