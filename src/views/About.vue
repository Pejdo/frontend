<template>
  <recipePage :recept="clap" :komentar="koms" />
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
      koms: '',
    }
  },
  async mounted() {
    console.log(this.id)
    this.clap = await recepti.getOne(this.id)
    console.log(this.clap)
    this.koms = await recepti.getComments(this.id)
  },
}
</script>
