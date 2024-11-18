import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

*〔🕷️SPIDER MAN BOT 🕸️〕

╭━〔SPIDER MAN 〕━⬣
┃ ACTIVO: SIEMPRE
┃   CREADORES:
┃   RICARDO
╰━━━━━━━━━━━⬣
╔═════════════════╗
┇➤ .menu/.comandos
╚═════════════════╝
➤MENU FREE FIRE , INTERACTUA CON LA BOT
★ 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 ★
┊➺ 🎫 .donarsala
┊➺ 🎟️ .sorteo 
┊➺ 🏝️ .𝘉𝘦𝘳𝘮𝘶𝘥𝘢
┊➺ 🏖️ .𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
┊➺ 🏜️ .𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
┊➺ 🏔️ .𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
┊➺ 🌋 .𝘈𝘭𝘱𝘦𝘴

★𝑽𝑬𝑹𝑺𝑼𝑺★
┊➺ 📝 .cuadrilista
┊➺ 📝 .hexalista
┊➺ 🗺️ .cuadrilatero
┊➺ 🗺️ .Exagonal
┊➺ 🗺️ .bermuda
★ 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 ★
┊➺ 🎮 .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘭𝘬
┊➺ 🎮 .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
┊➺ 🎮 .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2

★ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 ★
┊➺ 🛡️ .𝘷𝘴𝟦 
┊➺ 🛡️ .𝘷𝘴𝟨
┊➺ 🛡️ .𝘷𝘴𝟪
┊➺ 🛡️ .𝘷𝘴𝟣𝟤
┊➺ 🛡️ .𝘷𝘴𝟣𝟨
┊➺ 🛡️ .𝘷𝘴𝟤𝟢
┊➺ 🛡️ .𝘷𝘴𝟤𝟦
┊➺ 🛡️ .𝘴𝘤𝘳𝘪𝘮
┊➺ 🛡️ .s𝘤𝘳𝘪𝘮frem
┊➺ 🛡️ .𝘨𝘶𝘦𝘳𝘳𝘢
┃💄➺  .Fem4
┃💄➺  .Fem6
┃💄➺  .FemInterna4
┃💄➺  .FemInterna6
┃🛡️➺  .MascInterna4
┃🛡️➺  .MascInterna6
┃💄➺  .Mixto4
┃💄➺  .Mixto6
┃💄➺  .MixtoInterna4
┃💄➺  .MixtoInterna6
┃💄➺  .guerra
┃💄➺  .reglasclk
┃💄➺  .apos
┃💄➺  .Ficha / jugador
 
★ 𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍 ★
┊➺ 🧭 .𝘩𝘰𝘳𝘢𝘳𝘪𝘰
┊➺ 🤖 .𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 🎧 .𝘺𝘵𝘴 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔍 .𝘨𝘰𝘰𝘨𝘭𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔍 .𝘸𝘪𝘬𝘪𝘱𝘦𝘥𝘪𝘢 𝘵𝘦𝘹𝘵𝘰
┊➺ ⚖️ .𝘵𝘳𝘢𝘥𝘶𝘤𝘪𝘳 𝘵𝘦𝘹𝘵𝘰
┊➺ 🛰️ .𝘤𝘭𝘪𝘮𝘢 𝘵𝘶𝘤𝘪𝘶𝘥𝘢𝘥

