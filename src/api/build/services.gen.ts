// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch'
import type {
  GetNetworksByNetworkPoolsByPoolAddressOhlcvByTimeframeData,
  GetNetworksByNetworkPoolsByPoolAddressOhlcvByTimeframeError,
  GetNetworksByNetworkPoolsByPoolAddressOhlcvByTimeframeResponse,
  GetNetworksByNetworkDexesData,
  GetNetworksByNetworkDexesError,
  GetNetworksByNetworkDexesResponse,
  GetNetworksData,
  GetNetworksError,
  GetNetworksResponse,
  GetNetworksTrendingPoolsData,
  GetNetworksTrendingPoolsError,
  GetNetworksTrendingPoolsResponse,
  GetNetworksByNetworkTrendingPoolsData,
  GetNetworksByNetworkTrendingPoolsError,
  GetNetworksByNetworkTrendingPoolsResponse,
  GetNetworksByNetworkPoolsByAddressData,
  GetNetworksByNetworkPoolsByAddressError,
  GetNetworksByNetworkPoolsByAddressResponse,
  GetNetworksByNetworkPoolsMultiByAddressesData,
  GetNetworksByNetworkPoolsMultiByAddressesError,
  GetNetworksByNetworkPoolsMultiByAddressesResponse,
  GetNetworksByNetworkPoolsData,
  GetNetworksByNetworkPoolsError,
  GetNetworksByNetworkPoolsResponse,
  GetNetworksByNetworkDexesByDexPoolsData,
  GetNetworksByNetworkDexesByDexPoolsError,
  GetNetworksByNetworkDexesByDexPoolsResponse,
  GetNetworksByNetworkTokensByTokenAddressPoolsData,
  GetNetworksByNetworkTokensByTokenAddressPoolsError,
  GetNetworksByNetworkTokensByTokenAddressPoolsResponse,
  GetNetworksByNetworkNewPoolsData,
  GetNetworksByNetworkNewPoolsError,
  GetNetworksByNetworkNewPoolsResponse,
  GetNetworksNewPoolsData,
  GetNetworksNewPoolsError,
  GetNetworksNewPoolsResponse,
  GetSearchPoolsData,
  GetSearchPoolsError,
  GetSearchPoolsResponse,
  GetNetworksByNetworkPoolsByPoolAddressTradesData,
  GetNetworksByNetworkPoolsByPoolAddressTradesError,
  GetNetworksByNetworkPoolsByPoolAddressTradesResponse,
  GetNetworksByNetworkTokensByAddressData,
  GetNetworksByNetworkTokensByAddressError,
  GetNetworksByNetworkTokensByAddressResponse,
  GetNetworksByNetworkTokensMultiByAddressesData,
  GetNetworksByNetworkTokensMultiByAddressesError,
  GetNetworksByNetworkTokensMultiByAddressesResponse,
  GetNetworksByNetworkTokensByAddressInfoData,
  GetNetworksByNetworkTokensByAddressInfoError,
  GetNetworksByNetworkTokensByAddressInfoResponse,
  GetNetworksByNetworkPoolsByPoolAddressInfoData,
  GetNetworksByNetworkPoolsByPoolAddressInfoError,
  GetNetworksByNetworkPoolsByPoolAddressInfoResponse,
  GetTokensInfoRecentlyUpdatedData,
  GetTokensInfoRecentlyUpdatedError,
  GetTokensInfoRecentlyUpdatedResponse,
  GetSimpleNetworksByNetworkTokenPriceByAddressesData,
  GetSimpleNetworksByNetworkTokenPriceByAddressesError,
  GetSimpleNetworksByNetworkTokenPriceByAddressesResponse,
} from './types.gen'

export const client = createClient(createConfig())

/**
 * Get OHLCV data of a pool, up to 6 months ago. Empty response if there is no earlier data available.
 */
export const getNetworksByNetworkPoolsByPoolAddressOhlcvByTimeframe = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    GetNetworksByNetworkPoolsByPoolAddressOhlcvByTimeframeData,
    ThrowOnError
  >
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkPoolsByPoolAddressOhlcvByTimeframeResponse,
    GetNetworksByNetworkPoolsByPoolAddressOhlcvByTimeframeError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}',
  })
}

/**
 * Get list of supported dexes on a network
 */
export const getNetworksByNetworkDexes = <ThrowOnError extends boolean = false>(
  options: Options<GetNetworksByNetworkDexesData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkDexesResponse,
    GetNetworksByNetworkDexesError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/dexes',
  })
}

/**
 * Get list of supported networks
 */
export const getNetworks = <ThrowOnError extends boolean = false>(
  options?: Options<GetNetworksData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksResponse,
    GetNetworksError,
    ThrowOnError
  >({
    ...options,
    url: '/networks',
  })
}

/**
 * Get trending pools across all networks
 */
export const getNetworksTrendingPools = <ThrowOnError extends boolean = false>(
  options?: Options<GetNetworksTrendingPoolsData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksTrendingPoolsResponse,
    GetNetworksTrendingPoolsError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/trending_pools',
  })
}

/**
 * Get trending pools on a network
 */
export const getNetworksByNetworkTrendingPools = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetNetworksByNetworkTrendingPoolsData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkTrendingPoolsResponse,
    GetNetworksByNetworkTrendingPoolsError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/trending_pools',
  })
}

