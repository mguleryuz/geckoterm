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

import { mapValues } from '../runtime'
import type { Trade } from './Trade'
import { TradeFromJSON, TradeFromJSONTyped, TradeToJSON } from './Trade'

/**
 *
 * @export
 * @interface NetworksNetworkPoolsPoolAddressTradesGet200Response
 */
export interface NetworksNetworkPoolsPoolAddressTradesGet200Response {
  /**
   *
   * @type {Array<Trade>}
   * @memberof NetworksNetworkPoolsPoolAddressTradesGet200Response
   */
  data?: Array<Trade>
}

/**
 * Check if a given object implements the NetworksNetworkPoolsPoolAddressTradesGet200Response interface.
 */
export function instanceOfNetworksNetworkPoolsPoolAddressTradesGet200Response(
  value: object
): value is NetworksNetworkPoolsPoolAddressTradesGet200Response {
  return true
}

export function NetworksNetworkPoolsPoolAddressTradesGet200ResponseFromJSON(
  json: any
): NetworksNetworkPoolsPoolAddressTradesGet200Response {
  return NetworksNetworkPoolsPoolAddressTradesGet200ResponseFromJSONTyped(
    json,
    false
  )
}

export function NetworksNetworkPoolsPoolAddressTradesGet200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): NetworksNetworkPoolsPoolAddressTradesGet200Response {
  if (json == null) {
    return json
  }
  return {
    data:
      json['data'] == null
        ? undefined
        : (json['data'] as Array<any>).map(TradeFromJSON),
  }
}

export function NetworksNetworkPoolsPoolAddressTradesGet200ResponseToJSON(
  value?: NetworksNetworkPoolsPoolAddressTradesGet200Response | null
): any {
  if (value == null) {
    return value
  }
  return {
    data:
      value['data'] == null
        ? undefined
        : (value['data'] as Array<any>).map(TradeToJSON),
  }
}
