import { client } from './build'
export * from './build'

const setGeckotermAPIConfg = client.setConfig

export { setGeckotermAPIConfg, client as geckotermAPIClient }
