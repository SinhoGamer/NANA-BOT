const { default: makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@adiwajshing/baileys');

const { fs, Boom, axios, chalk, yts, crypto, util, P, encodeUrl, linkfy, request, cheerio, ms, exec, moment, color, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, start2, banner3, colors, getGroupAdmins } = require('./consts-func.js');

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras ,infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, infodono, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, voting, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, rggold, anotar } = require('./consts-func.js');

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {")){
return kontol_info1(...arguments);
}};

var msgRetryCounterMap = {};

var qrcode = "./ALEATORY-QR.json";

const keyale = "key-pedrorafa-gntb_3.0-";

async function INC() {

const { state, saveCreds } = await useMultiFileAuthState(qrcode);

const conn = makeWASocket({
logger: P({ level: 'silent' }),
auth: state,
msgRetryCounterMap: MessageRetryMap,
printQRInTerminal: true,
defaultQueryTimeoutMs: undefined,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(message.buttonsMessage || message.listMessage);
if (requiresPatch) {
message = {viewOnceMessage: {
message: {messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},...message }}}}
return message;
}});

conn.ev.process(
async(events) => {
  
if(events["group-participants.update"]){
try {
var ale2 = events["group-participants.update"];
if(!fs.existsSync(`./datab/grupos/${ale2.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./datab/grupos/${ale2.id}.json`));

if(ale2.participants[0].startsWith(conn.user.id.split(':')[0])) return;

try {
var grpmdt = await conn.groupMetadata(ale2.id);
} catch (e) {
return;
}
const isGroup2 = grpmdt.id.endsWith('@g.us');
try {
var GroupMetadata_ = isGroup2 ? await conn.groupMetadata(ale2.id): "";
} catch (e) {
return;
}
const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';
if(jsonGp[0].x9 == true) {
if(ale2.action == "promote") {
conn.sendMessage(GroupMetadata_.id, {text: `@${ale2.participants[0].split('@')[0]} foi promovido para administrador...`, mentions: [ale2.participants]});
} else if(ale2.action == "demote") {
conn.sendMessage(GroupMetadata_.id, {text: `@${ale2.participants[0].split('@')[0]} foi rebaixado do cargo de adm...`, mentions: [ale2.participants]});
}}
if(ale2.action == 'add'){
num = ale2.participants[0];
if(nescessario.listanegraG.includes(num)){
await conn.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban*'});
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
return;
}}
if(ale2.action == 'remove'){
num = ale2.participants[0];
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./datab/grupos/countmsg.json", JSON.stringify(countMessage));
}
}
if(ale2.action == 'add' && jsonGp[0].listanegra.includes(ale2.participants[0])){
await conn.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'});
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}
if(jsonGp[0].antifake == true && ale2.action === 'add' && !ale2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await conn.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await conn.groupMetadata(ale2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !ale2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO. 
try {
ppimg = await conn.profilePictureUrl(ale2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
try {
ppgp = await conn.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if(ale2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(ale2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
conn.sendMessage(mdata_2.id, {image: {url:`http://aleatory-api.xyz:8080/welcome?titulo=BEM%20VINDO(A)&nome=${ale2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeUrl(mdata_2.subject)}`},
mentions: ale2.participants, caption: teks});
fs.unlinkSync(ran);
} else if(ale2.action === 'remove') {
mem = ale2.participants[0];

try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(ale2.participants[0].split('@')[0]);
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
conn.sendMessage(mdata_2.id, {image: {url:`http://aleatory-api.xyz:8080/welcome?titulo=Adeus&nome=${ale2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo2}&grupo=SAIU DE ${encodeUrl(mdata_2.subject)}`}, caption: teks, 
mentions: ale2.participants})
fs.unlinkSync(ran)
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(ale2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(ale2.participants[0].split('@')[0], mdata_2.subject)
}
conn.sendMessage(mdata_2.id, {text: teks, mentions: ale2.participants})
} else if(ale2.action === 'remove') {
var mem = ale2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
conn.sendMessage(mdata_2.id, {text: teks, mentions: ale2.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, conn)
}

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
console.log(color("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(color("Conexão fechada...", "gray"));
} else if(shouldReconnect == 403) {
console.log(color("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR", "red"))
exec(`rm -rf ${qrcode}`);
} else if(shouldReconnect == 515) {
console.log(color("Restart Nescessario para estabilizar a conexão...", "gray"))
} else if(shouldReconnect == 440) {
return console.log(color("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore..", "gray"))
} else if(shouldReconnect == 408) {
return console.log(color("Conexão fraca...", "gray"))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
INC()
}
break;

case 'connecting':
console.log(color('CONECTANDO.. ALEATORY 3.0'))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(color(
`〔 - _ ALEATORY MD 3.0 _ - CONECTADO COM SUCESSO.. 〕`))
await conn.sendPresenceUpdate("available")
break;

default:
break;
}
}

if(events["creds.update"]) {
await saveCreds();
}

require("./index.js")(conn, qrcode, keyale)

})
}
INC().catch(async(e) => {
console.log(color("ERROR EM INICIAR.JS: "+e, "red"))
})