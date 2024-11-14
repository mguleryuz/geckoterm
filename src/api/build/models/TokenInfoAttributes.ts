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
 * @interface TokenInfoAttributes
 */
export interface TokenInfoAttributes {
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  address: string
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  symbol: string
  /**
   *
   * @type {number}
   * @memberof TokenInfoAttributes
   */
  decimals?: number
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  coingeckoCoinId: string | null
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  imageUrl: string | null
  /**
   *
   * @type {Array<string>}
   * @memberof TokenInfoAttributes
   */
  websites: Array<string>
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  description: string | null
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  discordUrl: string | null
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  telegramHandle: string | null
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  twitterHandle: string | null
  /**
   *
   * @type {number}
   * @memberof TokenInfoAttributes
   */
  gtScore: number | null
  /**
   *
   * @type {string}
   * @memberof TokenInfoAttributes
   */
  metadataUpdatedAt?: string | null
}

/**
 * Check if a given object implements the TokenInfoAttributes interface.
 */
export function instanceOfTokenInfoAttributes(
  value: object
): value is TokenInfoAttributes {
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('address' in value) || value['address'] === undefined) return false
  if (!('symbol' in value) || value['symbol'] === undefined) return false
  if (!('coingeckoCoinId' in value) || value['coingeckoCoinId'] === undefined)
    return false
  if (!('imageUrl' in value) || value['imageUrl'] === undefined) return false
  if (!('websites' in value) || value['websites'] === undefined) return false
  if (!('description' in value) || value['description'] === undefined)
    return false
  if (!('discordUrl' in value) || value['discordUrl'] === undefined)
    return false
  if (!('telegramHandle' in value) || value['telegramHandle'] === undefined)
    return false
  if (!('twitterHandle' in value) || value['twitterHandle'] === undefined)
    return false
  if (!('gtScore' in value) || value['gtScore'] === undefined) return false
  return true
}

export function TokenInfoAttributesFromJSON(json: any): TokenInfoAttributes {
  return TokenInfoAttributesFromJSONTyped(json, false)
}

export function TokenInfoAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TokenInfoAttributes {
  if (json == null) {
    return json
  }
  return {
    name: json['name'],
    address: json['address'],
    symbol: json['symbol'],
    decimals: json['decimals'] == null ? undefined : json['decimals'],
    coingeckoCoinId: json['coingecko_coin_id'],
    imageUrl: json['image_url'],
    websites: json['websites'],
    description: json['description'],
    discordUrl: json['discord_url'],
    telegramHandle: json['telegram_handle'],
    twitterHandle: json['twitter_handle'],
    gtScore: json['gt_score'],
    metadataUpdatedAt:
      json['metadata_updated_at'] == null
        ? undefined
        : json['metadata_updated_at'],
  }
}

export function TokenInfoAttributesToJSON(
  value?: TokenInfoAttributes | null
): any {
  if (value == null) {
    return value
  }
  return {
    name: value['name'],
    address: value['address'],
    symbol: value['symbol'],
    decimals: value['decimals'],
    coingecko_coin_id: value['coingeckoCoinId'],
    image_url: value['imageUrl'],
    websites: value['websites'],
    description: value['description'],
    discord_url: value['discordUrl'],
    telegram_handle: value['telegramHandle'],
    twitter_handle: value['twitterHandle'],
    gt_score: value['gtScore'],
    metadata_updated_at: value['metadataUpdatedAt'],
  }
}
