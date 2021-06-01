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
            v-model="ruleForm.email"
            placeholder="email"
            prefix-icon="fas fa-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
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
        <el-form-item prop="date">
          <el-form class="age">
            <el-input v-model="ruleForm.date.dan" placeholder="dan"></el-input>
            <el-input
              v-model="ruleForm.date.mjesec"
              placeholder="mjesec"
            ></el-input>
            <el-input
              v-model="ruleForm.date.godina"
              placeholder="godina"
            ></el-input>
          </el-form>
        </el-form-item>
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
          <router-link class="forgot-password" to="/prijava"
            >Sign in?</router-link
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("repeat");
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
    var checkDay = (value) => value >= 1 && value <= 31;
    var checkMonth = (value) => value >= 1 && value <= 12;

    var validateDate = (rule, value, callback) => {
      if (value.dan && value.mjesec && value.godina === "") {
        callback(new Error("please input the date"));
      } else if (checkDay(value.dan) && checkMonth(value.mjesec)) {
        console.log(value);
        callback();
      } else {
        console.log(value.dan);
        callback(new Error("please input valid number"));
      }
    };
    return {
      store,
      ruleForm: {
        username: "",
        email: "",
        pass: "",
        checkPass: "",
        age: "21",
        date: { dan: "", mjesec: "", godina: "" },
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
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
        email: [{ validator: validateEmail, trigger: "blur" }],
        date: [{ validator: validateDate, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          this.store.currentEmail = this.ruleForm.username;
          this.$router.push({ name: "Home" });
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
