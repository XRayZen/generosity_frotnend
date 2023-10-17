- [Provide/Inject](#provideinject)


# Provide/Inject
親コンポーネントから子コンポーネントにデータを渡したい時には props を利用することができます。
- しかし親コンポーネントからデータを渡したい子コンポーネントまでの階層が深い場合は props を利用することは非常に手間がかかります。
- props の代わりに Provide/Inject を利用することで親コンポーネントからあるコンポーネントに props を利用することなくデータを渡すことができます。

図で表すと Provide/Inject と props の違いは下記のように記述できます。
- props を利用して App コンポーネントから CompB コンポーネントにデータを渡す際は CompA を経由させる必要があります。
- しかし Provide/Inject を利用すると App コンポーネントから CompA を介さず CompB に直接データを渡すことができます。
![Alt text](https://reffect.co.jp/images/vue/vue-js-components/vue3_provide_inject.webp)

動作確認を行うために components フォルダに CompA.vue, CompB.vue ファイルを作成します。
- CompA.vue ファイルの中で CompB コンポーネントを import しています。
```html
<script setup>
  import CompB from './CompB.vue';
</script>
<template>
  <h2>CompAコンポーネント</h2>
  <CompB />
</template>
<template>
  <h3>CompBコンポーネント</h3>
</template>
```
App.vue ファイルの中で CompA コンポーネントを import しています。
```html
<script setup>
  import CompA from './components/CompA.vue';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <CompA />
</template>
```
ブラウザ上には以下の画面が表示されます。












