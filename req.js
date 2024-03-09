const fetch = require("node-fetch");

class api {
#key;
#base = "https://api.bronxyshost.com.br/api-bronxys";

constructor(key) {
this.#key = key;
}

async fetchJson(url) {
return new Promise(async (resolve, reject) => {
try {
const apiUrl = new URL(url);
apiUrl.searchParams.append("apikey", this.#key);
const response = await fetch(apiUrl);
const json = await response.json();
resolve(json);
} catch (err) {
reject(err);
}
});
}

play(q, isAudio = true) {
var midia = isAudio ? "play" : "play_video";
return `${this.#base}/${midia}?apikey=${this.#key}&nome_url=${q}`;
}

tiktok(url) {
return `${this.#base}/tiktok?apikey=${this.#key}&url=${url}`;
}

legenda(url, txt1, txt2) {
return `${this.#base}/legenda?apikey=${this.#key}&url=${url}&texto1=${txt1}&texto2=${txt2}`;
}

facebook(url, isAudio = true) {
var midia = isAudio ? "face_audio" : "face_video";
return `${this.#base}/${midia}?apikey=${this.#key}&url=${url}`;
}

twitter(url, isAudio = true) {
var midia = isAudio ? "twitter_audio" : "twitter_video";
return `${this.#base}/${midia}?apikey=${this.#key}&url=${url}`;
}

iaimg(q) {
return `${this.#base}/iaimg?apikey=${this.#key}&q=${q}`;
}

montagem(url, categoria) {
return `${this.#base}/montagem?apikey=${this.#key}&category=${categoria}&url=${url}`;
}

trigger(url) {
return `${this.#base}/trigger?apikey=${this.#key}&category=${categoria}}&url=${url}`;
}

duelowin(url, fundo) {
return `${this.#base}/duelo_win/?apikey=${this.#key}&url=${url}&fundo=${fundo}&nmr2=122&nmr2_2=175&nmr2_3=205&nmr2_4=205&largura=450&altura=672`;
}

duelo(url, url2, fundo) {
return `${this.#base}/duelo?apikey=${this.#key}&url=${url}&url2=${url2}&fundo=${fundo}&nmr1=595&nmr1_2=102&nmr1_3=157&nmr1_4=157&nmr2=117&nmr2_2=100&nmr2_3=150&nmr2_4=150&largura=870&altura=360`;
}

emojimix(emj1, emj2) {
return `${this.#base}/emojimix?apikey=${this.#key}&emoj=${encodeURI(emj1)}&emoj2=${encodeURI(emj2)}`;
}

attp(texto, font) {
var fonte = font === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono";
return `${this.#base}/attp_edit?apikey=${this.#key}&texto=${encodeURIComponent(texto)}&fonte=${fonte}`;
}

async gerarnick(texto) {
try {
var abc = await this.fetchJson(`${this.#base}/gerar_nick?nick=${texto}`);
return abc;
} catch (error) {
throw "Erro no comando gerarnick.";
}
}

async aptoide_pesquisa(pesquisa) {
try {
var abc = await this.fetchJson(`${this.#base}/aptoide_pesquisa?pesquisa=${pesquisa}`);
return abc.aptoide;
} catch (error) {
throw "Erro no comando aptoide_pesquisa.";
}
}

async aptoide(url) {
try {
var abc = await this.fetchJson(`${this.#base}/aptoide?url=${url}`);
return abc;
} catch (error) {
throw "Erro no comando aptoide.";
}
}

async letra_m(letra) {
try {
var abc = await this.fetchJson(`${this.#base}/letra_musica?letra=${letra}`);
return abc;
} catch (error) {
throw "Erro no comando letra musica.";
}
}

async semoji(emj, plt) {
try {
var abc = await this.fetchJson(`${this.#base}/emoji?q=${emj}/${plt.toLowerCase()|| "whatsapp"}`);
return abc;
} catch (error) {
throw "Erro no comando semoji.";
}
}

async metadinha() {
try {
var abc = await this.fetchJson(`${this.#base}/metadinha`)
return abc;
} catch (error) {
throw "Erro no comando metadinha.";
}
}

async logos_eph(texto, categoria) {
try {
var abc = await this.fetchJson(`${this.#base}/logos_EPH?category=${categoria}&texto=${texto}`);
return abc;
} catch (error) {
throw "Erro no comando logos eph.";
}
}

async logos_pht(texto, categoria) {
try {
var abc = await this.fetchJson(`${this.#base}/logos_PHT?category=${categoria}&texto=${texto}`);
return abc;
} catch (error) {
throw "Erro no comando logos pht.";
}
}

async logos(texto, categoria) {
try {
var abc = await this.fetchJson(`${this.#base}/logos?category=${categoria}&texto=${texto}`);
return abc;
} catch (error) {
throw "Erro no comando logos.";
}
}

async gpt(q, token) {
try {
var abc = await this.fetchJson(`${this.#base}/PERGUNTE_E_EU_RESPONDO?q=${q}&TOKEN_GPT=${token}`);
return abc;
} catch (error) {
throw "Erro no comando gpt.";
}
}

superimg(q, token) {
return `${this.#base}/CRIAR_IMG_DA_SUA_IDEIA?apikey=${this.#key}&q=${q}&TOKEN_GPT=${token}`;
}

async celular(marca) {
try {
var abc = await this.fetchJson(`${this.#base}/info_celular?celular=${marca}`);
return abc;
} catch (error) {
throw "Erro no comando celular.";
}
}

async grupos(q) {
try {
var abc = await this.fetchJson(`${this.#base}/grupos?q=${q}`);
return abc;
} catch (error) {
throw "Erro no comando grupos.";
}
}

async gimage(nome) {
try {
var abc = await this.fetchJson(`${this.#base}/google-img?nome=${nome}`);
return abc;
} catch (error) {
throw "Erro no comando gimage.";
}
}

async pinterest(nome) {
try {
var abc = await this.fetchJson(`${this.#base}/pinterest?nome=${nome}`);
return abc;
} catch (error) {
throw "Erro no comando pinterest.";
}
}

async ytsearch(nome) {
try {
var abc = await this.fetchJson(`${this.#base}/pesquisa_ytb?nome=${nome}`);
return abc;
} catch (error) {
throw "Erro no comando de pesquisa do YouTube.";
}
}

async moedas() {
try {
var abc = await this.fetchJson(`${this.#base}/Moedas_Agora`)
return abc;
} catch (error) {
throw "Erro no comando moedas.";
}
}

async playstore(nome) {
try {
var abc = await this.fetchJson(`${this.#base}/playstore?nome=${nome}`);
return abc;
} catch (error) {
throw "Erro no comando playstore.";
}
}

async pesquisa(nome) {
try {
var abc = await this.fetchJson(`${this.#base}/pesquisa_agora?pesq=${nome}`);
return abc;
} catch (error) {
throw "Erro no comando pesquisa.";
}
}

async amazon(nome) {
try {
var abc = await this.fetchJson(`${this.#base}/Amazon_Pesquisa?pesquisa=${nome}`);
return abc;
} catch (error) {
throw "Erro no comando amazon.";
}
}

async instagram(url) {
try {
var abc = await this.fetchJson(`${this.#base}/instagram?url=${url}`);
return abc;
} catch (error) {
throw "Erro no comando instagram.";
}
}

async mediafire(url) {
try {
var abc = await this.fetchJson(`${this.#base}/mediafire?url=${url}`);
return abc;
} catch (error) {
throw "Erro no comando mediafire.";
}
}

async signo(text) {
try {
var abc = await this.fetchJson(`${this.#base}/horoscopo?signo=${text}`);
return abc;
} catch (error){
throw "Erro no comando signo.";
}
}

async esporte() {
try {
var abc = await this.fetchJson(`${this.#base}/esporte_noticias`)
return abc;
} catch (error) {
throw "Erro no comando esporte.";
}
}

async cep(cep_) {
try {
var abc = await this.fetchJson(`${this.#base}/consultacep?cep=${cep_}`);
return abc;
} catch (error) {
throw "Erro no comando cep.";
}
}

}

module.exports = api;