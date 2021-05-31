<template>
  <div id="app" class="container">
    <form>
      <h1>Work experiences</h1>
      <div class="work-experiences">
        <div class="form-row" v-for="(experience, index) in steps" :key="index">
          <div class="form-group" style="display:flex">
            <label style="padding: 20px;display: block ruby;">
              {{ index + 1 }} step
            </label>
            <el-input
              type="textarea"
              v-model="experience.company"
              :name="`workExperiences[${index}][company]`"
              class="form-control"
              placeholder="Step"
            ></el-input>
          </div>
        </div>
      </div>

      <div class="form-group">
        <button @click="addExperience" type="button" class="btn btn-secondary">
          Add experience
        </button>
      </div>

      <hr />

      <div class="form-group">
        <button @click="submit" type="button" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    steps: [
      {
        step: "",
      },
    ],
  }),

  methods: {
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
    pri() {
      console.log(this.steps);
    },
  },
};
</script>

<style>
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}
</style>
