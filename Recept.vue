<template>
  <div>
    <div class="demo-image">
      <div class="block">
        <span class="demonstration">{{ fit }}</span>
        <el-image
          :src="url"
          style="width: 100%; height: 300px"
          :fit="scale - down"
        ></el-image>
      </div>
    </div>
    <el-row style="display:flex; justify-content:center">
      <el-col :xs="24" :sm="13" :md="13" :lg="13"
        ><div class="grid-content bg-purple">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"
              >homepage</el-breadcrumb-item
            >
            <el-breadcrumb-item>recept </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="cookTime">
          <el-divider><i class="el-icon-time"></i></el-divider>
          <span>priprema: </span>
          <span> 15 min</span>
          <span>kuhanje: </span>
          <span> 15 min</span>
          <el-divider></el-divider>
        </div>
        <div class="nameIng">
          <h6>ime recepte</h6>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Sastojci</span>
            </div>
            <div v-for="o in 9" :key="o" class="text item">
              {{ "List item " + o }}
            </div>
          </el-card>
          <div class="Stepovi">
            <el-col :span="4" class="grid-content bg-purple">1</el-col>
            <el-col :span="20">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                nobis dicta doloribus minima corrupti sit quasi, voluptatum
                asperiores quisquam tempora adipisci? Ipsum dicta animi nostrum
                sunt hic minus corporis nam!
              </p></el-col
            >

            <el-col :span="4" class="grid-content bg-purple">2</el-col>
            <el-col :span="20">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                nobis dicta doloribus minima corrupti sit quasi, voluptatum
                asperiores quisquam tempora adipisci? Ipsum dicta animi nostrum
                sunt hic minus corporis nam!
              </p></el-col
            >
          </div>
          <el-divider></el-divider>

          <div class="rating">
            <span class="demonstration">Ocjenite recept</span>
            <el-rate v-model="value1"></el-rate>
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
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://cdn.wallpapersafari.com/98/55/qiIX8l.jpg",
      value1: null,
    };
  },
};
</script>

<style lang="scss">
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
      content: " ";
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
        padding: 10px 10px 10px 10px;
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
