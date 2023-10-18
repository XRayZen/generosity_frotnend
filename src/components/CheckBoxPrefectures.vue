<template>
  <div class="prefectures_area">
    <div v-for="prefecture in prefectures" :key="prefecture.id" class="prefecture">
      <label :for="prefecture.id">
        <input
          type="checkbox"
          :id="prefecture.id"
          :checked="prefecture.isChecked"
          @click="onCheckBox(prefecture.id, prefecture.name, prefecture.isChecked)"
        />
        {{ prefecture.name }}
      </label>
    </div>
  </div>
</template>

<script>
import FetchApi from './FetchApi.vue'
// App.vueでメソッドを実行するためにexport
export default {
  data() {
    return {
      prefectures: []
    }
  },
  // マウントされたら実行
  mounted() {
    this.init()
  },
  methods: {
    onCheckBox: async function (id, name, isChecked) {
      // 都道府県リストのis_checkedはデフォでfalseなので反転させる
      if (isChecked) {
        this.prefectures[id - 1].isChecked = false
        // チェックが外されたのでチャートを非表示にする
        this.$emit('onRemoveSeries', id)
      } else {
        // チェックが入ったのでデータを取得してチャートを表示する
        this.prefectures[id - 1].isChecked = true
        const population = await FetchApi.methods.FetchPopulationTrend(id, FetchApi.methods.ReadApiKey())
        this.$emit(
          'onAddCategories',
          population.map((val) => val['year'])
        )
        this.$emit(
          'onAddSeries',
          id,
          name,
          population.map((val) => val['value'])
        )
      }
    },
    // 初期表示
    init: async function () {
      try {
        // APIから都道府県データを取得する
        const apiKey = FetchApi.methods.ReadApiKey()
        this.prefectures = await FetchApi.methods.FetchPrefectures(apiKey)
      } catch (error) {
        console.error(error.message)
      }
    }
  }
}
</script>

<style scoped>
.prefectures {
  font-size: 15px;
}
.prefectures_area {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
/* カーソルが近づいたらポインターにする */
label {
  cursor: pointer;
}
/* 解像度が狭くなったら適用 */
@media screen and (max-width: 425px) {
  .prefectures_area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .prefectures {
    font-size: 13px;
  }
  label {
    cursor: pointer;
    font-size: small;
  }
}
</style>
