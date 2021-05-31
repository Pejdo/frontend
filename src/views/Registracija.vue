<template>
  <div class="registracija  hej">
    <el-card>
      <h2>Registracija</h2>
      <el-form
        class="registracija-form"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="Username"
            prefix-icon="fas fa-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            v-model="email"
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
          <el-input placeholder="dan"></el-input>
          <el-input placeholder="mjesec"></el-input>
          <el-input placeholder="godina "></el-input>
        </el-form>
        <el-form-item>
          <el-button
            class="registracija-button"
            type="primary"
            native-type="button"
            @click="submitForm('ruleForm')"
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
import store from "@/store.js";
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
    /*     var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the username"));
      } else {
        if (this.ruleForm.username !== "") {
          this.$refs.ruleForm.validateField("username");
        }
        callback();
      }
    }; 
    validEmail: function(email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email.toLowerCase());
    },
    validPassword: function(password) {
      let testPassword = /^[A-Z]/;
      return password.length >= 8 && testPassword.test(password);
    },
    validMjesec: function(mjesec) {
      return mjesec != "";
    },
    validDan: function(dan) {
      return dan != "";
    },
    validRepeatPassword: function(password, repeatPassword) {
      return password == repeatPassword;
    },
    validGodina: function(godina) {
      return godina > 1920 && godina < 2022;
    },*/
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
      store,
      email: "",
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
        age: "21",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
        username: [
          {
            required: true,
            message: "Please input username",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          this.store.currentEmail = this.ruleForm.username;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
