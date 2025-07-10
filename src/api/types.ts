import type { SimpleTokenPrice } from './build/types.gen'

// The actual API response structure for simple token price endpoint
export type GeckoTerminalSimpleTokenPriceResponse<
  T extends (...args: any) => any,
> = Omit<Awaited<ReturnType<T>>, 'data'> & {
  data: {
    data: SimpleTokenPrice
  }
}

// Re-export everything else
export * from './build/types.gen'
export * from './build/sdk.gen'
