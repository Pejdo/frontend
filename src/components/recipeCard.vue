<template>
  <el-row class="boje">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div class="card-text">
        <span class="naziv">Yummy hamburger</span>
        <div class="bottom clearfix">
          <time class="time">12:11:1999</time>
          <p>Desert</p>
          <el-button type="text" class="button">Operating</el-button>
        </div>
        <div class="sakri">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque
            quam ab praesentium labore quidem natus commodi quasi, ipsa
            blanditiis voluptate alias eligendi odit laborum eum nemo. Est,
            repudiandae placeat!
          </p>
          <div class="ratiing ">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value} points"
            >
            </el-rate>
          </div>
        </div>
      </div>
    </el-card>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
};
</script>
