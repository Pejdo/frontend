<template>
  <div id="app" class="container">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="120px"
      class="demo-dynamic"
    >
      <!-- <el-form-item
        prop="email"
        label="Email"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item> -->
      <el-form-item
        v-for="(value, index) in ruleForm.steps"
        :key="value.key"
        :prop="'steps.' + index + '.value'"
        :rules="{
          required: true,
          message: 'Step nemože biti prazan',
          trigger: 'blur',
        }"
      >
        <el-input
          type="textarea"
          :placeholder="[[index + 1]] + ' step'"
          v-model="value.value"
          stype="padding: 0px 0px 10px 0px;"
        ></el-input
        ><span
          ><el-button @click.prevent="removeDomain(value)"
            >Delete</el-button
          ></span
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Submit</el-button
        >
        <el-button @click="addStep">add step</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        steps: [
          {
            key: 1,
            value: "",
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
        } else {
          console.log("error submit!!");
          return false;
        }
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
  },
};
</script>

<style lang="scss">
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}
@media (min-width: 720px) {
  .el-form-item__content {
    display: flex;
    span {
      margin: auto;
    }
  }
}
</style>
