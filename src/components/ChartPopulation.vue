<template>
  <div>
    <highcharts :options="options"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'
import { ref } from 'vue'

let series = ref([])
let categories = ref([])

export default {
  components: {
    highcharts: Chart
  },
  data() {
    return {
      options: {
        // https://stackoverflow.com/questions/72829525/react-highchart-how-set-the-accessibility-enabled-option-to-false
        // で解決
        accessibility: {
          enabled: false
        },
        // ここに都道府県の人口データを入れる
        series: series,
        title: {
          style: {
            display: 'none',
          }
        },
        xAxis: {
          title: {
            text: '年度'
          },
          // 年度を入れる
          categories: categories
        },
        yAxis: {
          title: {
            text: '人口数'
          }
        },
        // 凡例を右上に表示
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top'
        }
      }
    }
  },
  methods: {
    // シリーズを追加
    addSeries: function (id, name, population) {
      series.value.push({
        id: id,
        name: name,
        data: population
      })
    },
    // カテゴリー(年度)を追加
    addCategories: function (categoriesArray) {
      categoriesArray.forEach((category) => {
        categories.value.push(category)
      })
    },
    // シリーズから削除
    removeSeries: function (id) {
      series.value = series.value.filter((series) => series.id !== id)
    }
  }
}
</script>
