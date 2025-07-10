import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: {
    path: 'https://api.geckoterminal.com/docs/v2/swagger.json',
  },

  output: {
    path: 'src/api/build',
    // Automatically format the generated files using Prettier
    format: 'prettier',
    // Keep the output folder clean between runs
    case: 'snake_case',
    // Clean the output folder between runs
    clean: true,
  },

  /**
   * Generate a lightweight Fetch-based client as an SDK.
   */
  plugins: ['@hey-api/client-fetch'],
})
