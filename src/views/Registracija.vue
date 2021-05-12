<template>
  <div class="registracija  hej">
    <el-card>
      <h2>Registracija</h2>
      <el-form
        class="registracija-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.native.prevent="registracija"
      >
        <el-form-item prop="username">
          <el-input
            v-model="model.username"
            placeholder="Username"
            prefix-icon="fas fa-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="model.email"
            placeholder="email"
            prefix-icon="fas fa-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.pass"
            placeholder="Password"
            type="password"
            prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            placeholder="Repeat Password"
            type="password"
            prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>
        <el-form class="age">
          <el-input v-model.number="ruleForm.day" placeholder="dan"></el-input>
          <el-input
            v-model.number="ruleForm.month"
            placeholder="mjesec"
          ></el-input>
          <el-input
            v-model.number="ruleForm.year"
            placeholder="godina "
          ></el-input>
        </el-form>
        <el-form-item>
          <el-button
            :loading="loading"
            class="registracija-button"
            type="primary"
            native-type="submit"
            block
            >registracija</el-button
          >
        </el-form-item>
        <div>
          <a class="forgot-password" href="https://oxfordinformatics.com/"
            >Sign in?</a
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "registracija",

  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the age"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please input digits"));
        } else {
          if (value < 18) {
            callback(new Error("Age must be greater than 18"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
        day: "",
        month: "",
        year: "",
      },

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
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    simulateregistracija() {
      return new Promise((resolve) => {
        setTimeout(resolve, 800);
      });
    },
    async registracija() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      await this.simulateregistracija();
      this.loading = false;
      if (
        this.model.username === this.validCredentials.username &&
        this.model.password === this.validCredentials.password
      ) {
        this.$message.success("registracija successfull");
      } else {
        this.$message.error("Username or password is invalid");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$teal: rgb(0, 124, 137);

.registracija {
  display: flex;
  justify-content: center;
}
.registracija-button {
  width: 100%;
  margin-top: 40px;
}
.registracija-form {
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
.registracija .el-input__inner:hover {
  border-color: $teal;
}
.registracija .el-input__prefix {
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
.registracija .el-input input {
  padding-left: 35px;
}
.registracija .el-card {
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
.registracija .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
.age {
  display: flex;
  flex-direction: row;
}
.age > .el-input {
  width: 33%;
  padding: 0px 0px 20px 3px;
}

@media (min-width: 1024px) {
  .registracija[data-v-26084dc2] {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
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
}
</style>
