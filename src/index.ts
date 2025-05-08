import { Bot } from "grammy"
import 'dotenv/config'
import { BOT_TOKEN, DB_URL } from "./utils/config"
import { connect } from "mongoose"
import { loadModules } from './lib/load'

const bot = new Bot(BOT_TOKEN)

process.on('unhandledRejection', (error) => {
  console.error('❓ Unhandled Rejection ', error)
})

;(async () => {
  await loadModules(bot, 'commands', __dirname)
  await loadModules(bot, 'middlewares', __dirname)

  bot.start({
    async onStart(botInfo) {
      console.log(`🤖 Bot ${botInfo.first_name} started successfully`)
  
      // try {
      //   await connect(DB_URL)
      //   console.log('🟢 Connected to the database')
      // } catch (error) {
      //   console.error('🔴 An error occurred while starting the bot', error)
      // }
    }
  })
})()
