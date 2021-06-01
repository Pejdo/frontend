<template>
  <div style="display:flex; justify-content:center">
    <el-col :xs="24" :sm="13" :md="13" :lg="13">
      <div class="grid-content bg-purple-light"></div>
      <el-row>
        <div class="unos">
          <el-form style="width:100%">
            <el-form-item label="Naziv recepta">
              <el-input v-model="naziv"></el-input>
            </el-form-item>
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
            <!-- //slika -->

            <el-form-item
              label="Activity time"
              style="padding:30px 0px 5px 0px;"
              class="vrijeme"
            >
              <el-time-picker
                placeholder="Pick a time"
                v-model="prepTime"
              ></el-time-picker>

              <el-time-picker
                placeholder="Pick a time"
                v-model="cookTime"
              ></el-time-picker>
            </el-form-item>
            <el-divider></el-divider>

            <el-form-item label="Sastojci">
              <el-input type="textarea" v-model="sastojci"></el-input>
            </el-form-item>
            <el-divider></el-divider>

            <el-form-item label="Koraci" id="wrapper"
              ><br />

              <form>
                <div class="recipe-step">
                  <div
                    class="form-row"
                    v-for="(a, index) in steps"
                    :key="index"
                  >
                    <div class="form-group" style="">
                      <el-input
                        type="textarea"
                        v-model="a.step"
                        :name="`cooking-step[${index}][step]`"
                        :placeholder="[[index + 1]] + ' step'"
                      ></el-input>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    @click="addStep"
                    type="button"
                    class="btn btn-secondary"
                  >
                    add step
                  </button>
                </div>
                <el-divider></el-divider>
              </form>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      naziv: "",
      prepTime: "",
      cookTime: "",
      sastojci: "",
      steps: [
        {
          step: "",
        },
      ],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      store.recept = {
        naziv: this.naziv,
        prepTime: this.prepTime,
        cookTime: this.cookTime,
        sastojci: this.sastojci,
        steps: this.steps,
      };
    },
    addStep() {
      this.steps.push({
        step: "",
      });
    },
    /*    submit() {
      const data = {
        steps: this.steps,
      };
      alert(JSON.stringify(data, null, 2));
    }, */
    // funkcije za sliku ------->
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
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
    .el-time-picker {
      width: 250px;
      margin: 0 5px;
    }
  }

  .form {
    width: 100%;
  }
  .form-group {
    .el-textarea {
      padding: 5px 0px 5px 0px;
    }
  }
}
</style>

>
