<template>
  <el-row class="boje" @click="opens()">
    <div class="blog-card">
      <div class="meta">
        <div class="photo" @click="opens()">
          <img style="width: 100%;height: 100%;" :src="recept.src" />
        </div>
      </div>
      <div class="description">
        <h1 style="text-align: left;">
          {{ recept.naziv }}

          <!-- <button href="#">Read More</button> -->
        </h1>
        <h2 style="text-align: left;">Opening a door to the future</h2>
        <p style="text-align:left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit natus labore, iure cupiditate odit sunt sequi debitis?
          Earum iure optio exercitationem similique eum laboriosam obcaecati,
          fugit ducimus aspernatur, ratione eos!
        </p>
        <el-rate
          v-model="recept.rating"
          disabled
          show-score
          text-color="#ff9900"
        >
        </el-rate>
        <div>
          <time class="time" style="float: left;">{{ recept.date }}</time>
        </div>
      </div>
    </div>
    <button style="width:50%" @click="shareId">edit</button>
    <button style="width:50%" @click="deleteId">delete</button>
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
  methods: {
    opens() {
      this.$router.push(`/recepti/${this.recept.id}`);
    },
    shareId() {
      console.log(this.recept.id);
      this.$emit("edit", this.recept.id);
    },
    deleteId() {
      console.log(this.recept.id);
      this.$emit("deleteIt", this.recept.id);
    },
  },
};
</script>
<style lang="scss">
/* * {
  box-sizing: border-box;
}

$color_white: #fff;
$color_prime: #5ad67d;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;


.blog-card {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  margin-bottom: 1.6%;
  background: $color_white;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  a {
    color: inherit;
    &:hover {
      color: $color_prime;
    }
  }
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    height: 300px;
  }
  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
  }
  .details,
  .details ul {
    margin: auto;
    padding: 0;
    list-style: none;
  }

  .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    margin: auto;
    transition: left 0.2s;
    background: rgba(#000, 0.6);
    color: $color_white;
    padding: 10px;
    width: 100%;
    font-size: 0.9rem;
    a {
      text-decoration: dotted underline;
    }
    ul li {
      display: inline-block;
    }
    .author:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f007";
    }

    .date:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f133";
    }

    .tags {
      ul:before {
        font-family: FontAwesome;
        content: "\f02b";
        margin-right: 10px;
      }
      li {
        margin-right: 2px;
        &:first-child {
          margin-left: -4px;
        }
      }
    }
  }
  .description {
    padding: 1rem;
    background: $color_white;
    position: relative;
    z-index: 1;
    h1,
    h2 {
      font-family: Poppins, sans-serif;
    }
    h1 {
      line-height: 1;
      margin: 0;
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      color: $color_grey_dark;
      margin-top: 5px;
    }
    .read-more {
      text-align: right;
      a {
        color: $color_prime;
        display: inline-block;
        position: relative;
        &:after {
          content: "\f061";
          font-family: FontAwesome;
          margin-left: -10px;
          opacity: 0;
          vertical-align: middle;
          transition: margin 0.3s, opacity 0.3s;
        }

        &:hover:after {
          margin-left: 5px;
          opacity: 1;
        }
      }
    }
    .el-rate > span {
      float: left;
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;
    .meta {
      flex-basis: 40%;
      height: auto;
    }
    .description {
      flex-basis: 60%;
      /*  &:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      } 
    }
  }
} */
</style>
