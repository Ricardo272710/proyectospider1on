const handler = async (m, {conn}) => {
  m.reply(global.anthony);
};
handler.command = /^(antho|anthony)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.anthony = ` 
╭┄〔 𝗧𝗶𝗺𝗲 𝙎𝙋𝙄𝘿𝙀𝙍 𝗕𝗼𝘁 〕┄⊱
┊
┊ ¿Se te olvidó que tú y yo somos fueguito🔥y me lo chupaste en tu cuarto?
┊
╰━⊰ Anthony ⊱━დ
`;
