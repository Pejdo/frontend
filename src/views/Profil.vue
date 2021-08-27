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
              <img :src="src" class="uploading-image" :width="400" />
              <input type="file" accept="image/jpg" @change="uploadImage" />
            </div>

            <!-- //slika -->
            <el-divider></el-divider>
            <el-form-item
              label="Kategorije"
              prop="kategorije"
              :rules="{
                required: true,
                message: 'unesite sastojke',
                trigger: 'blur',
              }"
            >
              <el-select
                v-model="ruleForm.kategorije"
                placeholder="Odaberite kategorije"
              >
                <el-option label="Doručak" value="Doručak"></el-option>
                <el-option label="Ručak" value="Ručak"></el-option>
                <el-option label="Pića" value="Pića"></el-option>
                <el-option label="Predjela" value="Predjela"></el-option>
                <el-option label="Juhe" value="Juhe"></el-option>
                <el-option label="Salate" value="Salate"></el-option>
                <el-option
                  label="Glavna jela: govedina"
                  value="Glavna jela: govedina"
                ></el-option>
                <el-option
                  label="Glavna jela: perad"
                  value="Glavna jela: perad"
                ></el-option>
                <el-option
                  label="Glavna jela: svinjetina"
                  value="Glavna jela: svinjetina"
                ></el-option>
                <el-option
                  label="Glavna jela: plodovi mora"
                  value="Glavna jela: plodovi mora"
                ></el-option>
                <el-option
                  label="Glavna jela: vegetarijanska"
                  value="Glavna jela: vegetarijanska"
                ></el-option>
                <el-option label="Deserti" value="Deserti"></el-option>
              </el-select>
            </el-form-item>
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
            <el-form-item
              id="wrapper2"
              class="sastojci"
              v-for="(value, index) in ruleForm.sastojci"
              :key="value.key"
              :prop="'sastojci.' + index + '.ing'"
              :rules="{
                required: true,
                message: 'Sastojak ne moze biti prazan',
                trigger: 'blur',
              }"
              label-position="left"
              label="sastojci"
            >
              <el-tooltip
                class="item"
                effect="dark"
                content="Unesite sastojke nemorate unositi količini samo ih navesti i odvojiti zarezom"
                placement="top-start"
                style="padding: 15px 0px;float:left"
              >
                <i class="el-icon-info"></i>
              </el-tooltip>
              <el-input
                :placeholder="[[index + 1]] + ' ing'"
                v-model="value.ing"
              ></el-input
              ><span
                ><el-button @click.prevent="removeIng(value)"
                  >Delete</el-button
                ></span
              >
            </el-form-item>
            <el-form-item>
              <el-button @click="addIng">add step</el-button>
            </el-form-item>
            <!--  <el-form-item label="Sastojci" prop="sastojci">
              <el-tooltip
                class="item"
                effect="dark"
                content="Unesite sastojke nemorate unositi količini samo ih navesti i odvojiti zarezom"
                placement="top-start"
                style="padding: 15px 0px;float:left"
              >
                <i class="el-icon-info"> </i>
              </el-tooltip>
              <el-input
                type="textarea"
                v-model="ruleForm.sastojci.ing"
              ></el-input>
            </el-form-item> -->
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
              <button @click="addKategoriju" type="button" style="float:right">
                Dodaj kategoriju
              </button>
            </p>
            <el-form-item
              id="kategorija"
              class="kategorija"
              v-for="(index, key) in ruleForm.steps"
              :key="key"
              :prop="'steps.' + key + '.metoda'"
              :rules="{
                required: true,
                message: 'metoda nemože biti prazan',
                trigger: 'blur',
              }"
            >
              <el-input
                placeholder="Unesite kategoriju"
                v-model="index.metoda"
              ></el-input>
              <el-form-item
                id="wrapper"
                class="koraci"
                v-for="(value, i) in ruleForm.steps[key].kategorijeStepova"
                :key="i"
                :prop="`steps[${key}].kategorijeStepova[${i}].step`"
                :rules="{
                  required: true,
                  message: 'Step nemože biti prazan',
                  trigger: 'blur',
                }"
              >
                <!--   {{ value.step }} {{ value }} {{ i }} -->
                <el-input
                  type="textarea"
                  placeholder="Unesite korak"
                  v-model="value.step"
                  stype="padding: 0px 0px 10px 0px;"
                ></el-input
                ><span
                  ><el-button @click.prevent="removeStep(key, value)"
                    >Delete</el-button
                  ></span
                >
              </el-form-item>
              <el-form-item>
                <el-button @click="addStep(key)">add step</el-button>
                <el-divider></el-divider>
              </el-form-item>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >Create</el-button
              >
            </el-form-item>
            <!--   <el-divider></el-divider>
            <p
              style="
                text-align: left;
                line-height: 40px;
                font-size: 14px;
                color: #606266;
              "
            >
              Koraci
              <button type="button" style="float:right">
                Dodaj kategoriju
              </button>
            </p>
            <el-input
              :placeholder="ruleForm.steps[0].metoda"
              :v-model="ruleForm.steps[0].metoda"
              style="padding: 0px 0px 10px 0px;display: block;width:200px"
            ></el-input>
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
                v-model="value.index"
                stype="padding: 0px 0px 10px 0px;"
              ></el-input
              ><span
                ><el-button @click.prevent="removeStep(value)"
                  >Delete</el-button
                ></span
              >
            </el-form-item>
            <el-form-item>
              {{ ruleForm.steps[0].kategorijeStepova[0] }}
              <el-button @click="addStep()">add step</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >Create</el-button
              >
            </el-form-item> -->
          </el-form>
        </div>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import { recepti } from '@/services/index'
