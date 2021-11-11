let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TRI:* [082273112644]
┣➥ *Gopay:* [082273112644]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/082273112644*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler