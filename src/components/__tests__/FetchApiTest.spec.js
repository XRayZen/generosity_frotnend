// import { mount } from '@vue/test-utils'
import axios from 'axios'
import { describe, it, expect } from 'vitest'
import fs from 'fs'
// import path from 'path'

describe('FetchApiTest', () => {
  it('fetches data from API', async () => {
    // プロジェクトルート直下にAPIKEY.mdの内容を読み込む
    const apiKeyPath = './APIKEY.md'
    const apiKey = fs.readFileSync(apiKeyPath, 'utf8')
    // axiosでAPIを叩く
    const res = await FetchApi('prefectures', apiKey)
    console.log("api status:"+res.status)
    expect(res.data.result.length).toBeGreaterThan(5)
  })
})

async function FetchApi(path, ACCESS_TOKEN) {
  try {
    const response = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/${path}`, {
      headers: { 'X-API-KEY': ACCESS_TOKEN }
    })
    return response
  } catch (error) {
    console.error(error.message)
  }
}
