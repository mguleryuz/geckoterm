import fs from 'fs'

const SWAGGER_JSON_URL = 'https://api.geckoterminal.com/docs/v2/swagger.json'

export async function setSwaggerJson(INPUT_FILE: string) {
  const swaggerJson = await fetch(SWAGGER_JSON_URL)

  const json = await swaggerJson.json()

  fs.writeFileSync(INPUT_FILE, JSON.stringify(json, null, 2))
}
