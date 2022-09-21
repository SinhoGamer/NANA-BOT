
const { 
default: makeWASocket,
downloadContentFromMessage, 
fetchLatestBaileysVersion, 
makeInMemoryStore, 
DisconnectReason,
WAGroupMetadata,
relayWAMessage,	
MediaPathMap, 
mentionedJid, 
processTime,	
MediaType, 
Browser, 
MessageType, 
Presence, 
Mimetype, 
Browsers, 
delay, 
MessageRetryMap
} = require('@adiwajshing/baileys');

// MÓDULOS ABAIXO.. 

const chalk = require('chalk');

const hx = require('hxz-api');

const { Boom }  = require('@hapi/boom');

const axios = require('axios')

const fs = require('fs-extra');

const yts = require('yt-search');

const crypto = require('crypto');

const util = require('util');

const P = require('pino');

const encodeUrl = require('encodeurl');

const linkfy = require('linkifyjs');

const request = require('request');

const ms = require('ms')

const ffmpeg = require('fluent-ffmpeg');

const imgbb = require('imgbb-uploader');

const fetch = require('node-fetch');

const imageToBase64 = require('image-to-base64');

const { EmojiAPI } = require("emoji-api");

const qrterminal = require('qrcode-terminal');

const emoji = new EmojiAPI();

const { exec, spawn, execSync } = require('child_process');

const moment = require('moment-timezone');

const colors = require("colors")

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

// FUNÇÕES ABAIXO... 

const { convertSticker } = require("./armor/funcoes/swm.js");

const { recognize } = require('./armor/js/ocr');

const { fetchJson, fetchText, getBase64, createExif } = require('./armor/funcoes/fetcher');

const { webp2gifFile } = require("./armor/js/gif.js")

const webp_mp4 = require("./armor/js/webp_mp4.js");

const { sendVideoAsSticker, sendImageAsSticker } = require('./armor/sticker/rename.js');

const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./armor/sticker/rename2.js');

const { insert, response } = require('./armor/funcoes/simi.js');

const { addLimit, getLimit } = require('./armor/js/limit.js');

const { mediafireDl } = require('./armor/js/mediafire.js');

const { upload, nit } = require('./armor/funcoes/tourl');

const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./armor/js/banned.js");

const { isFiltered, addFilter } = require('./armor/js/antispam.js');

const { validmove, setGame } = require('./armor/tictactoe');

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./armor/js/addcmd.js');

const { palavrasANA, quizanime, quizanimais } = require('./armor/jogo/jogos.js');

const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, runtime, getpc, supre } = require('./armor/js/consts.js'); // DE LEVEL/CASH

const { WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC } = require('./datab/ttt/TTTconfig/tttexp.js'); // JOGO DA VELHA TTT COM MAQUINA

const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./armor/js/tictactoe.js'); // JOGO DA VELHA

const { wait, getExtension, h2k, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, infopd, success, start, close, temporizador, cmdadd, addMetadata, chyt, getBuffer } = require('./armor/funcoes/functions.js'); // FUNÇÕES NESCESSARIAS PRA FUNFAR ALGUMAS COISAS

const { addVote, delVote } = require('./armor/js/vote');

const { ttthelp } = require('./datab/ttt/TTTconfig/ttthelp');

const { tttme } = require('./datab/ttt/TTTconfig/tttme');

const tttset = require('./datab/ttt/TTTconfig/tttset.json');

const esp = require('./datab/ttt/TTTconfig/tttframe.json');

//\\


// JSON FUNÇÕES ABAIXO CONSTS >

const voting = JSON.parse(fs.readFileSync('./armor/funcoes/voting.json'));

const sotoy = JSON.parse(fs.readFileSync('./armor/funcoes/sotoy.json'));

const countMessage = JSON.parse(fs.readFileSync('./datab/grupos/countmsg.json'));

const comandos = JSON.parse(fs.readFileSync('./dono/media/comandos.json'));

const daily = JSON.parse(fs.readFileSync('./datab/usuarios/diario.json'));

const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'));

const premium = JSON.parse(fs.readFileSync('./datab/usuarios/premium.json'));

const _level = JSON.parse(fs.readFileSync('./datab/usuarios/level.json'));

const ban = JSON.parse(fs.readFileSync('./datab/usuarios/banned.json'));

const limitefll = JSON.parse(fs.readFileSync('./datab/usuarios/flood.json'));

const joguinhodavelhajs = JSON.parse(fs.readFileSync('./datab/usuarios/joguinhodavelha.json'));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./datab/usuarios/joguinhodavelha2.json'));

const setting = JSON.parse(fs.readFileSync('./dono/settings.json'))

const logoslink = JSON.parse(fs.readFileSync('./logos/logos.json'))

//\\

