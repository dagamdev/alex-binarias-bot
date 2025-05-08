import 'dotenv/config'

export const BOT_TOKEN = process.env.BOT_TOKEN || ''
export const DB_URL = process.env.DB_URL ?? 'connection'
export const IS_DEV = process.env.MODE === 'dev'