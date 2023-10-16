- [Binding(バインディング)](#bindingバインディング)

# Binding(バインディング)
v-bind ディレクティブを利用することで html タグの属性の設定を行うことができます。
- 属性の設定を行うという意味もわかりにくいと思うので a タグで頻繁に利用される href 属性を使ってどういうものか確認していきます。

!!! info v-bind ディレクティブを利用して href 属性を設定する場合は下記のように記述することができます。
    v-bind の後ろの:(コロン)そして属性名が続きます。
    ```html
    <a v-bind:href="変数名">リンク名</a>
    ```

実際に href 属性に v-bind を設定する場合は以下のように行うことができます。
- 変数 link を定義して google の URL を設定しています。
```html
<script setup>
  const link = 'https://google.com';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div>
    <a v-bind:href="link">Google</a>
  </div>
</template>
```
v-bind によって href の値が link 変数に設定した google へのリンクになっているためアンダーバーのついた青色の文字列をクリックすると Google の検索画面が表示されます。





