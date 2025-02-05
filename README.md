<div align="center">

[![npm latest package][npm-latest-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![License][license-image]][license-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![Follow on Twitter][twitter-image]][twitter-url]

</div>

## CoinGecko Terminal / TS SDK

OpenAPI + TypeScript + Type Safe API

## Summary

This package provides a type-safe SDK for interacting with the CoinGecko Terminal API. The main feature is a strongly typed API client generated using OpenAPI 3 specs. The repository is open source and hosted at [In This GitHub Repository](https://github.com/mguleryuz/geckoterm).

Check out the [Changelog](./CHANGELOG.md) to see what changed in the latest releases.

**Important Note**: This SDK only Support ESM (ECMAScript Modules).

## Quick Start

### Install the SDK

You can install the CoinGecko Terminal SDK using Bun:

```bash
bun add geckoterm
```

### Use the SDK

Here's an example of how to use the SDK to fetch the available networks:

```typescript
import { getNetworks, setGeckotermAPIConfg } from 'geckoterm'

// Set the config for the client with the Base URL and API key
setGeckotermAPIConfg({
  baseUrl: 'https://api.geckoterminal.com/api/v2',
  // Replace with your API key / if you have one
  headers: {
    Authorization: `Bearer ${process.env.GECKOTERM_API_KEY}`,
  },
})

// Use the internal method to call the API
const response = await getNetworks({
  query: {
    page: 1,
  },
})

// Log the response
console.log('API response data:', response.data)
```

## Install dependencies for Contributions

### Prerequisites

Before running the SDK, ensure you have the following dependencies installed:

- **Bun** (optional, but recommended): Used for runtime and testing.

You can install the required dependencies as follows:

#### Install Bun (for testing primitives, not required for the SDK itself)

```bash
# Supported on macOS, Linux, and WSL
curl -fsSL https://bun.sh/install | bash

# Upgrade Bun occasionally
bun upgrade
```

## Compile API Client

To generate the TypeScript client from the OpenAPI spec, run the following commands:

```bash
# Step 1: Install dependencies
bun install

# Step 2: Compile the API client
bun run compile:api
```

The `compile:api` command performs the following steps:

- Uses the @hey-api/openapi-ts Generator CLI to generate the TypeScript API client from the OpenAPI 3 spec.
- Formats the generated code using Prettier.

## How to make a release

**For the Maintainer**: Add `NPM_TOKEN` to the GitHub Secrets.

1. Open a Pull Request with your changes.
2. Merge the PR into the `main` branch.
3. Checkout the `main` branch locally:
   ```bash
   git checkout main
   ```
4. Pull the latest changes:
   ```bash
   git pull
   ```
5. Run the release command:
   ```bash
   bun release: '' | alpha | beta -- --release-as minor | major
   ```
6. Verify everything looks good (e.g., in `CHANGELOG.md`).
7. Follow the instructions provided by the release log.
8. Done!

## Summary

This SDK provides a type-safe interface for interacting with the [CoinGecko Terminal API](https://github.com/mguleryuz/geckoterm). It uses OpenAPI to generate a fully typed API client, making it easier to work with the API in TypeScript.

Check out the [GitHub repository](https://github.com/mguleryuz/geckoterm) for more information.

[ci-image]: https://badgen.net/github/checks/mguleryuz/geckoterm/main?label=ci
[ci-url]: https://github.com/mguleryuz/geckoterm/actions/workflows/ci.yaml
[npm-url]: https://npmjs.org/package/geckoterm
[twitter-url]: https://twitter.com/GeckoTerminal
[twitter-image]: https://img.shields.io/twitter/follow/GeckoTerminal.svg?label=follow+GeckoTerminal
[license-image]: https://img.shields.io/badge/License-MIT-blue
[license-url]: ./LICENSE
[npm-latest-image]: https://img.shields.io/npm/v/geckoterm/latest.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/geckoterm.svg
