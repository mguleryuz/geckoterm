import { expect, describe, it } from 'bun:test'
import {
  coinGeckoChainIds,
  getSimpleNetworksByNetworkTokenPriceByAddresses,
  type GeckoTerminalSimpleTokenPriceResponse,
} from '@/index'

describe('API Client Tests', () => {
  it('should fetch data successfully', async () => {
    // Use the API client to call a method
    const response = (await getSimpleNetworksByNetworkTokenPriceByAddresses({
      path: {
        addresses: '0x514910771af9ca656af840dff83e8264ecf986ca',
        network: coinGeckoChainIds[1],
      },
    })) as GeckoTerminalSimpleTokenPriceResponse<
      typeof getSimpleNetworksByNetworkTokenPriceByAddresses
    >

    console.log('API response data:', response.data)

    // The actual response structure is { data: { data: SimpleTokenPrice } }
    expect(response.data?.data?.attributes?.token_prices).toBeDefined()

    // Check specific token price
    const chainlinkPrice =
      response.data?.data?.attributes?.token_prices?.[
        '0x514910771af9ca656af840dff83e8264ecf986ca'
      ]
    expect(chainlinkPrice).toBeDefined()
    console.log('CHAINLINK price:', chainlinkPrice)
  })
})