★𝑯𝑨𝑪𝑬𝑹 - 𝑳𝑶𝑮𝑶𝑺★
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘤𝘰𝘳𝘢𝘻𝘰𝘯 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘤𝘩𝘳𝘪𝘴𝘵𝘮𝘢𝘴 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘢𝘳𝘦𝘫𝘢 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘭𝘪𝘵𝘤𝘩 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘴𝘢𝘥 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘢𝘮𝘪𝘯𝘨 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘴𝘰𝘭𝘪𝘵𝘢𝘳𝘪𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘥𝘳𝘢𝘨𝘰𝘯𝘣𝘢𝘭𝘭 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘯𝘦𝘰𝘯 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘢𝘵𝘪𝘵𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘤𝘩𝘪𝘤𝘢𝘨𝘢𝘮𝘦𝘳 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘢𝘳𝘮𝘺 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘯𝘢𝘳𝘶𝘵𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘧𝘶𝘵𝘶𝘳𝘪𝘴𝘵𝘢 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘯𝘶𝘣𝘦 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘢𝘯𝘨𝘦𝘭 (texto) 
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘤𝘪𝘦𝘭𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘳𝘢𝘧𝘧𝘪𝘵𝘪3𝘥 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘮𝘢𝘵𝘳𝘪𝘹 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘩𝘰𝘳𝘳𝘰𝘳 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘢𝘭𝘢𝘴 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘶𝘦𝘳𝘳𝘦𝘳𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨𝘧𝘦𝘮 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰lol (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘢𝘮𝘰𝘯𝘨𝘶𝘴 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘱𝘭𝘢𝘺𝘦𝘳 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘧𝘧 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘵𝘪𝘨𝘦𝘳 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘪𝘯𝘵𝘳𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘨𝘢𝘮𝘪𝘯𝘨 (texto)

▸▸ 𝙀𝙓𝙋 𝙅𝙐𝙀𝙂𝙊𝙎 ◂◂
│ ┊➺ ♦️.𝘯𝘪𝘷𝘦𝘭
│ ┊➺ ⚖️ .𝘣𝘢𝘭𝘢𝘯𝘤𝘦
│ ┊➺ ⚖️ .𝘣𝘢𝘭𝘢𝘯𝘤𝘦2
│ ┊➺ 💎 .𝘮𝘪𝘯𝘢𝘳
│ ┊➺ 💎 .𝘮𝘪𝘯𝘢𝘳2
│ ┊➺ 💎 .𝘮𝘪𝘯𝘢𝘳3
│ ┊➺ 🧨 .𝘤𝘭𝘢𝘪𝘮
│ ┊➺ 🔫 .𝘳𝘰𝘣𝘢𝘳 @𝘵𝘢𝘨
│ ┊➺ 🎁 .𝘤𝘰𝘧𝘳𝘦
│ ┊➺ 🛒 .𝘣𝘶𝘺 𝘤𝘢𝘯𝘵𝘪𝘥𝘢𝘥
│ ┊➺ 💸 .𝘵𝘳𝘢𝘯𝘴𝘧𝘦𝘳
│ ┊➺ 🎰 .𝘢𝘱𝘰𝘴𝘵𝘢𝘳
│ ┊➺ 📉 .𝘤𝘩𝘢𝘮𝘣𝘦𝘢𝘳 𝘰 .𝘸𝘰𝘳𝘬
│ ┊➺ 💎 .𝘥𝘢𝘳𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴
│ ┊➺ 📈 .𝘥𝘢𝘳𝘹𝘱
│ ┊➺ 🪙 .𝘥𝘢𝘳𝘤𝘰𝘪𝘯𝘴
│ ┊➺ 💵 .𝘥𝘢𝘳𝘥𝘰𝘭𝘢𝘳𝘦𝘴

▸▸ 𝙈𝙄𝙉𝙄𝙅𝙐𝙀𝙂𝙊𝙎 ◂◂

▸▸ 𝙋𝙊𝙍𝙉𝙊 𝙍𝘼𝙉𝘿𝙊𝙈 ◂◂
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘭𝘰𝘭𝘪
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘧𝘰𝘰𝘵
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘢𝘴𝘴
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘣𝘥𝘴𝘮
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘤𝘶𝘮
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘦𝘳𝘰
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘧𝘦𝘮𝘥𝘰𝘮
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘧𝘰𝘰𝘵
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘨𝘭𝘢𝘴𝘴
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘰𝘳𝘨𝘺
│ ┊➺ 🔞 .𝘺𝘶𝘳𝘪
│ ┊➺ 🔞 .𝘺𝘶𝘳𝘪2
│ ┊➺ 🔞 .𝘺𝘶𝘳𝘪2
│ ┊➺ 🔞 .𝘺𝘢𝘰𝘪
│ ┊➺ 🔞 .𝘺𝘢𝘰𝘪2
│ ┊➺ 🔞 .𝘱𝘢𝘯𝘵𝘪𝘦𝘴
│ ┊➺ 🔞 .𝘵𝘦𝘵𝘢𝘴
│ ┊➺ 🔞 .𝘣𝘰𝘰𝘵𝘺
│ ┊➺ 🔞 .𝘦𝘤𝘤𝘩𝘪
│ ┊➺ 🔞 .𝘧𝘶𝘳𝘳𝘰
│ ┊➺ 🔞 .𝘩𝘦𝘯𝘵𝘢𝘪
│ ┊➺ 🔞 .𝘵𝘳𝘢𝘱𝘪𝘵𝘰
│ ┊➺ 🔞 .𝘪𝘮𝘢𝘨𝘦𝘯𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘴
│ ┊➺ 🔞 .𝘱𝘦𝘯𝘦
│ ┊➺ 🔞 .𝘱𝘰𝘳𝘯𝘰
│ ┊➺ 🔞 .𝘳𝘢𝘯𝘥𝘰𝘮𝘹𝘹𝘹
│ ┊➺ 🔞 .𝘱𝘦𝘤𝘩𝘰𝘴

▸▸ 𝘽𝙐𝙎𝘾𝘼𝙍 - 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ◂◂
│ ┊➺ 🛐 .𝘩𝘦𝘯𝘵𝘢𝘪𝘴𝘦𝘢𝘳𝘤𝘩
│ ┊➺ 🛐 .𝘱𝘢𝘤𝘬
│ ┊➺ 🛐 .𝘱𝘢𝘤𝘬2
│ ┊➺ 🛐 .𝘱𝘢𝘤𝘬3
│ ┊➺ 🛐 .𝘷𝘪𝘥𝘦𝘰𝘹𝘹𝘹
│ ┊➺ 🛐 .𝘷í𝘥𝘦𝘰𝘹𝘹𝘹
│ ┊➺ 🛐 .𝘷𝘪𝘥𝘦𝘰𝘹𝘹𝘹𝘭𝘦𝘴𝘣𝘪
│ ┊➺ 🛐 .𝘷𝘪𝘥𝘦𝘰𝘭𝘦𝘴𝘣𝘪𝘹𝘹𝘹
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘷𝘪𝘥
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢𝘷𝘪𝘥
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘷
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢𝘷
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘷
│ ┊➺ ♋️ .𝘹𝘯𝘹𝘹𝘴𝘦𝘢𝘳𝘤𝘩 𝘵𝘦𝘹𝘵𝘰
│ ┊➺ ♋️ .𝘹𝘯𝘹𝘹𝘥𝘭 𝘭𝘪𝘯𝘬
│ ┊➺ ♋️ .𝘹𝘷𝘪𝘥𝘦𝘰𝘴𝘥𝘭 𝘭𝘪𝘯𝘬
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

★ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ★
┊➺ 💡 .𝘪𝘮𝘢𝘨𝘦𝘯 𝘵𝘦𝘹𝘵𝘰
┊➺ 💡 .𝘧𝘢𝘤𝘦𝘣𝘰𝘰𝘬 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘮𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘱𝘭𝘢𝘺 𝘯𝘰𝘮𝘣𝘳𝘦 𝘰 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘢 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘷 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘮𝘢𝘹 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘢𝘥𝘰𝘤 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘷𝘥𝘰𝘤 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘮𝘢𝘹𝘥𝘰𝘤 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘵𝘪𝘬𝘵𝘰𝘬 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘰𝘱𝘦𝘯𝘪𝘢𝘮𝘢𝘨𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 💡 .𝘮𝘪𝘥𝘫𝘰𝘶𝘳𝘯𝘦𝘺 𝘵𝘦𝘹𝘵𝘰
┊➺ 💡 .𝘴𝘱𝘰𝘵𝘪𝘧𝘺 𝘵𝘦𝘹𝘵𝘰 𝘰 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘪𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘵𝘸𝘪𝘵𝘵𝘦𝘳𝘹 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘴𝘴𝘸𝘦𝘣 𝘦𝘯𝘭𝘢𝘤𝘦

★ 𝙂𝙍𝙐𝙋𝙊 ~ 𝙏𝙊𝘿𝙊𝙎 ★
┊➺ 🎗️ .𝘪𝘯𝘧𝘰𝘨𝘳𝘶𝘱𝘰
┊➺ 🎗️ .𝘢𝘥𝘮𝘪𝘯𝘴 𝘵𝘦𝘹𝘵𝘰
┊➺ 🎗️ .𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 🎗️ .𝘪𝘯𝘴𝘱𝘦𝘤𝘤𝘪𝘰𝘯𝘢𝘳 𝘦𝘯𝘭𝘢𝘤𝘦

★ 𝙂𝙍𝙐𝙋𝙊 ~ 𝘼𝘿𝙈𝙄𝙉𝙎 ★
┊➺ 🌋 .𝘥𝘦𝘭
┊➺ 🌋 .𝘯𝘰𝘵𝘪𝘧𝘪𝘤𝘢𝘳 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋 .𝘴𝘢𝘤𝘢𝘳 @𝘵𝘢𝘨
┊➺ 🌋 .𝘪𝘯𝘷𝘪𝘵𝘢𝘳 𝘯𝘶́𝘮𝘦𝘳𝘰
┊➺ 🌋 .𝘥𝘢𝘳𝘢𝘥𝘮𝘪𝘯 @𝘵𝘢𝘨
┊➺ 🌋 .𝘲𝘶𝘪𝘵𝘢𝘳𝘢𝘥𝘮𝘪𝘯 @𝘵𝘢𝘨
┊➺ 🌋 .𝘦𝘥𝘪𝘵𝘢𝘳𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋.𝘦𝘥𝘪𝘵𝘢𝘳𝘣𝘺𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋 .𝘤𝘢𝘮𝘣𝘪𝘢𝘳𝘥𝘦𝘴𝘤 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋 .𝘤𝘢𝘮𝘣𝘪𝘢𝘳𝘯𝘰𝘮𝘣𝘳𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋 .𝘤𝘢𝘮𝘣𝘪𝘢𝘳𝘱𝘱 𝘪𝘮𝘢𝘨𝘦𝘯
┊➺ 🌋 .𝘯𝘶𝘦𝘷𝘰𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 🌋 .𝘨𝘳𝘶𝘱𝘰 𝘢𝘣𝘳𝘪𝘳
┊➺ 🌋 .𝘨𝘳𝘶𝘱𝘰 𝘤𝘦𝘳𝘳𝘢𝘳
┊➺ 🌋 .𝘪𝘯𝘷𝘰𝘤𝘢𝘳
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭━〔 TREND TIK TOK 〕⬣
┃💃🕺➺ .Trendtiktok
╰━━━━━━━━━━━⬣

╭━〔 SPAM Y EDITS 〕⬣
┃🗂️➺ .SpamComu
╰━━━━━━━━━━━⬣

▸▸ 𝙈𝙄𝙉𝙄𝙅𝙐𝙀𝙂𝙊𝙎 ◂◂
┃🕷️ ➺ .Abrazo
┃🕷️ ➺ .Cumple
┃🕷️ ➺ .Follar
┃🕷️ ➺ .Huevo
┃🕷️ ➺ .Formartrio
┃🕷️ ➺ .Sorteo
┃🕷️ ➺ .Nalga
┃🕷️ ➺ .Sega
┃🕷️ ➺ .math |matemáticas
┃🕷️ ➺ .lanzar cara | cruz
┃🕷️ ➺ .ppt piedra : papel : tijera
┃🕷️ ➺ .tictactoe | ttt sala
┃🕷️ ➺ .deltictactoe | delttt
┃🕷️ ➺ .topgays
┃🕷️ ➺ .topotakus
┃🕷️ ➺ .toppajer@s
┃🕷️ ➺ .topput@s
┃🕷️ ➺ .topintegrantes
┃🕷️ ➺ .toplagrasa | topgrasa
┃🕷️ ➺ .toppanafrescos
┃🕷️ ➺ .topshiposters
┃🕷️ ➺ .toplindos | toplind@s
┃🕷️ ➺ .topfamosos/@s
┃🕷️ ➺ .topparejas
┃🕷️ ➺ .gay | gay @tag
┃🕷️ ➺ .gay2 nombre : @tag
┃🕷️ ➺ .lesbiana nombre : @tag
┃🕷️ ➺ .manca nombre : @tag
┃🕷️ ➺ .manco nombre : @tag
┃🕷️ ➺ .pajero nombre : @tag
┃🕷️ ➺ .pajera nombre : @tag
┃🕷️ ➺ .puto nombre : @tag
┃🕷️ ➺ .puta nombre : @tag
┃🕷️ ➺ .rata nombre : @tag
┃🕷️ ➺ .love nombre : @tag
┃🕷️ ➺ .doxear nombre : @tag
┃🕷️ ➺ .doxxeame
┃🕷️ ➺ .pregunta texto
┃🕷️ ➺ .apostar | slot cantidad
┃🕷️ ➺ .formarpareja
┃🕷️ ➺ .dado
┃🕷️ ➺ .verdad
┃🕷️ ➺ .reto
┃🫧➺ .anuel
┃🫧➺ .ferxxo
┃🕷️ ➺ .sorteo
┃🕷️ ➺ .deathnote
╰━━━━━━━━━━━⬣


╭━━━[ AJUSTES - CHATS ]━━━⬣
┃⚙️ .on : off bienvenida
┃⚙️ .on : off avisos
┃⚙️ .on : off restringir
┃⚙️ .on : off antillamar
┃⚙️ .on : off publico
┃⚙️ .on : off autovisto
┃⚙️ .on : off temporal
┃⚙️ .on : off stickers
┃⚙️ .on : off autosticker
┃⚙️ .on : off reacciones
┃⚙️ .on : off audios
┃⚙️ .on : off modocaliente
┃⚙️ .on : off antitoxicos
┃⚙️ .on : off antiver
┃⚙️ .on : off antieliminar
┃⚙️ .on : off antinternacional
┃⚙️ .on : off antienlace
┃⚙️ .on : off antienlace2
┃⚙️ .on : off antitiktok
┃⚙️ .on : off antiyoutube
┃⚙️ .on : off antitelegram
┃⚙️ .on : off antifacebook
┃⚙️ .on : off antinstagram
┃⚙️ .on : off antitwitter
┃⚙️ .on : off soloprivados
┃⚙️ .on : off sologrupos
╰━━━━━━━━━━━━⬣

╭━〔 GRUPO - RESUMEN 〕━⬣
┃🔖 ➺ .configuracion
┃🔖 ➺ .settings
┃🔖 ➺ .vergrupo
╰━━━━━━━━━━━⬣

╭━[ DESCARGAS | DOWNLOADS ]━⬣
┃🕸️ ➺ .imagen | image texto
┃🕸️ ➺ .pinterest | dlpinterest texto
┃🕸️ ➺ .wallpaper|wp texto
┃🕸️ ➺ .play | play2 texto link
┃🕸️ ➺ .tw |twdl | twitter link
┃🕸️ ➺ .facebook | fb link
┃🕸️ ➺ .verig | igstalk usuario(a)
┃🕸️ ➺ .ighistoria | igstory usuario(a)
┃🕸️ ➺ .tiktok link
┃🕸️ ➺ .tiktokimagen | ttimagen link
┃🕸️ ➺ .tiktokfoto | tiktokphoto usuario(a)
┃🕸️ ➺ .vertiktok | tiktokstalk usuario(a)
┃🕸️ ➺ .mediafire | dlmediafire link
┃🕸️ ➺ .clonarepo | gitclone link
┃🕸️ ➺ .consejo
┃🕸️ ➺ .morse codificar texto
┃🕸️ ➺ .morse decodificar morse
┃🕸️ ➺ .fraseromantica
┃🕸️ ➺ .historia
╰━━━━━━━━━━━⬣

╭━[ CHAT ANONIMO ]━⬣
┃🧵 ➺ .chatanonimo | anonimochat
┃🧵 ➺ .anonimoch
┃🧵 ➺ .start
┃🧵 ➺ .next
┃🧵 ➺ .leave
╰━━━━━━━━━━━⬣

╭━[ CONFIGURACIÓN - GRUPOS ]━⬣
┃⚪️ ➺ .add numero
┃⚫️ ➺ .sacar | ban | kick  @tag
┃🟣 ➺ .grupo abrir : cerrar
┃🔵 ➺ .group open : close
┃🟢 ➺ .daradmin | promote @tag
┃🟡 ➺ .quitar | demote @tag
┃🟠 ➺ .banchat
┃🔴 ➺ .unbanchat
┃🟤 ➺ .banuser @tag
┃⚪️ ➺ .unbanuser @tag
┃⚫️ ➺ .admins texto
┃🟣 ➺ .invocar texto
┃🔵 ➺ .tagall texto
┃🟢 ➺ .hidetag texto
┃🟡 ➺ .infogrupo | infogroup
┃🟠 ➺ .grupotiempo | grouptime Cantidad
┃🔴 ➺ .advertencia @tag
┃🟤 ➺ .deladvertencia @tag
┃⚪️ ➺ .delwarn @tag
┃⚫️ ➺ .enlace | link
┃🟣 ➺ .newnombre | nuevonombre texto
┃🔵 ➺ .newdesc | descripcion texto
┃🟢 ➺ .setwelcome | bienvenida texto
┃🟡 ➺ .setbye | despedida texto
┃🟠 ➺ .nuevoenlace | resetlink
┃🔴 ➺ .on
┃🔘 ➺ .off
╰━━━━━━━━━━━⬣


╭━[ CONVERTIDORES ]━⬣
┃🧸 ➺ .toimg | img | jpg sticker
┃🧸 ➺ .toanime | jadianime foto
┃🧸 ➺ .tomp3 |video|nota
┃🧸 ➺ .tovn |vn|vid|audio
┃🧸 ➺ .tovideo audio
┃🧸 ➺ .tourl video, imagen
┃🧸 ➺ .toenlace  vid|img|au
┃🧸 ➺ .tts es texto
╰━━━━━━━━━━━⬣


╭━━━[ EFECTOS ]━━⬣
┃🦠 .simpcard @tag
┃🦠 .hornycard @tag
┃🦠 .lolice @tag
┃🦠 .ytcomment texto
┃🦠 .itssostupid
┃🦠 .pixelar
┃🦠 .blur
╰━━━━━━━━━━━⬣

╭━[ RANDOM | ANIME ]━⬣
┃🛣️ .chico
┃🌁 .cristianoronaldo
┃🌉 .meme
┃🌌 .meme2
┃🌃 .itzy
┃🏙️ .blackpink
┃🌇 .kpop blackpink : exo : bts
┃🎆 .lolivid
┃🎇 .loli
┃🌠 .navidad
┃🌄 .ppcouple
┃🌅 .neko
┃🏞️ .waifu
┃🎑 .akira
┃🗾 .akiyama
┃🛣️ .anna
┃🌁 .asuna
┃🌉 .ayuzawa
┃🌃 .boruto
┃🌌 .chiho
┃🏙️ .chitoge
┃🌆 .deidara
┃🌇 .erza
┃🎆 .elaina
┃🌠 .eba
┃🌄 .emilia
┃🌅 .hestia
┃🏞️ .hinata
┃🎑 .inori
┃🛣️ .isuzu
┃🕋 .itachi
┃🛤️ .itori
┃🏦 .kaga
┃🛕 .kagura
┃⛩️ .kaori
┃🏤 .keneki
┃🏣 .kotori
┃🏪 .kurumi
┃🏩 .madara
┃🏥 .mikasa
┃🏢 .miku
┃⛰️ .minato
┃⛺️ .naruto
┃🌋 .nezuko
┃🏜️ .sagiri
┃🏔️ .sasuke
┃🏝️ .sakura
┃🏖️ .cosplay
╰━━━━━━━━━━━⬣

╭━[ MODIFICAR AUDIO]⬣
┃🚁 .bass
┃🚆 .blown
┃🚑 .deep
┃🚘 .earrape
┃🚍 .fast
┃🚜 .fat
┃🚛 .nightcore
┃🚒 .reverse
┃🚌 .robot
┃🚙 .slow
┃🚕 .smooth
┃🚗 .tupai
╰━━━━━━━━━━━⬣

╭━━[ BÚSQUEDAS🔍]━⬣
┃🌎 ➺ .animeinfo texto
┃🌎 ➺ .mangainfo texto
┃🌎 ➺ .google texto
┃🌎 ➺ .googlelyrics texto
┃🌎 ➺ .letra | lirik texto
┃🌎 ➺ .ytsearch | yts texto
┃🌎 ➺ .wiki | wikipedia texto
╰━━━━━━━━━━━⬣

╭━[ HERRAMIENTAS ]━⬣
┃🛠️ .afk motivo
┃🛠️ .acortar url
┃🛠️ .calc operacion math
┃🛠️ .del 
┃🛠️ .qrcode texto
┃🛠️ .readmore texto1|texto2
┃🛠️ .spamwa #/texto/10
┃🛠️ .styletext texto
┃🛠️ .traducir texto
┃🛠️ .morse codificar texto
┃🛠️ .morse decodificar
┃🛠️ .encuesta | poll Motivo
┃🛠️ .horario
╰━━━━━━━━━━━⬣

╭━[ FUNCIÓN RPG ]━⬣
┃🥧 ➺ .pase premium
┃🍿 ➺ .pass premium
┃🥛 ➺ .listapremium
┃🥫➺ .transfer tipo cantidad 
┃🍛 ➺ .dar tipo cantidad 
┃🦪 ➺ .enviar tipo cantidad 
┃🍦 ➺ .balance
┃🍘 ➺ .cartera | wallet
┃🌰 ➺ .experiencia | exp
┃☕️ ➺ .top | lb | leaderboard
┃🍼 ➺ .rol | rango
┃🥮 ➺ .inventario | inventory
┃🍤 ➺ .aventura | adventure
┃🍚 ➺ .caza | cazar | hunt
┃🍩 ➺ .pescar | fishing
┃🍫 ➺ .animales
┃🍭 ➺ .alimentos
┃🥟 ➺ .curar | heal
┃🥓 ➺ .sell
┃🍝 ➺ .verificar | registrar
┃🥩 ➺ .perfil | profile
┃🥗 ➺ .myns
┃🍔 ➺ .unreg # de serie
┃🌭 ➺ .minardiamantes 
┃🧇 ➺ .minarcoins
┃🥖 ➺ .minarexp
┃🧀 ➺ .minar : minar2
┃🥚 ➺ .minar3
┃🧁 ➺ .reclamar | regalo 
┃🍧 ➺ .cadahora | hourly
┃🍰 ➺ .cadasemana  
┃🥪 ➺ .cadames | mes 
┃🍱 ➺ .cofre | abrircofre 
┃🍖 ➺ .trabajar | work
╰━━━━━━━━━━━⬣

╭━[ TOP EN SPIDER ]━⬣
┃🏆➺ .top
╰━━━━━━━━━━━⬣

╭━[ STICKERS ]━⬣
┃🌮 .sticker | s img/video
┃🍟 .sticker | s url tipo jpg
┃🥨 .emojimix 😺+😆
┃🧊 .dado
╰━━━━━━━━━━━⬣

╭━[ MODIFICAR STICKERS ]━⬣
┃🧃 .wm packname|author
┃🧃 .wm texto1|texto2
╰━━━━━━━━━━━⬣

╭━[ STICKERS DINÁMICOS ]━⬣
┃🍥 .palmaditas | pat @tag
┃🍥 .bofetada | slap @tag
┃🍥 .golpear @tag
┃🍥 .besar | kiss @tag
┃🍥 .alimentar | food @tag
╰━━━━━━━━━━━⬣

╭━[ MENU PARA PROPIETARIO/A ]━⬣
┃💎➺ .join enlace
┃💎➺ .unete enlace
┃💎➺ .dardiamantes cantidad
┃💎➺ .darxp cantidad
┃💎➺ .darcoins cantidad
┃💎➺ .addprem | userpremium @tag cantidad
┃💎➺ .addprem2 | userpremium2 @tag cantidad
┃💎➺ .addprem3 | userpremium3 @tag cantidad
┃💎➺ .addprem4 | userpremium4 @tag cantidad
┃💎➺ .idioma | language
┃💎➺ .cajafuerte
┃💎➺ .comunicar | broadcastall | bc texto
┃💎➺ .broadcastchats | bcc texto
┃💎➺ .comunicarpv texto
┃💎➺ .broadcastgc texto
┃💎➺ .comunicargrupos texto
┃💎➺ .borrartmp | cleartmp
┃💎➺ .delexp @tag
┃💎➺ .delcoins @tag
┃💎➺ .deldiamantes @tag
┃💎➺ .reiniciar | restart
┃💎➺ .ctualizar | update
┃💎➺ .addprem | +prem @tag
┃💎➺ .delprem | -prem @tag
┃💎➺ .listapremium | listprem
┃💎➺ .añadirdiamantes @tag cantidad
┃💎➺ .añadirxp @tag cantidad
┃💎➺ .añadircoins @tag cantidad
╰━━━━━━━━━━⬣*`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
