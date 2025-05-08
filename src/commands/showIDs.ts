import { type Bot } from "grammy"
import { ME_ID } from "../utils/variables"

export default function showIDs (bot: Bot) {
  bot.command('showIDs', async ctx => {
    if (!ctx.from) return
    const isMe = ctx.from.id !== ME_ID

    if (ctx.chat.type !== 'private') {
      const member = await ctx.getChatMember(ctx.from.id)
      if (isMe || member.status === 'member') return
    }

    let text = `<b>Chat ID</b>: <code>${ctx.chatId}</code>`

    if (ctx.message?.message_thread_id) {
      text += `\n<b>Thread ID</b>: <code>${ctx.message.message_thread_id}</code>`
    }
    
    if (ctx.from?.id) {
      text = `<b>User ID</b>: <code>${ctx.from?.id}</code>\n${text}`
    }

    ctx.reply(text, {
      parse_mode: 'HTML',
      reply_parameters: ctx.message?.message_id ? {
        message_id: ctx.message?.message_id
      } : undefined,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Eliminar',
              callback_data: 'deleteShowIDs'
            }
          ]
        ]
      }
    })
  })
}