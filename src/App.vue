<script>
import CheckBoxPrefectures from './components/CheckBoxPrefectures.vue'
import ChartPopulation from './components/ChartPopulation.vue'
// import { ref } from 'vue'

export default {
  components: {
    CheckBoxPrefectures,
    ChartPopulation
  },
  methods: {
    // シリーズを追加
    addSeries: function (id, name, population) {
      console.log("addSeries")
      ChartPopulation.methods.addSeries(id, name, population)
      // this.series.value.push({
      //   id: id,
      //   name: name,
      //   data: population
      // })
    },
    // カテゴリーを追加
    addCategories: function (categories) {
      console.log("addCategories")
      ChartPopulation.methods.addCategories(categories)
      // this.data.categories.value.push(categories)
    },
    // シリーズを削除
    removeSeries: function (id) {
      console.log("removeSeries")
      this.options.series = this.options.series.filter((val) => val.id !== id)
    }
  }
}
</script>

<template>
  <div id="app">
    <h1>都道府県別総人口推移グラフ</h1>
    <h3>フロントエンド技術課題</h3>
    <h2>都道府県を選択してください（複数可）</h2>
    <CheckBoxPrefectures @onAddCategories="addCategories" @onAddSeries="addSeries" @onRemoveSeries="removeSeries" />
  </div>
  <ChartPopulation />
</template>

<style scoped>
#app {
  max-width: 1024px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 20px;
}

h3 {
  text-align: center;
  font-size: 17px;
}

h2 {
  text-align: center;
  font-size: 17px;
}
/* 解像度が狭くなったら適用する */
@media screen and (max-width: 425px) {
  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 12px;
  }
}
</style>
