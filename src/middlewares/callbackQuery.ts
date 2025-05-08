import { type Bot } from "grammy";
import { ME_ID } from "../utils/variables";

export default function callbackQueryMiddleware (bot: Bot) {
  bot.on('callback_query', async ctx => {
    const { callbackQuery } = ctx
    if (callbackQuery.data === 'deleteShowIDs') {
      if (!ctx.from) return
      const isMe = ctx.from.id !== ME_ID
  
      if (ctx.chat?.type !== 'private') {
        const member = await ctx.getChatMember(ctx.from.id)
        if (isMe || member.status === 'member') return
      }

      ctx.deleteMessage()
    }
  })
}