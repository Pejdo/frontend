<template>
  <recipePage :recept="recept" @click.native="changes" />
</template>
<script>
import recipePage from "@/components/recipePage.vue";
import store from "@/store.js";
import { recepti } from "@/services";
export default {
  components: { recipePage },
  props: ["id"],
  data() {
    return {
      store,
      recept: null,
    };
  },
  async mounted() {
    console.log(this.id);
    this.recept = await recepti.getOne(this.id);
  },
  methods: {
    changes() {
      this.$router.push(`/profil/${this.id}`);
    },
  },
};
</script>
