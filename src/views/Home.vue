<template>
  <el-row>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in items" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div style="display:flex; justify-content:center">
      <el-col :xs="24" :sm="13" :md="13" :lg="13"
        ><div class="grid-content bg-purple-light"></div>
        <!--  <el-row class="boje">
          <el-card class="card" :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div class="card-text">
              <span>Yummy hamburger</span>
              <div class="bottom clearfix">
                <time class="time">12:11:1999</time>
                <p>Desert</p>
                <el-button type="text" class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-row> -->
        <el-row class="boje">
          <el-card class="card" :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              @click="recept"
              href="#"
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                  atque quam ab praesentium labore quidem natus commodi quasi,
                  ipsa blanditiis voluptate alias eligendi odit laborum eum
                  nemo. Est, repudiandae placeat!
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                  atque quam ab praesentium labore quidem natus commodi quasi,
                  ipsa blanditiis voluptate alias eligendi odit laborum eum
                  nemo. Est, repudiandae placeat!
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
      </el-col>
    </div>
  </el-row>
</template>

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

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
<script>
export default {
  data() {
    return {
      items: ["", "", "", ""],
    };
  },
  methods: {
    recept() {
      this.$router.push("/recept");
    },
  },
};
</script>
