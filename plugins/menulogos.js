const handler = async (m, {conn}) => {
  m.reply(global.Menulogos);
};
handler.command = /^(Menulogos|menulogos)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Menulogos = `
╭──⚔️「 Logo - maker 🎨 」⚡
│  👑◦ .logocorazon
│  👑◦ .logochristmas
│  👑◦ .logopareja
│  👑◦ .logoglitch
│  👑◦ .logosad
│  👑◦ .logogaming
│  👑◦ .logosolitario
│  👑◦ .logodragonball
│  👑◦ .logoneon
│  👑◦ .logogatito
│  👑◦ .logochicagamer
│  👑◦ .logonaruto
│  👑◦ .logofuturista
│  👑◦ .logonube
│  👑◦ .logoangel
│  👑◦ .logocielo
│  👑◦ .logograffiti3d
│  👑◦ .logomatrix
│  👑◦ .logohorror
│  👑◦ .logoalas
│  👑◦ .logoarmy
│  👑◦ .logopubg
│  👑◦ .logopubgfem
│  👑◦ .logolol
│  👑◦ .logoamongus
│  👑◦ .logovideopubg
│  👑◦ .logovideotiger
│  👑◦ .logovideointro
│  👑◦ .logovideogaming
│  👑◦ .logoguerrero
│  👑◦ .logoportadaplayer
│  👑◦ .logoportadaff
│  👑◦ .logoportadapubg
│  👑◦ .logoportadacounter
│  👑◦ .sadcat <texto>
│  👑◦ .tweet <comentario>
`;
