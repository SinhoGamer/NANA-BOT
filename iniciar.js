const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');
const readline = require('readline')
const MAIN_LOGGER = require('@whiskeysockets/baileys/lib/Utils/logger').default;

let sessionStartTime;

const logger = MAIN_LOGGER.child({});
logger.level = 'silent';

const { fs, fetch, Boom, axios, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins, nescessario, setting, countMessage, getRandom, NodeCache } = require('./consts-func.js');

var qrcode = "./dados/ALEATORY-QR";


const usePairingCode = process.argv.includes('sim')

if(!usePairingCode && !fs.existsSync(`${qrcode}/creds.json`)) console.log(colors.yellow("Se você não tiver outro aparelho para ler o qrcode, você pode usar, ( sh start.sh sim ), sem os parenteses, e você conectará com código de emparelhamento, o novo modelo."));
const useMobile = process.argv.includes('--mobile');


var LINKS_T = require("./dados/links.json");

const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

function coletarNumeros(inputString) {
return inputString.replace(/\D/g, '');
}

const originalConsoleInfo = console.info;

console.info = function () {
const message = util.format(...arguments);
const forbiddenStrings = [
"Closing session: SessionEntry",
"Removing old closed session: SessionEntry {",
"Another forbidden string",
"Closing stale open session for new outgoing prekey bundle"
];
if (forbiddenStrings.some(str => message.includes(str))) {
return;
}
originalConsoleInfo.apply(console, arguments);
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const msgRetryCounterCache = new NodeCache();

async function INC() {

const { state, saveCreds } = await useMultiFileAuthState(qrcode);

const { version, isLatest } = await fetchLatestBaileysVersion();

const conn = makeWASocket({
version,
logger,
browser: ["A", "B"],
printQRInTerminal: !usePairingCode,
defaultQueryTimeoutMs: undefined,
mobile: useMobile,
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, logger),
},
msgRetryCounterCache,
generateHighQualityLinkPreview: true
});

if(usePairingCode && !conn.authState.creds.registered) {
if(useMobile) {
throw new Error('Não é possível usar o código de emparelhamento com API móvel')
}
const phoneNumber = await question('.Por favor insira o seu número:\nobs: Sem O + e digite seu número certinho como está no whatsapp, mas lembre-se, é o número que será o bot, não o seu.\n')
let numerosColetados = coletarNumeros(phoneNumber);
const code = await conn.requestPairingCode(numerosColetados)
console.log(`Código de emparelhamento: ${code}\nVá no whatsapp que será o bot e vá em aparelhos conectado, e clique em Conectar um aparelho, e lá na aprte inferior, clique em *Conectar com número de telefone*.`)
}
    
