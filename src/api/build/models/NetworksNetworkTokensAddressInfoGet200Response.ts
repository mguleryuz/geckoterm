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
import type { TokenInfo } from './TokenInfo'
import {
  TokenInfoFromJSON,
  TokenInfoFromJSONTyped,
  TokenInfoToJSON,
} from './TokenInfo'

/**
 *
 * @export
 * @interface NetworksNetworkTokensAddressInfoGet200Response
 */
export interface NetworksNetworkTokensAddressInfoGet200Response {
  /**
   *
   * @type {TokenInfo}
   * @memberof NetworksNetworkTokensAddressInfoGet200Response
   */
  data?: TokenInfo
}

/**
 * Check if a given object implements the NetworksNetworkTokensAddressInfoGet200Response interface.
 */
export function instanceOfNetworksNetworkTokensAddressInfoGet200Response(
  value: object
): value is NetworksNetworkTokensAddressInfoGet200Response {
  return true
}

export function NetworksNetworkTokensAddressInfoGet200ResponseFromJSON(
  json: any
): NetworksNetworkTokensAddressInfoGet200Response {
  return NetworksNetworkTokensAddressInfoGet200ResponseFromJSONTyped(
    json,
    false
  )
}

export function NetworksNetworkTokensAddressInfoGet200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): NetworksNetworkTokensAddressInfoGet200Response {
  if (json == null) {
    return json
  }
  return {
    data: json['data'] == null ? undefined : json['data'],
  }
}

export function NetworksNetworkTokensAddressInfoGet200ResponseToJSON(
  value?: NetworksNetworkTokensAddressInfoGet200Response | null
): any {
  if (value == null) {
    return value
  }
  return {
    data: value['data'],
  }
}
