const handler = async (m, {conn}) => {
  m.reply(global.hexagonal);
};
handler.command = /^(hexagonal|hexagonal)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.hexagonal = ` 
HEXAGONAL
⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨

⏰┨𝐇𝐎𝐑𝐀: 
👕┨𝐕𝐄𝐒𝐓𝐈𝐌𝐄𝐍𝐓𝐀: 
🛟┨𝐂𝐀𝐒𝐈𝐋𝐋𝐀𝐒:

Escuadra 1: 
➢⚜️
➢⚔️
➢⚔️
➢⚔️

Escuadra 2: 
➢⚜️ 
➢⚔️
➢⚔️
➢⚔️

𝙎𝙐𝙋𝙇𝙀𝙉𝙏𝙀𝙎 Igual estar a la hora del vs en DC:

➠
➠
➠❕
`;
