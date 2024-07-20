let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, 𝙀𝙎𝙏𝘼𝙎 𝘿𝙀 𝙎𝙐𝙀𝙍𝙏𝙀 , 𝙏𝙀 𝙏𝙊𝘾𝘼 𝘿𝙊𝙉𝘼𝙍 𝙎𝘼𝙇𝘼 , 𝙀𝙉 𝘾𝘼𝙎𝙊 𝘿𝙀 𝙌𝙐𝙀 𝙃𝘼𝙄𝙂𝘼 𝙎𝙀𝙂𝙐𝙉𝘿𝘼 𝙇𝙀 𝙏𝙊𝘾𝘼 𝘿𝙊𝙉𝘼𝙍 ${toM(b)}, NUB*

*${toM(a)},𝙔𝙊𝙐 '𝙍𝙀 𝙄𝙉 𝙇𝙐𝘾𝙆, 𝙄𝙏'𝙎 𝙔𝙊𝙐𝙍 𝙏𝙐𝙍𝙉 𝙏𝙊 𝘿𝙊𝙉𝘼𝙏𝙀 𝘼 𝙍𝙊𝙊𝙈, 𝙄𝙉 𝘾𝘼𝙎𝙀 𝙏𝙃𝙀𝙍𝙀 𝙄𝙎  𝘼 𝙎𝙀𝘾𝙊𝙉𝘿 𝙊𝙉𝙀, 𝙄𝙏'𝙎 𝙔𝙊𝙐𝙍 𝙏𝙐𝙍𝙉 𝙏𝙊 𝘿𝙊𝙉𝘼𝙏𝙀 𝙏𝙊 ${toM(b)}, NUB*`, null, {
mentions: [a, b]
  
})}
handler.help = ['donarsala']
handler.tags = ['main', 'fun']
handler.command = ['donarsala','donarsala']
handler.group = true
export default handler
