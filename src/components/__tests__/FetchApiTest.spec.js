
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import FetchApi from '../FetchApi.vue'

describe('FetchApiTest', () => {
  // APIデータを取得できるかテスト
  it('fetches data from API', async () => {
    // プロジェクトルート直下APIKEY.mdの内容を読み込む
    const apiKeyPath = './APIKEY.md'
    const apiKey = fs.readFileSync(apiKeyPath, 'utf8')
    // インポートしているコンポーネントから関数を呼び出してaxiosでAPIを叩く
    const res = await FetchApi.methods.FetchPrefectures(apiKey)
    console.log('api data:' + res[0].name)
    // 無事にデータが取得できているか確認
    expect(res.length).toBeGreaterThan(5)
  })

  // 人口推移データを取得できるかテスト
  it('fetches population data from API', async () => {
    // プロジェクトルート直下のAPIキーを読み込む
    const apiKeyPath = './APIKEY.md'
    const apiKey = fs.readFileSync(apiKeyPath, 'utf8')

    // 都道府県コードを指定して人口推移データを取得する
    const prefectureCode = '13' // 東京都のコード
    const populationData = await FetchApi.methods.FetchPopulationTrend(prefectureCode, apiKey)
    console.log('population 0 year:' + populationData[0].year + ' value:' + populationData[0].value)
    // 取得したデータが正しい形式であることを確認する
    expect(populationData[0].value).toBeGreaterThan(100)
    expect(populationData[0].year).toBeGreaterThan(100)
  })
})
