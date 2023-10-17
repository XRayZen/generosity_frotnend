// import { mount } from '@vue/test-utils'
// import axios from 'axios'
import { describe, it, expect } from 'vitest'
import fs from 'fs'
// import path from 'path'
import FetchApi from '../FetchApi.vue'

describe('FetchApiTest', () => {
  it('fetches data from API', async () => {
    // プロジェクトルート直下APIKEY.mdの内容を読み込む
    const apiKeyPath = './APIKEY.md'
    const apiKey = fs.readFileSync(apiKeyPath, 'utf8')
    // インポートしているコンポーネントから関数を呼び出してaxiosでAPIを叩く
    // Thanks Copilot!!
    const res = await FetchApi.methods.FetchPrefectures(apiKey)
    console.log("api data:"+res[0].name)
    // 無事にデータが取得できているか確認
    expect(res.length).toBeGreaterThan(5)
  })
})