// JS DE MENUS / INFORMAÇÕES DE UTILIZAR \

const { menu, adms, menudono, menulogos, menuprem, brincadeiras, efeitos, alteradores } = require('./menus/menus.js');

const { infovotacao } = require('./armor/js/infovotacao.js');

const { infocontador } = require('./armor/js/infocontador.js');

const { infobemvindo } = require('./armor/js/infobv.js');

const { infolistanegra } = require('./armor/js/infolistanegra.js');

const { infopalavrao } = require('./armor/js/infopalavrao.js');

const { infobancarac } = require('./armor/js/infobancarac.js');

const { infodono } = require('./menus/infodono.js');

const { gitdobot } = require('./dono/gitdobot.js');

const { configbot } = require('./menus/configurar.js');

const { hospedar } = require('./menus/hospedar-heroku.js');

const { cmd_termux } = require('./menus/comandos-termux.js');

const { destrava, destrava2 } = require('./armor/funcoes/destrava.js');

const { tabela } = require('./armor/js/tabela');

const { conselhob } = require('./armor/js/conselhob.js');

const { palavrasc } = require('./armor/js/conselhos.js');

//\\

// Transformar segundos em hora/minutos

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}


// Loja de dados

// INTELIGENCIA-ARTIFICIAL

const simih = async (text) => {
try {
data = await fetchJson(`https://simsimi.info/api/?text=${text}&lc=pt`, {method: 'get'})
simi = `${data.message}`
return simi
} catch {
return 
}
}

module.exports = {
  
// MÓDULOS ABAIXO >
  
P, 
fs,
yts, 
hx, 
util, 
Boom, 
axios, 
chalk, 
encodeUrl, 
linkfy, 
request, 
ms, 
ffmpeg, 
imgbb, 
fetch, 
imageToBase64,
EmojiAPI, 
qrterminal, 
emoji, 
exec, 
spawn, 
execSync, 
limitefll, 
moment, 
color, 
time, 
hora, 
date, 

// FUNÇÕES JS ABAIXO >
ttthelp, 
tttme, 
tttset, 
esp, 
addVote,
delVote, 
getBuffer, 
convertSticker, 
fetchJson, 
fetchText, 
getBase64, 
createExif, 
insert, 
response, 
addLimit, 
getLimit, 
mediafireDl, 
upload, 
nit, 
addBanned, 
unBanned, 
BannedExpired, 
cekBannedUser, 
isFiltered, 
addFilter, 
validmove, 
setGame, 
addComandosId, 
deleteComandos, 
getComandoBlock, 
getComandos, 
addComandos, 
palavrasANA, 
quizanime, 
quizanimais, 
getLevelingXp, 
getLevelingLevel, 
getLevelingId, 
addLevelingXp, 
addLevelingLevel, 
addLevelingId, 
bayarLimit, 
limitAdd, 
addATM, 
addKoinUser, 
checkATMuser, 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser, 
confirmATM, 
runtime, 
getpc, 
supre, 
WinnerX, 
WinnerO, 
Tie, 
IA, 
IAmove1, 
IAalter, 
priorityC, 
addTTTId, 
addTTTwin, 
addTTTdefeat, 
addTTTtie, 
addTTTpoints, 
getTTTId, 
getTTTwins, 
getTTTdefeats, 
getTTTties, 
getTTTpoints, 
wait, 
getExtension, 
h2k, 
generateMessageID, 
getGroupAdmins, 
getMembros, 
getRandom, 
banner, 
banner2, 
banner3, 
infopd, 
success, 
start, 
close, 
temporizador, 
cmdadd, 
addMetadata, 
chyt, 
webp2gifFile, 
webp_mp4, 
simih, 

// JSON FUNÇÕES ABAIXO >

voting, 
sotoy, 
addVote, 
delVote, 
countMessage, 
comandos, 
daily, 
nescessario, 
premium, 
_level, 
ban,

// JSON JUNÇÕES DE ATIconst / DESATIconst 

joguinhodavelhajs, 
joguinhodavelhajs2, 
setting, 
logoslink,

// JS DE MENUS, INFORMAÇÕES DE UTILIZAR COMANDOS \\

menu, 
menudono, 
adms, 
menulogos, 
efeitos, 
menuprem, 
brincadeiras,
infovotacao, 
infocontador, 
infobemvindo, 
infolistanegra, 
infopalavrao, 
infobancarac, 
infodono, 
gitdobot, 
configbot, 
hospedar, 
cmd_termux, 
alteradores, 
destrava, 
destrava2, 
tabela, 
conselhob, 
palavrasc, 
recognize, 
colors, 

// FUNÇÃO... 

kyun, 
sendVideoAsSticker, 
sendImageAsSticker, 
sendVideoAsSticker2, 
sendImageAsSticker2

}