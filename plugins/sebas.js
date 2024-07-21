const handler = async (m, {conn}) => {
  m.reply(global.sebas);
};
handler.command = /^(sebas|sebas)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.sebas = ` 
➢⚜️ SOY SEBAS EL MAS PRO BRRR
`;
