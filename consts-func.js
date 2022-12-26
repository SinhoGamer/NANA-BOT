
const { 
'default': makeWASocket,
downloadContentFromMessage, 
fetchLatestBaileysVersion, 
useMultiFileAuthState, 
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

const axios = require('axios');

const fs = require('fs-extra');

const { jsPDF } = require("jspdf"); 

const CR_Doc = new jsPDF();

const cheerio = require('cheerio');

const yts = require('yt-search');

const crypto = require('crypto');

const util = require('util');

const P = require('pino');

const encodeUrl = require('encodeurl');

const linkfy = require('linkifyjs');

const request = require('request');

const ms = require('ms');

const ffmpeg = require('fluent-ffmpeg');

const imgbb = require('imgbb-uploader');

const fetch = require('node-fetch');

const imageToBase64 = require('image-to-base64');

const { EmojiAPI } = require("emoji-api");

const qrterminal = require('qrcode-terminal');

const emoji = new EmojiAPI();

const { exec, spawn, execSync } = require('child_process');

const moment = require('moment-timezone');

const colors = require("colors");

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

// FUNÇÕES ABAIXO... 

const webp_mp4 = require("./armor/js/webp_mp4.js");

const { sendVideoAsSticker, sendImageAsSticker } = require('./armor/sticker/rename.js');

const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./armor/sticker/rename2.js');

const { insert, cdsert, response } = require('./armor/funcoes/simi.js');

const { addLimit, getLimit } = require('./armor/js/limit.js');

const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./armor/js/banned.js");

const { validmove, setGame } = require('./armor/tictactoe');

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./armor/js/addcmd.js');

const { palavrasANA, showdomilhao, quizanimais } = require('./armor/jogo/jogos.js');

const { WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC,  pratrp } = require('./datab/ttt/TTTconfig/tttexp.js'); // JOGO DA VELHA TTT COM MAQUINA

const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./armor/js/tictactoe.js'); // JOGO DA VELHA

const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('./armor/funcoes/functions.js'); // FUNÇÕES NESCESSARIAS PRA FUNFAR ALGUMAS COISAS

const { addVote, delVote } = require('./armor/js/vote');

const { ttthelp } = require('./datab/ttt/TTTconfig/ttthelp');

const { tttme } = require('./datab/ttt/TTTconfig/tttme');

const tttset = require('./datab/ttt/TTTconfig/tttset.json');

const esp = require('./datab/ttt/TTTconfig/tttframe.json');

// JSON FUNÇÕES ABAIXO CONSTS >

const voting = JSON.parse(fs.readFileSync('./armor/funcoes/voting.json'));

const sotoy = JSON.parse(fs.readFileSync('./armor/funcoes/sotoy.json'));

const rg_aluguel = JSON.parse(fs.readFileSync("./datab/grupos/rg_aluguel.json"));

const countMessage = JSON.parse(fs.readFileSync('./datab/grupos/countmsg.json'));

const comandos = JSON.parse(fs.readFileSync('./dono/media/comandos.json'));

const daily = JSON.parse(fs.readFileSync('./datab/usuarios/diario.json'));

const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'));

const premium = JSON.parse(fs.readFileSync('./datab/usuarios/premium.json'));

const ban = JSON.parse(fs.readFileSync('./datab/usuarios/banned.json'));

const limitefll = JSON.parse(fs.readFileSync('./datab/usuarios/flood.json'));

const joguinhodavelhajs = JSON.parse(fs.readFileSync('./datab/usuarios/joguinhodavelha.json'));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./datab/usuarios/joguinhodavelha2.json'));

const patentes = JSON.parse(fs.readFileSync("./datab/grupos/patentes.json"));

const antispam = JSON.parse(fs.readFileSync('./dono/media/antispam.json'));

const rggold = JSON.parse(fs.readFileSync('./armor/funcoes/golds.json'));

const anotar = JSON.parse(fs.readFileSync("./func/tabela/anotar.json"));

const setting = JSON.parse(fs.readFileSync('./dono/settings.json'));

const logoslink = JSON.parse(fs.readFileSync('./dono/logos.json'));

//\\

// JS DE MENUS / INFORMAÇÕES DE UTILIZAR \

const { menu, adms, menudono, menulogos, menuprem, brincadeiras, efeitos, alteradores, anotacao, infoaluguel, infotransmitir } = require('./dono/menus/menus.js');

const { infovotacao } = require('./armor/js/infovotacao.js');

const { infocontador } = require('./armor/js/infocontador.js');

const { infobemvindo } = require('./armor/js/infobv.js');

const { infolistanegra } = require('./armor/js/infolistanegra.js');

const { infopalavrao } = require('./armor/js/infopalavrao.js');

const { infobancarac } = require('./armor/js/infobancarac.js');

const { infodono } = require('./dono/menus/infodono.js');

const { gitdobot } = require('./dono/gitdobot.js');

const { configbot } = require('./dono/menus/configurar.js');

const { hospedar } = require('./dono/menus/hospedar-heroku.js');

const { cmd_termux } = require('./dono/menus/comandos-termux.js');

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
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`;
}

const RSM_FUNC = async(conn, nmrdn_dono2, hora120, upsert) => {

switch(hora120) {
case "02:00:00": case "04:00:00":
case "07:00:00": case "10:00:00":  
case "13:00:00": case "15:00:00":
case "18:00:00": case "22:00:00":
exec("cd ALEATORY-QR* && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./iniciar.js");
delete require.cache[file];
require(file);
}, 1200);
conn.sendMessage(nmrdn_dono2, {text: "Reiniciando para diminuir o peso do qrcode..."});
break;
}

if(JSON.stringify(rg_aluguel).includes(upsert?.messages[0]?.key?.remoteJid)) {
dat_rg = moment.tz('America/Sao_Paulo').format('DD/MM');
for (var i of rg_aluguel) {
var rg_alg_ofc = i;
}
switch(dat_rg) {
case rg_alg_ofc.data.split("/")[0]-1+"/"+rg_alg_ofc.data.split("/")[1]:
rg_alg_ofc.cobrou = false;
fs.writeFileSync("./datab/grupos/rg_aluguel.json", JSON.stringify(rg_aluguel));
break;

case rg_alg_ofc.data: 
if(rg_alg_ofc.cobrou == false) {
txt = `Olá - Meu Dono _ O grupo: ${rg_alg_ofc.nome_do_gp} encerrou o aluguel hoje, corre logo pra cobrar o indivíduo, texto detalhando sobre o dono: ${rg_alg_ofc.texto}`;
horadd = parseInt(dat_rg.split("/")[1])+1;
conn.sendMessage(nmrdn_dono2, {text: txt});
rg_alg_ofc.cobrou = true;
rg_alg_ofc.data = parseInt(rg_alg_ofc.data.split("/")[0])+"/"+horadd;
fs.writeFileSync("./datab/grupos/rg_aluguel.json", JSON.stringify(rg_aluguel));}
break;
}}

}

const comand = (conn, info, prefix, isGroup, Res_SoGrupo, sender, pushname, command, reply, args, from, mentions, Res_SoAdm, Res_BotADM, isGroupAdmins, isBotGroupAdmins, upsert) => {

async function comandos_que_nao_usa_muito() {

switch(command) {
//=======(JOGO-DA-VELHA-COM-MAQUINA)=======\\

case 'ttthelp':
conn.sendMessage(from, {text: ttthelp(prefix)});
break;

case 'resetarttt':
case 'rvttt':  
if(!isGroup) return reply(Res_SoGrupo);
if(!isGroupAdmins) return reply(Res_SoAdm);
if(!isBotGroupAdmins) return reply(Res_BotADM);
daily.splice([]);
tttset.tttstatus = "off";
fs.writeFileSync('./datab/ttt/TTTconfig/tttset.json', JSON.stringify(tttset));
fs.writeFileSync('./datab/usuarios/diario.json', JSON.stringify(daily));
reply('‼️O jogo da velha TTT foi resetado com sucesso..✔️');
break

case 'ttt':
const limitrl = getLimit(sender, daily)
if(!isGroup) {
reply("Este comando só pode ser utilizado em grupo...")
} else if(tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...\n\nEm caso de problemas, mande um administrador utilizar o comando ${prefix}rvttt para resetar o jogo.\n\nOu se você for o jogador, utilize ${prefix}jogar a1 por exemplo ou qual posição deseja jogar...`)
} else if(args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = info
tttset.local = from
if(args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if(args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if(args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if(args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if(randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
blat =  `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`
conn.sendMessage(from, {text: `${blat}\n\nCaso não saiba como jogar digite: ${prefix}ttthelp`})
setTimeout( () => {
tttset.autoEndTime = "on"
}, 12000) //2 minutos
addLimit(sender, daily)
}
break

case 'tttme':
if(!isGroup) return reply(Res_SoGrupo)
const checkTTTIdMe = getTTTId(sender)
if(checkTTTIdMe === undefined) addTTTId(sender)
conn.sendMessage(from, {text: tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender))}, {quoted: info})
break

case 'tttrank':
if(!isGroup) return reply(Res_SoGrupo)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '*🔥Ranking dos melhores players🔥*\n\n'
try {
for (let i = 0; i < 3; i++) {
if(i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`

} else if(i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
} else if(i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
}
mentioned_jid.push(tictactoe[i].id)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await conn.sendMessage(from, {text: `*É necessário 3 jogadores para se construir um ranking*`}, {quoted: info})
}
break

case 'jogar':
tttset.playertest = sender
if(!isGroup) {
reply("Este comando só pode ser utilizado em grupo...")
} else if(tttset.tttstatus == "off") {
reply(`*O jogo não foi iniciado*\n*Digite ${prefix}ttt <dificuldade> para iniciar*`)
} else if(tttset.player != tttset.playertest) {
reply(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
} else if(tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if(coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' && coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`*Diga a cordenada*\nExemplo: ${prefix}jogar a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
  
case 'a1':
if(esp.a1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if(esp.a2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if(esp.a3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b1':
if(esp.b1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b2':
if(esp.b2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b3':
if(esp.b3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c1':
if(esp.c1 != "🔲") {
 reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c2':
if(esp.c2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c3':
if(esp.c3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
            
if(WinnerX()) {
if(isCmd) {
switch (tttset.tttdifficulty) {
              
case "EASY":
break

case "NORMAL":
break

case "HARD":
break
                
case "IMPOSSIBLE":
break
}
conn.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*`})
} else {
conn.sendMessage(from,{text: `*VOCÊ VENCEU, PARABENS*`},)
}

const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if(currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
} else if(WinnerO()) {
				  
if(isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
break
					
case "NORMAL":
break
					
case "HARD":
break
					
case "IMPOSSIBLE":
break

}	
conn.sendMessage(from, {text: `*Você perdeu*`})
} else {
conn.sendMessage(from, {text: `*Você perdeu*`})
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if(currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
} else if(Tie()) {
if(isCmd) {
conn.sendMessage(from, {text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`})
} else {
conn.sendMessage(from, {text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`})
}

const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if(currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
}
tttset.tttantibug = "off"
}
}
break
}

}

comandos_que_nao_usa_muito().catch(e => {
console.log(e+" - CSFJ")
})

}
// INTELIGENCIA-ARTIFICIAL

const simih = async (text) => {
try {
data = await fetchJson(`https://simsimi.info/api/?text=${text}&lc=pt`, {method: 'get'})
simi = `${data.message}`
return simi
} catch {
return 
}}

module.exports = {
  
// MÓDULOS ABAIXO >
  
P, fs, yts, hx, util, Boom, axios, chalk, 
encodeUrl, linkfy, request, ms, ffmpeg, 
imgbb, fetch, imageToBase64, EmojiAPI, 
qrterminal, emoji, exec, spawn, 
execSync, limitefll, moment, 
color, time, hora, date, 

// FUNÇÕES JS ABAIXO >
RSM_FUNC, comand, ttthelp, tttme, tttset, 
esp, addVote, delVote, 
getBuffer, convertSticker, fetchJson, 
fetchText, getBase64, createExif, 
insert, cdsert, response, addLimit, 
getLimit, upload, nit, 
addBanned, unBanned, BannedExpired, 
cekBannedUser, pratrp, validmove, setGame, 
addComandosId, deleteComandos, getComandoBlock, 
getComandos, addComandos, palavrasANA, 
showdomilhao, quizanimais, getpc, supre, 
WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, 
priorityC, addTTTId, addTTTwin, addTTTdefeat, 
addTTTtie, addTTTpoints, getTTTId, getTTTwins, 
getTTTdefeats, getTTTties, getTTTpoints, wait, 
getExtension, generateMessageID, getGroupAdmins, 
getMembros, getRandom, banner, banner2, banner3,
temporizador, chyt, webp_mp4, simih, 

// JSON FUNÇÕES ABAIXO >
patentes, rggold, antispam, anotar, rg_aluguel, voting, sotoy, 
addVote, delVote, countMessage, comandos, daily, 
nescessario, premium, ban,

// JSON JUNÇÕES DE ATIconst / DESATIconst 

joguinhodavelhajs, joguinhodavelhajs2, 
setting, logoslink,

// JS DE MENUS, INFORMAÇÕES DE UTILIZAR COMANDOS \\

menu, infoaluguel, infotransmitir, anotacao, menudono, adms, menulogos, 
efeitos, menuprem, brincadeiras, infovotacao, 
infocontador, infobemvindo, infolistanegra, 
infopalavrao, infobancarac, infodono, gitdobot, 
configbot, hospedar, cmd_termux, alteradores, 
destrava, destrava2, tabela, conselhob, palavrasc, 
recognize, colors, cheerio, 

// FUNÇÃO... 

kyun, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2,sendImageAsSticker2, CR_Doc
}