if(useMobile && !conn.authState.creds.registered) {
const { registration } = conn.authState.creds || { registration: {} }
if(!registration.phoneNumber) {
registration.phoneNumber = await question('.Por favor insira o seu número:\nobs: Sem O + e digite seu número certinho comk está no whatsapp\n')
}
    
const libPhonenumber = await require("libphonenumber-js")
const phoneNumber = libPhonenumber.parsePhoneNumber(registration.phoneNumber)
if(!phoneNumber?.isValid()) {
throw new Error('Número de telefone inválido: ' + registration.phoneNumber)
}
registration.phoneNumber = phoneNumber.format('E.164')
registration.phoneNumberCountryCode = phoneNumber.countryCallingCode
registration.phoneNumberNationalNumber = phoneNumber.nationalNumber
const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode]
if(!mcc) {
throw new Error('Não foi possível encontrar MCC para o número de telefone: ' + registration.phoneNumber + '\nEspecifique o MCC manualmente.')
}
registration.phoneNumberMobileCountryCode = mcc
async function enterCode() {
try {
const code = await question('Digite o código único:\n')
const response = await conn.register(code.replace(/["']/g, '').trim().toLowerCase())
console.log('Seu número de telefone foi registrado com sucesso.')
console.log(response)
rl.close()
} catch(error) {
console.error('Falha ao registrar seu número de telefone. Por favor, tente novamente.\n', error)
await askForOTP()
}
}
    
async function askForOTP() {
let code = await question('Como você gostaria de receber o código único para registro? "sms" ou "voz"\n')
code = code.replace(/["']/g, '').trim().toLowerCase()
if(code !== 'sms' && code !== 'voice') {
return await askForOTP()
}
registration.method = code
try {
await conn.requestRegistrationCode(registration)
await enterCode()
} catch(error) {
console.error('Falha ao solicitar o código de registro. Por favor, tente novamente.\n', error)
await askForOTP()
}
}
askForOTP()
}


conn.ev.process(
async(events) => {
  
if(events["group-participants.update"]){
try {
var ale2 = events["group-participants.update"];
if(!fs.existsSync(`./dados/grupos/${ale2.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./dados/grupos/${ale2.id}.json`));

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
fs.writeFileSync("./dados/countmsg.json", JSON.stringify(countMessage));
}
}
if(ale2.action == 'add' && jsonGp[0].listanegra.includes(ale2.participants[0])){
if(jsonGp[0]?.legenda_listanegra && jsonGp[0]?.legenda_listanegra != "0") { 
await conn.sendMessage(GroupMetadata_.id, {text: jsonGp[0]?.legenda_listanegra});
}
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && ale2.action === 'add' && !ale2.participants[0].startsWith(55)){
if(jsonGp[0]?.legenda_estrangeiro && jsonGp[0]?.legenda_estrangeiro != "0") {
await conn.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;

let ppimg;
try {
ppim = await conn.profilePictureUrl(`${ale2.participants[0].split("@")[0]}@c.us`, 'image');
blu = await getBuffer(ppim);
ppimg = await upload(blu);
} catch (e){
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

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
// PEGAR DESCRIÇÃO DO GRUPO. /ALNBSLT

if(ale2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefix#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(ale2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);

conn.sendMessage(mdata_2.id, {image: {url:`https://api.bronxyshost.com.br/welcome?titulo=BEM%20VINDO(A)&nome=${ale2.participants[0].split('@')[0]}&perfil=${ppimg}&fundo=${LINKS_T.fundo1}&grupo=BEM VINDO AO GRUPO ${encodeURIComponent(mdata_2.subject)}`},
mentions: ale2.participants, caption: teks});
} else if(ale2.action === 'remove') {
mem = ale2.participants[0];

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefix#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(ale2.participants[0].split('@')[0]);
}
conn.sendMessage(mdata_2.id, {image: {url:`https://api.bronxyshost.com.br/welcome?titulo=Adeus&nome=${ale2.participants[0].split("@")[0]}&perfil=${ppimg}&fundo=${LINKS_T.fundo2}&grupo=${encodeURI(mdata_2.subject)}`}, caption: teks, 
mentions: ale2.participants});
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

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
console.log(colors.green("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode
//ALNBSLT
switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente.."));
} else if(shouldReconnect == 401) {
console.log(colors.red("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR"));
fs.remove(qrcode).then(() => {
console.log('Qrcode excluído com sucesso');
}).catch(err => {
console.error(`Erro ao excluir o qrcode: ${err}`);
});
} else if(shouldReconnect == 515) {
console.log(colors.gray("Restart Nescessario para estabilizar a conexão..."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore.."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Erro desconhecido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("CONEXÃO TA QUERENDO CAIR, É A INTERNET..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("Conexão fraca..."))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
INC()
}
break;

case 'connecting':
console.log(colors.green('CONECTANDO.. NANA-BOT 5.0'))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)
console.log(colors.green(`〔NANA-BOT 5.0 CONECTADO COM SUCESSO.. 〕`));
rl.close();
sessionStartTime = moment().tz("America/Sao_Paulo").unix();
await conn.sendPresenceUpdate("available")
break;

default:
break;
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"];
const startAle = require('./index.js');
sessionStartTim = upsert.messages.some(i => i.messageTimestamp > sessionStartTime)
startAle(upsert, conn, qrcode, sessionStartTim).then(() => {}).catch((error) => {
console.log('Erro no Bot:', String(error));
});
}


if(events["creds.update"]) {
await saveCreds();
}

})
}
INC().catch(async(e) => {
console.log(colors.red("ERROR EM INICIAR.JS: "+e))
})