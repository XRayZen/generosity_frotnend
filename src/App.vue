<script setup>
import CheckBoxPrefectures from './components/CheckBoxPrefectures.vue'
</script>

<template>
  <div id="app">
    <h1>都道府県別総人口推移グラフ</h1>
    <h3>フロントエンド技術課題</h3>
    <h2>都道府県を選択してください（複数可）</h2>
    <CheckBoxPrefectures />
  </div>
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
