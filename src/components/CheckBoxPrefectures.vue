<!-- AsyncSetupは使いずらく、口数がかかるので普通のスクリプトにしてマウントされたら実行 -->

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
    // チェックボックスの状態を変更する
    ChangeCheckState(prefCode) {
      const prefecture = this.prefectures.find((val) => val.id === prefCode)
      prefecture.isChecked = !prefecture.isChecked
    },
    // 初期表示
    init: async function () {
      try {
        // APIから都道府県データを取得する
        const apiKey = FetchApi.methods.ReadApiKey()
        // データをバインドしてある変数に格納する
        // そのデータをもとにチェックボックスを作成する
        this.prefectures = await FetchApi.methods.FetchPrefectures(apiKey)
      } catch (error) {
        console.error(error.message)
      }
    }
  }
}
</script>

<template>
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
</template>

<style scoped>
.prefectures {
  font-size: 15px;
}
label {
  cursor: pointer;
}
</style>
