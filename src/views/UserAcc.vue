<template>
  <el-row :gutter="10" justify="center" type="flex">
    <el-col :xs="20" :sm="10" :md="8" :lg="9" :xl="11"
      ><div class="grid-content bg-purple"></div>
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="User" name="first">
          <el-form
            class="registracija-form"
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
          >
            <!--     <el-form-item prop="username">
              <el-input
                v-model="ruleForm.username"
                placeholder="Username"
                prefix-icon="fas fa-user"
              ></el-input>
            </el-form-item> -->
            <el-form-item prop="email">
              <el-input
                v-model="ruleForm.email"
                placeholder="email"
                prefix-icon="fas fa-user"
              ></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input
                v-model="ruleForm.password"
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

            <el-form-item>
              <el-button
                class="registracija-button"
                type="primary"
                native-type="button"
                @click="submitForm('ruleForm')"
                >registracija</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="Config" name="second">
          <recipeCard
            v-for="index in recipes"
            :key="index.id"
            :recept="index"
            @edit="editRecipe($event)"
            @deleteIt="deleteRecipe($event)"
          />
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<script>
import { Auth } from "@/services/auth";
import { recepti } from "@/services/index";
import store from "@/store.js";
import recipeCard from "../components/_recipeCardProfile.vue";
export default {
  components: { recipeCard },
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
      } else if (value !== this.ruleForm.password) {
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

    return {
      store,
      recipes: null,
      activeName: "first",
      ruleForm: {
        username: "",
        email: "",
        password: "",
        checkPass: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
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
      },
    };
  },
  methods: {
    async submitForm() {
      let success = await Auth.signUp(this.ruleForm);
      console.log(success);
      /*    await this.$refs[formName].validate((valid) => {
        if (valid) {
          alert(success);
        } else {
          console.log("error submit!!");
          return false;
        }
      }); */
    },
    async getData() {
      this.recipes = await recepti.usersRecipes(this.ruleForm.username);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    editRecipe(link) {
      console.log(link);
      this.$router.push(`/profil/${link}`);
    },
    async deleteRecipe(link) {
      console.log(link);
      await recepti.deleteRecipe(link);
      this.recipes = await recepti.usersRecipes(this.ruleForm.username);
    },
  },
  async mounted() {
    let data = await Auth.getUserInfo();
    this.ruleForm = data;
    console.log(data._id);
    store.trenutniKorisnik = data.username;
    this.recipes = await recepti.usersRecipes(this.ruleForm.username);
  },
};
</script>
<style lang="scss">
.el-tabs__nav-wrap {
  display: flex;
  justify-content: center;
}
.el-tabs__content {
  display: flex;
  justify-content: center;
  .el-tab-pane {
    width: 60%;
  }
}
@media (min-width: 720px) {
}
.el-tabs__content {
  display: flex;
  justify-content: center;
  .el-tab-pane {
    width: 100%;
  }
}
</style>