/**
 * Get specific pool on a network
 */
export const getNetworksByNetworkPoolsByAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetNetworksByNetworkPoolsByAddressData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkPoolsByAddressResponse,
    GetNetworksByNetworkPoolsByAddressError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/pools/{address}',
  })
}

/**
 * Get multiple pools on a network
 */
export const getNetworksByNetworkPoolsMultiByAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetNetworksByNetworkPoolsMultiByAddressesData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkPoolsMultiByAddressesResponse,
    GetNetworksByNetworkPoolsMultiByAddressesError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/pools/multi/{addresses}',
  })
}

/**
 * Get top pools on a network
 */
export const getNetworksByNetworkPools = <ThrowOnError extends boolean = false>(
  options: Options<GetNetworksByNetworkPoolsData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkPoolsResponse,
    GetNetworksByNetworkPoolsError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/pools',
  })
}

/**
 * Get top pools on a network's dex
 */
export const getNetworksByNetworkDexesByDexPools = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetNetworksByNetworkDexesByDexPoolsData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkDexesByDexPoolsResponse,
    GetNetworksByNetworkDexesByDexPoolsError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/dexes/{dex}/pools',
  })
}

/**
 * Get top pools for a token
 * contains special field `token_price_usd` representing price of requested token
 */
export const getNetworksByNetworkTokensByTokenAddressPools = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    GetNetworksByNetworkTokensByTokenAddressPoolsData,
    ThrowOnError
  >
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkTokensByTokenAddressPoolsResponse,
    GetNetworksByNetworkTokensByTokenAddressPoolsError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/tokens/{token_address}/pools',
  })
}

/**
 * Get latest pools on a network
 */
export const getNetworksByNetworkNewPools = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetNetworksByNetworkNewPoolsData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkNewPoolsResponse,
    GetNetworksByNetworkNewPoolsError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/new_pools',
  })
}

/**
 * Get latest pools across all networks
 */
export const getNetworksNewPools = <ThrowOnError extends boolean = false>(
  options?: Options<GetNetworksNewPoolsData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksNewPoolsResponse,
    GetNetworksNewPoolsError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/new_pools',
  })
}

/**
 * Search for pools on a network
 */
export const getSearchPools = <ThrowOnError extends boolean = false>(
  options?: Options<GetSearchPoolsData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetSearchPoolsResponse,
    GetSearchPoolsError,
    ThrowOnError
  >({
    ...options,
    url: '/search/pools',
  })
}

/**
 * Get last 300 trades in past 24 hours from a pool
 */
export const getNetworksByNetworkPoolsByPoolAddressTrades = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    GetNetworksByNetworkPoolsByPoolAddressTradesData,
    ThrowOnError
  >
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkPoolsByPoolAddressTradesResponse,
    GetNetworksByNetworkPoolsByPoolAddressTradesError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/pools/{pool_address}/trades',
  })
}

/**
 * Get specific token on a network
 */
export const getNetworksByNetworkTokensByAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetNetworksByNetworkTokensByAddressData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkTokensByAddressResponse,
    GetNetworksByNetworkTokensByAddressError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/tokens/{address}',
  })
}

/**
 * Get multiple tokens on a network
 */
export const getNetworksByNetworkTokensMultiByAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetNetworksByNetworkTokensMultiByAddressesData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkTokensMultiByAddressesResponse,
    GetNetworksByNetworkTokensMultiByAddressesError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/tokens/multi/{addresses}',
  })
}

/**
 * Get specific token info on a network
 */
export const getNetworksByNetworkTokensByAddressInfo = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetNetworksByNetworkTokensByAddressInfoData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkTokensByAddressInfoResponse,
    GetNetworksByNetworkTokensByAddressInfoError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/tokens/{address}/info',
  })
}

/**
 * Get pool tokens info on a network
 */
export const getNetworksByNetworkPoolsByPoolAddressInfo = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetNetworksByNetworkPoolsByPoolAddressInfoData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetNetworksByNetworkPoolsByPoolAddressInfoResponse,
    GetNetworksByNetworkPoolsByPoolAddressInfoError,
    ThrowOnError
  >({
    ...options,
    url: '/networks/{network}/pools/{pool_address}/info',
  })
}

/**
 * Get most recently updated 100 tokens info across all networks
 */
export const getTokensInfoRecentlyUpdated = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<GetTokensInfoRecentlyUpdatedData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetTokensInfoRecentlyUpdatedResponse,
    GetTokensInfoRecentlyUpdatedError,
    ThrowOnError
  >({
    ...options,
    url: '/tokens/info_recently_updated',
  })
}

/**
 * Get current USD prices of multiple tokens on a network
 */
export const getSimpleNetworksByNetworkTokenPriceByAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    GetSimpleNetworksByNetworkTokenPriceByAddressesData,
    ThrowOnError
  >
) => {
  return (options?.client ?? client).get<
    GetSimpleNetworksByNetworkTokenPriceByAddressesResponse,
    GetSimpleNetworksByNetworkTokenPriceByAddressesError,
    ThrowOnError
  >({
    ...options,
    url: '/simple/networks/{network}/token_price/{addresses}',
  })
}