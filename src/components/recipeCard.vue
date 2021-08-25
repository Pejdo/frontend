<template>
  <el-row class="boje">
    <div class="blog-card antish">
      <div class="meta">
        <div
          class="photo"
          style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
        ></div>
      </div>
      <div class="description">
        <h1 style="text-align: left;">Learning to Code</h1>
        <h2 style="text-align: left;">Opening a door to the future</h2>
        <p style="text-align: left;">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
          dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque
          ad aliquam facilis numquam. Veritatis, sit.
        </p>
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value} points"
        >
        </el-rate>
        <div>
          <time class="time" style="float: left;">12:11:1999</time>
        </div>
        <p class="read-more">
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      value: 5,
    };
  },
};
</script>
<style lang="scss"></style>
