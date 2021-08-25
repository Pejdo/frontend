<template>
  <div>
    <div class="demo-image">
      <div
        class="block"
        style="position: relative; display: flex; height: 300px;"
      >
        <img
          :src="recept.src"
          style="width: 56%;height: 300px;position: absolute;z-index: 1;margin: auto;left: 22%; ;"
        />
        <el-image
          :src="recept.src"
          style="width: 100%;height: 300px;position: absolute;"
          :fit="fill"
        >
        </el-image>
      </div>
    </div>
    <el-row
      :gutter="10"
      style="display:flex; justify-content:center;text-align:center"
    >
      <el-col :xs="24" :sm="13" :md="13" :lg="13"
        ><div class="grid-content bg-purple">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"
              >homepage</el-breadcrumb-item
            >
            <el-breadcrumb-item>{{ recept.naziv }} </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="cookTime">
          <el-divider><i class="el-icon-time"></i></el-divider>
          <span>priprema: </span>
          <span> {{ recept.prepTime }}</span>
          <span>kuhanje: </span>
          <span> {{ recept.cookTime }}</span>
          <el-divider></el-divider>
        </div>
        <div class="nameIng">
          <h6>{{ recept.naziv }}</h6>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <!--           <span>{{ recept.sastojci }}</span> -->
              <div
                class="Stepovi"
                v-for="(value, index) in recept.sastojci"
                :key="value"
              >
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="4"
                  ><div class="grid-content bg-purple">{{ index }}</div></el-col
                >
                <el-col :span="20"
                  ><p>{{ value.ing }}</p></el-col
                >
              </div>
            </div>
          </el-card>
          <div
            class="Stepovi"
            v-for="(value, index) in recept.steps"
            :key="index"
          >
            <el-col class="grid-content bg-purple">{{ value.metoda }}</el-col>
            <el-col
              v-for="(elem, key) in recept.steps[index].kategorijeStepova"
              :key="key"
              ><p>{{ key }}.{{ elem.step }}</p></el-col
            >
          </div>
          <el-divider></el-divider>

          <div class="rating">
            <span class="demonstration">Ocjenite recept</span>
            <el-rate
              v-model="recept.rating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value} "
              >"></el-rate
            >
            <el-popover placement="right" width="400" trigger="click">
              <el-rate v-model="rating"></el-rate>
              <button type="button" @click="rateIt">submpuir</button>
              <el-button slot="reference" style="margin-top:20px"
                >Ocjenite recept</el-button
              >
            </el-popover>
          </div>
          <el-divider></el-divider>
          <div class="kom">
            <div class="post-content">
              <div class="post-container">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="user"
                  class="profile-photo-md pull-left"
                />
                <div class="post-detail">
                  <div class="user-info">
                    <h5>
                      <a href="timeline.html" class="profile-link"
                        >Alexis Clark</a
                      >
                    </h5>
                    <p class="text-muted">
                      Published a photo about 3 mins ago
                    </p>
                  </div>
                  <div class="post-comment">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt=""
                      class="profile-photo-sm"
                    />
                    <p>
                      <i class="em em-laughing"></i> Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud
                    </p>
                  </div>
                  <div class="post-comment">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                      class="profile-photo-sm"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                  </div>
                  <div class="post-comment">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                      class="profile-photo-sm"
                    />
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Post a comment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { recepti } from '@/services/index.js'
export default {
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://cdn.wallpapersafari.com/98/55/qiIX8l.jpg',
      rating: '',
    }
  },
  props: ['recept'],
  methods: {
    async rateIt() {
      let serverData = {
        rating: this.rating,
        id: this.recept.id,
      }
      console.log(serverData)
      await recepti.rateRecept(serverData)
    },
  },
  mounted() {
    console.log(this.recept.rating.length)
    let k = this.recept.rating.reduce((sum, nxt) => (sum += nxt))
    /*   / / this.recept.rating.length
      this.recept.rating.lenght() */
    console.log('ovo je ', k / this.recept.rating.length)
    this.recept.rating = k / this.recept.rating.length
  },
}
</script>

<style lang="scss">
.el-col-4 {
  float: unset;
}
.el-row {
  .el-breadcrumb {
    padding: 10px;
  }
  .cookTime {
    i {
      font-size: 24px;
    }
    span {
      font-size: 16px;
      padding: 2px;
    }

    .el-icon-time::before {
      width: 40px;
      display: inline-block;
      background-color: white;
    }
    span:nth-child(3)::after {
      content: ' ';
      padding: 10px;
    }
  }
  .nameIng {
    h6 {
      padding: 0px 0px 10px 0px;
    }
    .el-card.is-always-shadow {
      box-shadow: none;
    }
    .box-card {
      margin: 20px 0px 0px 0px;
    }
    .Stepovi {
      overflow: hidden;
      padding: 5px;
      .bg-purple {
        padding: 5px;
      }
      .el-col p {
        text-align: justify;
        /* padding: 10px 10px 10px 10px; */
      }
    }
    .post-content {
      background: #f8f8f8;
      border-radius: 4px;
      width: 100%;
      border: 1px solid #f1f2f2;
      margin-bottom: 20px;
      overflow: hidden;
      position: relative;

      .post-container {
        padding: 20px;
        img.profile-photo-md {
          height: 50px;
          width: 50px;
          border-radius: 50%;
        }
        .post-detail {
          position: relative;
          img.profile-photo-sm {
            margin-right: 10px;
            height: 40px;
            width: 40px;
            border-radius: 50%;
          }
          .post-comment {
            display: inline-flex;
            margin: 10px auto;
            width: 100%;
            text-align: justify;
            .post-text {
              line-height: 24px;
              margin: 0;

              .form-control {
                height: 30px;
                border: 1px solid #ccc;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
                margin: 7px 0;
                min-width: 0;
              }
            }
          }
        }
      }
    }
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
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
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
