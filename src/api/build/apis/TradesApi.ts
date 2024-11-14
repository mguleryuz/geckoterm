/* tslint:disable */
/* eslint-disable */
/**
 * GeckoTerminal API V2
 * GeckoTerminal Public API endpoints.  ## Beta Release The API is in its Beta release, and is subject to frequent changes. However, we aim to provide minimal disruption, and setting the request Version would help avoid unexpected issues.  **Please subscribe via [this form](https://forms.gle/jSMu4jLQBXeiVD1U9) to be notified of important API updates.**  ## Base URL All endpoints below use the base URL: `https://api.geckoterminal.com/api/v2`  ## Versioning It is recommended to set the API version via the `Accept` header. The current version is **20230302**.  For example, to specify the current version, set header `Accept: application/json;version=20230302`.  _If no version is specified, the latest version will be used._  ## Data Freshness All endpoint tags are cached for **1 minute**  All data is updated **roughly 10 to 20 seconds** after a transaction is finalized on the blockchain, subject to the network\'s availability.  ## Rate Limit Our free API is limited to **30 calls/minute**. Should you require a higher rate limit, you may subscribe to any CoinGecko API paid plan to access higher rate limit for GeckoTerminal endpoints (known as /onchain endpoints) or learn more at [CoinGecko](https://www.coingecko.com/en/api/pricing).   To share with us your feedback about the public API, let us know [here](https://forms.gle/jSMu4jLQBXeiVD1U9)!
 *
 * The version of the OpenAPI document: v2-beta
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime'
import type {
  ErrorsObject,
  NetworksNetworkPoolsPoolAddressTradesGet200Response,
} from '../models/index'
import {
  ErrorsObjectFromJSON,
  ErrorsObjectToJSON,
  NetworksNetworkPoolsPoolAddressTradesGet200ResponseFromJSON,
  NetworksNetworkPoolsPoolAddressTradesGet200ResponseToJSON,
} from '../models/index'

export interface NetworksNetworkPoolsPoolAddressTradesGetRequest {
  network: string
  poolAddress: string
  tradeVolumeInUsdGreaterThan?: number
}

/**
 *
 */
export class TradesApi extends runtime.BaseAPI {
  /**
   * Get last 300 trades in past 24 hours from a pool
   */
  async networksNetworkPoolsPoolAddressTradesGetRaw(
    requestParameters: NetworksNetworkPoolsPoolAddressTradesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<
    runtime.ApiResponse<NetworksNetworkPoolsPoolAddressTradesGet200Response>
  > {
    if (requestParameters['network'] == null) {
      throw new runtime.RequiredError(
        'network',
        'Required parameter "network" was null or undefined when calling networksNetworkPoolsPoolAddressTradesGet().'
      )
    }

    if (requestParameters['poolAddress'] == null) {
      throw new runtime.RequiredError(
        'poolAddress',
        'Required parameter "poolAddress" was null or undefined when calling networksNetworkPoolsPoolAddressTradesGet().'
      )
    }

    const queryParameters: any = {}

    if (requestParameters['tradeVolumeInUsdGreaterThan'] != null) {
      queryParameters['trade_volume_in_usd_greater_than'] =
        requestParameters['tradeVolumeInUsdGreaterThan']
    }

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/networks/{network}/pools/{pool_address}/trades`
          .replace(
            `{${'network'}}`,
            encodeURIComponent(String(requestParameters['network']))
          )
          .replace(
            `{${'pool_address'}}`,
            encodeURIComponent(String(requestParameters['poolAddress']))
          ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      NetworksNetworkPoolsPoolAddressTradesGet200ResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get last 300 trades in past 24 hours from a pool
   */
  async networksNetworkPoolsPoolAddressTradesGet(
    requestParameters: NetworksNetworkPoolsPoolAddressTradesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<NetworksNetworkPoolsPoolAddressTradesGet200Response> {
    const response = await this.networksNetworkPoolsPoolAddressTradesGetRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }
}
