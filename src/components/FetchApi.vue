<script>
import fs from 'fs'
import axios from 'axios'

//他のコンポーネントで利用できる様にするためexport
export default {
  methods: {
    async FetchApi(path, ACCESS_TOKEN) {
      try {
        const response = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/${path}`, {
          headers: { 'X-API-KEY': ACCESS_TOKEN }
        })
        console.log('api status:' + response.status)
        return response
      } catch (error) {
        console.error(error.message)
      }
    },
    // 都道府県一覧を取得する
    async FetchPrefectures(ACCESS_TOKEN) {
      try {
        const response = await this.FetchApi('prefectures', ACCESS_TOKEN)
        return response.data.result.map((val) => {
          return {
            id: val['prefCode'],
            name: val['prefName'],
            isChecked: false
          }
        })
      } catch (error) {
        console.error(error.message)
      }
    },

    // プロジェクトルート直下APIKEY.mdの内容を読み込む
    async ReadApiKey() {
      const apiKeyPath = './APIKEY.md'
      const apiKey = fs.readFileSync(apiKeyPath, 'utf8')
      return apiKey
    }
  }
}
</script>
