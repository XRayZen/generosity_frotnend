<!-- https://github.com/highcharts/highcharts-vueを参考に実装 -->

<template>
  <div>
    <highcharts :options="options"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'
import {ref} from 'vue'

let series=ref([])
let categories=ref([])

export default {
  components: {
    highcharts: Chart
  },
  data() {
    return {
      options: {
        // ここに都道府県の人口データを入れる
        // どうやってデータを入れるか
        series: series,
        title: {
          style: {
            display: 'none'
          }
        },
        xAxis: {
          // ここに都道府県の年度を入れる
          categories: categories
          // props.categories
        },
        yAxis: {
          title: {
            text: '人口数'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: true
          }
        },
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
      console.log('addSeries id: ' + id + ' name: ' + name + ' population length: ' + population.length)
      // APIからのレスポンスは正常
      // 配列に追加出来ていない
      console.log(population)
      // this.options.series.push({
      //   // id: id,
      //   name: name,
      //   data: population
      // })
      // this.options.series.push[{
      //   name: name,
      //   data: population
      // }]
      series.value.push({
        name: name,
        data: population
      })
      console.log(this.options.series)
    },
    // カテゴリーを追加
    addCategories: function (categories) {
      // this.options.xAxis.categories = categories
      console.log(categories)
      categories.value= categories
    },

    // シリーズから削除
    removeSeries: function (id) {
      series.value = series.value.filter((series) => series.id !== id)
    }
  }
}
</script>
