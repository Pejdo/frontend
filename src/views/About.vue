<template>
  <recipePage :recept="clap" :key="clap.id" />
</template>
<script>
import recipePage from '@/components/recipePage.vue'
import { recepti } from '@/services/index'
export default {
  components: { recipePage },
  props: ['id'],
  data() {
    return {
      clap: {},
    }
  },
  async mounted() {
    console.log(this.id)
    this.clap = await recepti.getOne(this.id)
    console.log(this.clap)
  },
}
</script>
