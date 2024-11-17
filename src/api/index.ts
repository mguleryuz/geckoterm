import { client } from './build'
export * from './build'

const setGeckotermAPIConfig = client.setConfig

export { setGeckotermAPIConfig, client as geckotermAPIClient }
