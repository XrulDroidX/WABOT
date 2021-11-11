let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/tag.webp')
conn.fakeReply(m.chat, stc, '6282273112644@s.whatsapp.net', '*Kenapa Tag Owner Saya*')
}
handler.customPrefix = /^(@6282273112644)$/i
handler.command = new RegExp

module.exports = handler
