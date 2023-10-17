// import { mount } from '@vue/test-utils'
import axios from 'axios'
import { describe, it, expect } from 'vitest'
import fs from 'fs'
// import path from 'path'

describe('FetchApiTest', () => {
  it('fetches data from API', async () => {
    // プロジェクトルート直下APIKEY.mdの内容を読み込む
    const apiKeyPath = './APIKEY.md'
    const apiKey = fs.readFileSync(apiKeyPath, 'utf8')
    // axiosでAPIを叩く
    const res = await FetchPrefectures(apiKey)
    console.log("api data:"+res[0].name)
    // 無事にデータが取得できているか確認
    expect(res.length).toBeGreaterThan(5)
  })
})

async function FetchPrefectures(ACCESS_TOKEN) {
  try {
    const response = await FetchApi('prefectures', ACCESS_TOKEN)
    return response.data.result.map(val => {
      return {
        id: val["prefCode"],
        name: val["prefName"],
        isChecked: false
      };
    });
  } catch (error) {
    console.error(error.message)
  }
}

async function FetchApi(path, ACCESS_TOKEN) {
  try {
    const response = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/${path}`, {
      headers: { 'X-API-KEY': ACCESS_TOKEN }
    })
    console.log("api status:"+response.status)
    return response
  } catch (error) {
    console.error(error.message)
  }
}
