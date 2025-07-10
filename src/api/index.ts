import { client } from './build/client.gen'

const setGeckotermAPIConfig = client.setConfig

setGeckotermAPIConfig({
  baseUrl: 'https://api.geckoterminal.com/api/v2',
})

export { setGeckotermAPIConfig, client as geckotermAPIClient }
export * from './build'
export * from './types'
