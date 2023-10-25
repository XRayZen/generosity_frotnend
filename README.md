# generosity_frontend

GENEROSITYのフロントエンド技術課題

# 使用技術
- Vue.js 3 (Composition API) : Ver 3.3.4
- 言語：javascript
- ビルドツール：Vite
- axios(API通信) : Ver 1.5.1
- highcharts : Ver 11.1.0
- highcharts-vue : Ver 1.4.3
- リンター : ESLint Ver 8.49.0
- フォーマッター : Prettier Ver 3.0.3
- テスト : Vitest Ver 0.34.4

# セキュリティ
- RESAS APIのAPIキーはVercelの環境変数に保存して、`import.meta.env.VITE_API_KEY`から取得するようにした
  - 念を入れてRESAS APIの登録時に発行されたAPIキーを無効化して再発行したのを使っている
- ローカルでの開発時に使う`.env`は`.gitignore`に追加して、対象から外してGithubには上げないようにした
>src/components/FetchApi.vue
```javascript
ReadApiKey() {
  return import.meta.env.VITE_API_KEY
}
```

# テストコード
- コンポーネントテストは出来ませんでしたが、API通信関連のテストは出来ました



