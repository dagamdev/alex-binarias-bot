import { type Bot } from "grammy"
import { groupId } from "../utils/variables"

export default function messageMiddleware (bot: Bot) {
  bot.on('message', async ctx => {
    const msg = ctx.message
    
    if (msg.left_chat_member) return
    if (ctx.chatId !== groupId) return
  
    if (msg.new_chat_members) {
      const newMembers = msg.new_chat_members
      await bot.api.sendMessage(groupId, `🎉 <b>¡Bienvenido${newMembers.length > 1 ? 's' : ''} ${msg.new_chat_members.map(member => `@${member.username || member.first_name}`).join(', ')} al grupo VIP!</b> 🎉\nAquí encontrarás clases en vivo y videos grabados 📚🎥\nTodo el contenido estará guardado en los mensajes fijados, así que si quieres ver una clase en específico, solo búscala allí 🔍✨\n\n¡Disfruta el aprendizaje y sácale el máximo provecho! 😄🔥`, {
        parse_mode: 'HTML'
      })
      await bot.api.sendMessage(groupId, `🗓️ <b>Las clases comienzan el 1 de junio</b>, pero mientras tanto puedes ir subiendo tus <b>operativas</b> y las iremos <b>analizando juntos</b>🧠💬`, {
        parse_mode: 'HTML'
      })
      return
    }
  })
}