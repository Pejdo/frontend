<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple"></div>
      <el-checkbox-group v-model="checkbox" size="medium">
        <el-checkbox-button
          v-for="cat in kategorije"
          :label="kategorije"
          :key="cat"
          >{{ cat }}</el-checkbox-button
        >
      </el-checkbox-group>
      <recipeCard />
    </el-col>
  </el-row>
</template>
<script>
import recipeCard from '@/components/recipeCard'
const Kategorije = [
  'Doručak',
  'Ručak',
  'Pića',
  'Predjela',
  'Juhe',
  'Salate',
  'Glavna jela: govedina',
  'Glavna jela: perad',
  'Glavna jela: svinjetina',
  'Glavna jela: plodovi mora',
  'Glavna jela: vegetarijanska',
  'Deserti',
]
export default {
  data() {
    return {
      checkbox: [],
      kategorije: Kategorije,
    }
  },
  components: { recipeCard },
}
</script>