export default {
  props: ['id'],
  data() {
    return {
      ruleForm: {
        naziv: '',
        prepTime: '',
        cookTime: '',
        sastojci: [
          {
            ing: '',
          },
        ],
        steps: [
          {
            metoda: '',
            kategorijeStepova: [
              {
                step: '',
              },
            ],
          },
        ],
      },
      src: null,
      rules: {
        naziv: [{ required: true, message: 'Unesite naziv', trigger: 'blur' }],
        sastojci: [
          { required: true, message: 'unesite sastojke', trigger: 'blur' },
        ],
        prepTime: [
          { required: true, message: 'unesite vrijeme', trigger: 'blur' },
        ],
        cookTime: [
          { required: true, message: 'unesite vrijeme', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      let recept = {
        naziv: this.naziv,
        src: this.src,
        prepTime: this.prepTime,
        cookTime: this.cookTime,
        sastojci: this.sastojci,
        steps: this.steps,
      }
      recepti.createRecept(recept).then(() => {
        this.$router.push({ name: 'Home' })
      })
    },
    removeIng(item) {
      var index = this.ruleForm.sastojci.indexOf(item)
      if (index !== -1) {
        this.ruleForm.sastojci.splice(index, 1)
      }
    },
    addIng() {
      this.ruleForm.sastojci.push({
        ing: '',
      })
    },
    removeStep(num, item) {
      var index = this.ruleForm.steps[num].kategorijeStepova.findIndex(
        (value) => {
          console.log('ovo je value ', value.step)
          return value.step == item.step
        }
      )
      console.log(index, num, item.step)
      if (index !== -1) {
        this.ruleForm.steps[num].kategorijeStepova.splice(index, 1)
      }
    },
    addStep(event) {
      console.log(event)
      this.ruleForm.steps[event].kategorijeStepova.push({
        step: '',
      })
    },
    addKategoriju() {
      this.ruleForm.steps.push({
        metoda: '',
        kategorijeStepova: [
          {
            step: '',
          },
        ],
      })
    },
    removeKategoriju(index) {
      this.ruleForm.steps.splice(index, 1)
    },
    /*    submit() {
      const data = {
        steps: this.steps,
      };
      alert(JSON.stringify(data, null, 2));
    }, */
    // funkcije za sliku ------->
    uploadImage(e) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.src = e.target.result
        console.log(this.src)
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let recept = {
            id: this.id,
            naziv: this.ruleForm.naziv,
            kategorije: this.ruleForm.kategorije,
            src: this.ruleForm.src,
            prepTime: this.ruleForm.prepTime,
            cookTime: this.ruleForm.cookTime,
            sastojci: this.ruleForm.sastojci,
            steps: this.ruleForm.steps,
          }
          recepti.makeChange(recept).then(() => {
            this.$router.push({ name: 'Home' })
          })
          alert(recept)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
  async mounted() {
    console.log('profil ', this.id)
    this.ruleForm = await recepti.getOne(this.id)
  },
}
</script>
<style lang="scss">
/* .unos {
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
    } 
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
} */
</style>
