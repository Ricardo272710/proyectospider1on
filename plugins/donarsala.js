let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, acabas de ganar sala*

  
})}
handler.help = ['donarsala']
handler.tags = ['main', 'fun']
handler.command = ['donarsala','donarsala']
handler.group = true
export default handler
