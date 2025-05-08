import { Bot } from "grammy"
import { BOT_TOKEN } from "./utils/config"

export const bot = new Bot(BOT_TOKEN)

bot.catch(error => {
  console.error('Error in botCatch: ', error)
})