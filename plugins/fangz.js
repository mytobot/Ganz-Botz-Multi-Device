let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/kanna?apikey=SGWN', '', '', m)
}
handler.help = ['arip']
handler.tags = ['anime']
handler.command = /^(arip)$/i

export default handler 