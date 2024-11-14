<div align="center">

[![license](https://img.shields.io/badge/License-MIT-blue)](/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/geckoterm/latest.svg)](https://www.npmjs.com/package/geckoterm)
[![npm downloads](https://img.shields.io/npm/dm/geckoterm.svg)](https://www.npmjs.com/package/geckoterm)
[![Follow on Twitter](https://img.shields.io/twitter/follow/geckoterm.svg?label=follow+LUNARCRUSH)](https://twitter.com/GeckoTerminal)

</div>

## CoinGecko Terminal / TS SDK

OpenAPI + TypeScript + Type Safe API

## Summary

This package provides a type-safe SDK for interacting with the LunarCrush API. The main feature is a strongly typed API client generated using OpenAPI specs. The repository is open source and hosted at [In This GitHub Repository](https://github.com/mguleryuz/geckoterm).

Check out the [Changelog](./CHANGELOG.md) to see what changed in the latest releases.

**Important Note**: This SDK only Support ESM (ECMAScript Modules).

## Quick Start

### Install the SDK

You can install the LunarCrush SDK using Bun:

```bash
bun add geckoterm
```

### Use the SDK

Here's an example of how to use the SDK to fetch the latest data for Bitcoin:

```typescript
import { GeckotermAPIConfiguration, GeckotermAPI } from 'geckoterm'

// Set up the client with the API key
const config = new LunarCrushAPIConfiguration({
  basePath: 'https://api.geckoterminal.com/api/v2',
  // Replace with your API key / if you have one
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})

// Initialize the API client
const apiClient = new GeckotermAPI(config)

// Use the API client to call a method
const response = await apiClient.publicCoinsCoinV1Get({
  coin: '1',
})

// Log the response
console.log('API response:', response)
```

## Install dependencies for Contributions

### Prerequisites

Before running the SDK, ensure you have the following dependencies installed:

- **OpenAPI Generator CLI**: Used to generate the TypeScript API client.
- **Java**: Required to run the OpenAPI Generator CLI.
- **Bun** (optional): Used for testing.

You can install the required dependencies as follows:

#### Install OpenAPI Generator CLI

```bash
bun add -g @openapitools/openapi-generator-cli
```

#### Install Bun (for testing primitives, not required for the SDK itself)

```bash
# Supported on macOS, Linux, and WSL
curl -fsSL https://bun.sh/install | bash

# Upgrade Bun occasionally
bun upgrade
```

## Compile API Client

To generate the TypeScript client from the OpenAPI spec, run the following command:

```bash
bun run compile:api
```

The `compile:api` command performs the following steps:

- Uses the OpenAPI Generator CLI to generate the TypeScript API client from the OpenAPI 3 spec.
- Formats the generated code using Prettier.

### Prerequisites for `compile:api`

Ensure you have the following dependencies:

- **OpenAPI Generator CLI**
- **Java** (required by OpenAPI Generator CLI)

If you're on macOS or Linux, you can install Java using a package manager like `brew`:

```bash
brew install openjdk
```

After installing Java, make sure to set up the `JAVA_HOME` environment variable:

```bash
export JAVA_HOME=$(/usr/libexec/java_home)
```

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

This SDK provides a type-safe interface for interacting with the [LunarCrush API](https://github.com/mguleryuz/geckoterm). It uses OpenAPI to generate a fully typed API client, making it easier to work with the API in TypeScript.

Check out the [GitHub repository](https://github.com/mguleryuz/geckoterm) for more information.
