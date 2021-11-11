let { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
	let nani = 'https://telegra.ph/file/0ee3b8764de7285d66724.jpg' 
  let chats = Halo ${conn.getName(m.sender)}

Saya BotolBotZ, Bot WhatsApp Yang Membantu Kamu Untuk Mempermudah Sesuatu Seperti Membuat Stiker Dan Lainnya, Ada Butuh Info Dariku?
  let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), text.trim(), '', 'DISLIKE', '.allmenu', 'LIKE, '.owner', m)
}
handler.help = ['p']
handler.tags = ['owner']
handler.command = /^(p)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

