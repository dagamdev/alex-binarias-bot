import { type Bot } from "grammy";

export default function startCommand (bot: Bot) {
  bot.command('start', ctx => {
    ctx.reply(`Hola, soy un bot desarrollado para el grupo de Alex Bienarias`, {
      reply_parameters: {
        message_id: ctx.msgId
      }
    })
  })
}