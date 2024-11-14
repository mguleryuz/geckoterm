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
/**
 *
 * @export
 * @interface TradeAttributes
 */
export interface TradeAttributes {
  /**
   *
   * @type {number}
   * @memberof TradeAttributes
   */
  blockNumber?: number
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  blockTimestamp?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  txHash?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  txFromAddress?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  fromTokenAmount?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  toTokenAmount?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  priceFromInCurrencyToken?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  priceToInCurrencyToken?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  priceFromInUsd?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  priceToInUsd?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  kind?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  volumeInUsd?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  fromTokenAddress?: string
  /**
   *
   * @type {string}
   * @memberof TradeAttributes
   */
  toTokenAddress?: string
}

/**
 * Check if a given object implements the TradeAttributes interface.
 */
export function instanceOfTradeAttributes(
  value: object
): value is TradeAttributes {
  return true
}

export function TradeAttributesFromJSON(json: any): TradeAttributes {
  return TradeAttributesFromJSONTyped(json, false)
}

export function TradeAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TradeAttributes {
  if (json == null) {
    return json
  }
  return {
    blockNumber:
      json['block_number'] == null ? undefined : json['block_number'],
    blockTimestamp:
      json['block_timestamp'] == null ? undefined : json['block_timestamp'],
    txHash: json['tx_hash'] == null ? undefined : json['tx_hash'],
    txFromAddress:
      json['tx_from_address'] == null ? undefined : json['tx_from_address'],
    fromTokenAmount:
      json['from_token_amount'] == null ? undefined : json['from_token_amount'],
    toTokenAmount:
      json['to_token_amount'] == null ? undefined : json['to_token_amount'],
    priceFromInCurrencyToken:
      json['price_from_in_currency_token'] == null
        ? undefined
        : json['price_from_in_currency_token'],
    priceToInCurrencyToken:
      json['price_to_in_currency_token'] == null
        ? undefined
        : json['price_to_in_currency_token'],
    priceFromInUsd:
      json['price_from_in_usd'] == null ? undefined : json['price_from_in_usd'],
    priceToInUsd:
      json['price_to_in_usd'] == null ? undefined : json['price_to_in_usd'],
    kind: json['kind'] == null ? undefined : json['kind'],
    volumeInUsd:
      json['volume_in_usd'] == null ? undefined : json['volume_in_usd'],
    fromTokenAddress:
      json['from_token_address'] == null
        ? undefined
        : json['from_token_address'],
    toTokenAddress:
      json['to_token_address'] == null ? undefined : json['to_token_address'],
  }
}

export function TradeAttributesToJSON(value?: TradeAttributes | null): any {
  if (value == null) {
    return value
  }
  return {
    block_number: value['blockNumber'],
    block_timestamp: value['blockTimestamp'],
    tx_hash: value['txHash'],
    tx_from_address: value['txFromAddress'],
    from_token_amount: value['fromTokenAmount'],
    to_token_amount: value['toTokenAmount'],
    price_from_in_currency_token: value['priceFromInCurrencyToken'],
    price_to_in_currency_token: value['priceToInCurrencyToken'],
    price_from_in_usd: value['priceFromInUsd'],
    price_to_in_usd: value['priceToInUsd'],
    kind: value['kind'],
    volume_in_usd: value['volumeInUsd'],
    from_token_address: value['fromTokenAddress'],
    to_token_address: value['toTokenAddress'],
  }
}
