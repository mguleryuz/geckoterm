import { expect, describe, it } from 'bun:test'
import { getNetworks, setGeckotermAPIConfig } from '@' // Adjust to your SDK path

describe('API Client Tests', () => {
  // Set up the client with the API key
  setGeckotermAPIConfig({
    baseUrl: 'https://api.geckoterminal.com/api/v2',
  })

  it('should fetch data successfully', async () => {
    // Use the API client to call a method
    const response = await getNetworks({
      query: {
        page: 1,
      },
    }) // Replace with the actual API method

    console.log('API response data:', response.data)

    expect(response.data).toBeDefined()
  })
})
