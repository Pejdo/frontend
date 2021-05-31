<template>
  <div style="display:flex; justify-content:center">
    <el-col :xs="24" :sm="13" :md="13" :lg="13">
      <div class="grid-content bg-purple-light"></div>
      <el-row>
        <div class="unos">
          <el-form ref="form" :model="form" style="width:100%">
            <el-form-item label="Naziv recepta">
              <el-input v-model="form.name"></el-input>
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
                v-model="form.date2"
              ></el-time-picker>

              <el-time-picker
                placeholder="Pick a time"
                v-model="form.date2"
              ></el-time-picker>
            </el-form-item>
            <el-divider></el-divider>

            <el-form-item label="Sastojci">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-divider></el-divider>

            <el-form-item label="Koraci" id="wrapper"
              ><br />

              <form>
                <div class="work-experiences">
                  <div
                    class="form-row"
                    v-for="(experience, index) in steps"
                    :key="index"
                  >
                    <div class="form-group" style="">
                      <el-input
                        type="textarea"
                        v-model="experience.company"
                        :name="`workExperiences[${index}][company]`"
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
              <el-button type="primary" @click="submit">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-row>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        desc1: "",
      },
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
    },
    addStep() {
      this.steps.push({
        step: "",
      });
    },
    submit() {
      const data = {
        steps: this.steps,
      };
      alert(JSON.stringify(data, null, 2));
    },
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
