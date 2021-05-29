<template>
  <div style="display:flex; justify-content:center">
    <el-col :xs="24" :sm="13" :md="13" :lg="13">
      <div class="grid-content bg-purple-light"></div>
      <el-row>
        <div class="unos">
          <el-form ref="form" :model="form">
            <el-form-item label="Naziv recepta">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Activity zone">
              <!-- //slika -->
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="Activity time">
              <el-col :span="11">
                <el-time-picker
                  placeholder="Pick a time"
                  v-model="form.date2"
                  style="width: 100%;"
                ></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="Activity time">
              <el-col :span="11">
                <el-time-picker
                  placeholder="Pick a time"
                  v-model="form.date2"
                  style="width: 100%;"
                ></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="Activity form">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="step" id="wrapper">
              <button type="button" @click="steps">add</button>
              <el-input type="textarea" v-model="form.desc1"></el-input>
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
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    steps() {
      var newspan = document.createElement("span");
      newspan.innerHTML = 'Label: <input type="text"><small>(ft)</small>';
      document.getElementById("wrapper").appendChild(newspan);
    },
  },
};
</script>
<style lang="scss">
.unos {
  display: flex;
  padding: 10px;
  justify-content: center;
}
</style>
