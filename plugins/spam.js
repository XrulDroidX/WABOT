const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dispam', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    if (text.startsWith('+')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)
    if (text.startsWith('@')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam2 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam3 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam4 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam5 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam6 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam7 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam8 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam9 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam10 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam11 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam12 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam13 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam14 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam15 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam16 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam17 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam18 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam19 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`
    let spam20 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~WibuBotZ`

    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam2, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam3, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam4, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam5, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam6, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam7, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam8, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam9, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam10, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam11, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam112, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam13, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam14, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam15, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam16, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam117, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam18, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam19, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam20, MessageType.text)

    let logs = `[!] Berhasil mengirim spam wa ke nomor ${korban} 20 kali`
    conn.reply(m.chat, logs, m)
}
handler.help = ['spam <nomor|pesan>', 'spamwa <nomor|pesan>']
handler.tags = ['premium', 'spam']
handler.command = /^(spam|spamwa)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
