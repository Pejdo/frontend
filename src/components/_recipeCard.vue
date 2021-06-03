<template>
  <el-row class="boje">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <img :src="recept.src" class="image" />
      <div class="card-text">
        <span class="naziv">{{ recept.naziv }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ new Date() }}</time>
          <p>Desert</p>
          <el-button type="text" class="button">Operating</el-button>
        </div>
        <div class="sakri">
          <p v-for="step in recept.steps" :key="step">
            {{ step }}
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
  props: ["recept"],
};
</script>
<style lang="scss">
.boje {
  padding: 10px 5px 10px 5px;
  .card {
    height: 26%;
    img {
      height: 290px;
      padding: 0px 5px 0px 5px;
      margin: 0px 0px 10px 0px;
    }
    .card-text {
      padding: 14px 14px 30px 14px;
      time {
        float: left;
      }
      p {
        margin: 0px 50px 0px 0;
      }
      button {
        margin: -14px 0px 0px 0px;
      }
    }
  }
}
.sakri {
  display: none;
}

@media (min-width: 1024px) {
  .boje {
    padding: 10px 5px 10px 5px;
    .card {
      height: 20%;
      .el-card__body {
        display: flex;
      }
      img {
        width: 400px;
        height: 300px;
        padding: 5px 5px 5px 5px;
        border-radius: 3%;
        margin: 0px 0px 10px 0px;
      }
      .card-text {
        position: relative;
        padding: 14px 14px 30px 14px;
        width: 100%;
        .naziv {
          position: absolute;
          left: 0px;
          padding: 10px;
        }
        .bottom {
          time {
            float: left;
            bottom: 20px;
            position: absolute;
            left: 0px;
            padding: 0px 10px;
          }
          p {
            position: absolute;
            top: 60px;
            font-size: 19px;
          }
          button {
            position: absolute;
            right: 91px;
            top: 32px;
          }
          span {
            position: absolute;
            left: 15px;
            padding-top: 10px;
          }
        }
        .sakri {
          display: block;
          position: absolute;
          bottom: 145px;
          p {
            text-align: left;
            padding: 0px 0px 14px;
            font-size: 16px;
          }
          .ratiing {
            position: absolute;
          }
        }
      }
    }
  }
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 30%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
