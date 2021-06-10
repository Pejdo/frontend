<template>
  <div style="display: flex; justify-content: center">
    <el-col :xs="24" :sm="13" :md="13" :lg="13">
      <div class="grid-content bg-purple-light"></div>
      <el-row>
        <div class="unos">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            style="width: 100%"
          >
            <el-form-item prop="naziv" label="Naziv recepta">
              <el-input v-model="ruleForm.naziv"></el-input>
            </el-form-item>
            <div>
              <img :src="ruleForm.src" class="uploading-image" :width="400" />
              <input type="file" accept="image/jpg" @change="uploadImage" />
            </div>

            <!-- //slika -->
            <el-divider></el-divider>
            <div class="vrijeme">
              <el-form-item prop="prepTime" label="Vrijeme">
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Unesite vrijeme u minutama"
                  placement="top-start"
                >
                  <i class="el-icon-info" style="padding: 0px 5px 0px 0px"> </i>
                </el-tooltip>
                <el-input
                  placeholder="vrijeme pripreme"
                  v-model="ruleForm.prepTime"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="cookTime">
                <el-input
                  placeholder="vrijeme kuhanja"
                  v-model="ruleForm.cookTime"
                >
                </el-input>
              </el-form-item>
            </div>
            <el-divider></el-divider>
            <el-form-item label="Sastojci" prop="sastojci">
              <el-tooltip
                class="item"
                effect="dark"
                content="Unesite sastojke nemorate unositi količini samo ih navesti i odvojiti zarezom"
                placement="top-start"
                style="padding: 12px 0px;float:left"
              >
                <i class="el-icon-info"> </i>
              </el-tooltip>
              <el-input type="textarea" v-model="ruleForm.sastojci"></el-input>
            </el-form-item>
            <el-divider></el-divider>
            <p
              style="
                text-align: left;
                line-height: 40px;
                font-size: 14px;
                color: #606266;
              "
            >
              Koraci
            </p>
            <el-form-item
              id="wrapper"
              class="koraci"
              v-for="(value, index) in ruleForm.steps"
              :key="value.key"
              :prop="'steps.' + index + '.step'"
              :rules="{
                required: true,
                message: 'Step nemože biti prazan',
                trigger: 'blur',
              }"
            >
              <el-input
                type="textarea"
                :placeholder="[[index + 1]] + ' step'"
                v-model="value.step"
                stype="padding: 0px 0px 10px 0px;"
              ></el-input
              ><span
                ><el-button @click.prevent="removeStep(value)"
                  >Delete</el-button
                ></span
              >
            </el-form-item>
            <el-form-item>
              <el-button @click="addStep">add step</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >Create</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import store from "@/store.js";
import { recepti } from "@/services";
export default {
  props: ["id"],
  data() {
    return {
      store,
      ruleForm: {
        naziv: "",
        prepTime: "",
        cookTime: "",
        sastojci: "",
        steps: [
          {
            step: "",
          },
        ],
        src: null,
      },

      rules: {
        naziv: [{ required: true, message: "Unesite naziv", trigger: "blur" }],
        sastojci: [
          { required: true, message: "unesite sastojke", trigger: "blur" },
        ],
        prepTime: [
          { required: true, message: "unesite vrijeme", trigger: "blur" },
        ],
        cookTime: [
          { required: true, message: "unesite vrijeme", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      let recept = {
        naziv: this.naziv,
        src: this.src,
        prepTime: this.prepTime,
        cookTime: this.cookTime,
        sastojci: this.sastojci,
        steps: this.steps,
      };
      recepti.createRecept(recept).then(() => {
        this.$router.push({ name: "Home" });
      });
    },
    removeStep(item) {
      var index = this.ruleForm.steps.indexOf(item);
      if (index !== -1) {
        this.ruleForm.steps.splice(index, 1);
      }
    },
    addStep() {
      this.ruleForm.steps.push({
        value: "",
      });
    },
    /*    submit() {
      const data = {
        steps: this.steps,
      };
      alert(JSON.stringify(data, null, 2));
    }, */
    // funkcije za sliku ------->
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.src = e.target.result;
        console.log(this.src);
      };
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let recept = {
            id: this.id,
            naziv: this.ruleForm.naziv,
            src: this.ruleForm.src,
            prepTime: this.ruleForm.prepTime,
            cookTime: this.ruleForm.cookTime,
            sastojci: this.ruleForm.sastojci,
            steps: this.ruleForm.steps,
          };
          recepti.makeChange(recept).then(() => {
            this.$router.push({ name: "Home" });
          });
          alert(recept);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  async mounted() {
    console.log("profil ", this.id);
    this.ruleForm = await recepti.getOneEdit(this.id);
  },
};
</script>
<style lang="scss">
.unos {
  display: flex;
  padding: 10px;
  justify-content: center;
  .vrijeme {
    display: flex;
    padding: 10px 0px;
    /*    .el-from-item > .el-form-item__content:first-child {
      float: left;
      margin-left: -30px;
      .el-input {
        width: 59%;
        .el-input__inner {
          width: 132px;
        }
      }
    } */
    .el-form-item {
      margin-bottom: 0px;
      .el-form-item__content {
        float: left;
        margin-left: -19px;
        .el-input {
          width: 75%;
          .el-input__inner {
            width: 142px;
          }

          .el-input__inner:last-child {
            margin: 0px 10px;
          }
        }
        > .el-form-item__error {
          position: static;
        }
      }
    }
  }
}
@media (min-width: 720px) {
  .koraci {
    > .el-form-item__content {
      width: 91%;
      .el-textarea {
        padding: 0px 5px 10px 0px;
      }
      span {
        .el-button {
          position: absolute;
          top: 20%;
        }
      }
    }
  }
}
</style>

>
