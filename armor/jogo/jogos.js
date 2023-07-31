const fs = require('fs')



//========(PALAVRAS-DO-ANAGRAMA)=========\\


// EDITADO POR SINHOGAMER.COM //

let palavrasANA = [
{
original: 'OTOPIA',
embaralhada: 'POTOIA',
dica: 'CANAL'
},
{
original: 'TELEVISÃO',
embaralhada: 'SOEIETVLÃ',
dica: 'OBJETO'
},
{
    original: 'INTERNET',
    embaralhada: 'INETNETR',
    dica: 'VOCÊ ACESSA'
    },
{
    original: 'CORNO',
    embaralhada: 'CNORO',
    dica: 'VOCÊ'
    },
{
original: 'GOHAN',
embaralhada: 'OAHNG',
dica: 'PERSONAGEM'
},
{
original: 'NEZUKO',
embaralhada: 'EZKUNO',
dica: 'PERSONAGEM'
},
{
    original: 'NATAL',
    embaralhada: 'TNAAL',
    dica: 'DATA ESPECIAL'
    },
    {
        original: 'SÃO-JOÃO',
        embaralhada: 'JÃSÃOO-O',
        dica: 'DATA ESPECIAL'
        },
{
original: 'OROCHIMARU',
embaralhada: 'OCORRAIHMU',
dica: 'PERSONAGEM'
},
{
original: 'VIADO',
embaralhada: 'DVIAO',
dica: 'VOCÊ'
},
{
    original: 'VASCO',
    embaralhada: 'OASCV',
    dica: 'TIME DE QUANDO ALGUÉM MORRE'
    },
{
original: 'CIUMENTO',
embaralhada: 'NCIETUMO',
dica: 'SEU MACHO É?'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'TELEGRAM',
embaralhada: 'ELRAMEGT',
dica: 'APLICATIVO'
},
{
    original: 'FREE-FIRE',
    embaralhada: 'FFIRE-REE',
    dica: 'JOGO'
    },
{
original: 'DISCORD',
embaralhada: 'DICRODS',
dica: 'APLICATIVO'
},
{
    original: 'CALL OF DUTY',
    embaralhada: 'CLLA FO UDTY',
    dica: 'JOGO'
    },
{
original: 'FRANÇA',
embaralhada: 'ÇNÃFRA',
dica: 'PAÍS'
},
{
original: 'BAZUKA',
embaralhada: 'KAZBAU',
dica: 'ARMA'
},
{
    original: 'YOUTUBE',
    embaralhada: 'UBEYOUT',
    dica: 'APLICATIVO'
    },
{
original: 'REQUEIJÃO',
embaralhada: 'QEROJIÃEU',
dica: 'COMIDA'
},
{
original: 'HIDRATANTE',
embaralhada: 'HARDNTITEA',
dica: 'OBJETO DE CABELO'
},
{
original: 'CANETA',
embaralhada: 'CEANTA',
dica: 'OBJETO'
},
{
original: 'GADO',
embaralhada: 'ADOG',
dica: 'VOCÊ'
},
{
original: 'MORCEGO',
embaralhada: 'MROGECO',
dica: 'ANIMAL'
},
{
original: 'PICANHA',
embaralhada: 'PCNIHAA',
dica: 'O QUE LULA PROMETE'
},
{
original: 'MIOJO',
embaralhada: 'IJOMO',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'IONCXHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'KABUTO',
embaralhada: 'TOAKBU',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'EREN',
embaralhada: 'ENER',
dica: 'PERSONAGEM'
},
{
original: 'ANITA',
embaralhada: 'AINAT',
dica: 'CANTORA'
},
{
original: 'KONDIZILA',
embaralhada: 'ZOKINLLDA',
dica: 'CANAL YOUTUBE'
},
{
original: 'CRUZEIRO',
embaralhada: 'IERZCURO',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'TUBARÃO',
embaralhada: 'TBRUOÃA',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'MOTO',
embaralhada: 'TOOM',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'CHAMPIONS',
embaralhada: 'CHASNOPIM',
dica: 'CAMPEONATO DE FUTEBOL'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'GOOGLE CHROME',
embaralhada: 'EOOGLG MREHOC',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'ESCOVA',
embaralhada: 'EVSOCA',
dica: 'OBJETO'
},
{
original: 'VENTILADOR',
embaralhada: 'TALOEVNDRI',
dica: 'OBJETO'
},
{
original: 'PLAYSTATION',
embaralhada: 'PTAASTONLYI',
dica: 'VIDEO-GAME'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'HRROAOCC',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'GF',
embaralhada: 'FG',
dica: 'O QUE VOCÊ FAZ'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'BÉLGICA',
embaralhada: 'GIALCÉB',
dica: 'PAÍS'
},
{
original: 'PAPEL',
embaralhada: 'PELPA',
dica: 'OBJETO'
},
{
original: 'XBOX',
embaralhada: 'XBXO',
dica: 'VIDEO-GAME'
},
{
original: 'PIUZINHO',
embaralhada: 'OUZIPNIH',
dica: 'JOGADOR FAMOSO DE FF'
},
{
original: 'NOBRU',
embaralhada: 'NRBOU',
dica: 'JOGADOR FAMOSO DE FF'
},
{
original: 'NANA BOT',
embaralhada: 'ANANOTB',
dica: 'MEU NOME'
},
{  
original: 'LIBERTADORES',
embaralhada: 'TRRLDAOEEIBS',
dica: 'CAMPEONATO DE FUTEBOL'
},
{    
original: 'BRASILEIRÃO',
embaralhada: 'BRROSILÃEIA',
dica: 'CAMPEONATO DE FUTEBOL'
},
{
original: 'COBRA',
embaralhada: 'BCORA',
dica: 'ANIMAL'
},
{
original: 'INFERNO',
embaralhada: 'RNOFNIE',
dica: 'LUGAR'
},
{   
original: 'RINOCERONTE',
embaralhada: 'NTERRECNIOO',
dica: 'ANIMAL'
},
{ 
original: 'UNIVERSAL',
embaralhada: 'UIRVALNSE',
dica: 'IGREJA'
},
{
original: 'DINHEIRO',
embaralhada: 'DIIHREON',
dica: 'O QUE TE FALTA'
},
{       
original: 'MELANCIA',
embaralhada: 'CAILAMEN',
dica: 'ALIMENTO'
}
]	

//======== QUIZ DE ANIMAIS =======\\
let quizanimais = [
{
original: 'PORQUINHO DA ÍNDIA',
foto: 'https://i.ibb.co/Fqwr0W0/cb2bb96f29e3.jpg'
},
{
original: 'HAMSTER',
foto: 'https://i.ibb.co/Qb3npqg/c43fae235c0a.jpg'
},
{
original: 'ROTTWEILER',
foto: 'https://telegra.ph/file/a10ad7df6ab6a2312a1f9.jpg'
},
{
original: 'FLOPPA',
foto: 'https://telegra.ph/file/7633abcd83b8a587f418d.jpg'
},
{
original: 'GUAXINIM',
foto: 'https://telegra.ph/file/3800c7048d04a1c3dbc4e.jpg'
},
{
original: 'ZEBRA',
foto: 'https://telegra.ph/file/a08e224344e34aa916972.jpg'
},
{
original: 'CARNEIRO',
foto: 'https://telegra.ph/file/096342c8c7815ba9d83be.jpg'
},
{
original: 'BODE',
foto: 'https://telegra.ph/file/ff574a82178089f453444.jpg'
},
{
original: 'MAMUTE',
foto: 'https://telegra.ph/file/00e445dde6c036a0c0df5.jpg'
},
{
original: 'ALPACA',
foto: 'https://telegra.ph/file/a201b23b179392f1cdd7f.jpg'
},
{
original: 'PORCO ESPINHO',
foto: 'https://telegra.ph/file/7b180efc77c8ab6e9a24a.jpg'
},
{
original: 'QUOKKA',
foto: 'https://telegra.ph/file/3042e66a22c6d0fb6e0cd.jpg'
},
{
original: 'PANDA VERMELHO',
foto: 'https://telegra.ph/file/a6517debde47b846073cc.jpg'
},
{
original: 'PEIXE GOTA',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'PEIXE MANDARIM',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'DRAGÃO DE KOMODO',
foto: 'https://telegra.ph/file/d4c36b449f4c781533f3c.jpg'
},
{
original: 'GUEPARDO',
foto: 'https://telegra.ph/file/0016017b9d28a3b6d027a.jpg'
},
{
original: 'FURÃO',
foto: 'https://telegra.ph/file/e352b4831db11c20a3c62.jpg'
},
{
original: 'LEOPARDO',
foto: 'https://telegra.ph/file/71f5f532ced0fddc08f5b.jpg'
},
{
original: 'LEBRE',
foto: 'https://telegra.ph/file/89f9a46ce660261279477.jpg'
},
{
original: 'MARRECO',
foto: 'https://telegra.ph/file/aa41bde6c4c350ec9d0d4.jpg'
},
{
original: 'GANSO',
foto: 'https://telegra.ph/file/9ab69884414feefc9c109.jpg'
},
{
original: 'CAVALO MARINHO',
foto: 'https://telegra.ph/file/e4cee57d5b731dfffa5d8.jpg'
},
{
original: 'CROCODILO',
foto: 'https://telegra.ph/file/b4483f9a7077fd29a137f.jpg'
},
{
original: 'ORNITORRINCO',
foto: 'https://telegra.ph/file/8ffdd62da1834433112be.jpg'
},
{
original: 'HUSKY SIBERIANO',
foto: 'https://telegra.ph/file/07b98023259637951ba8f.jpg'
},
{
original: 'CAPIVARA',
foto: 'https://telegra.ph/file/54f20cbd80737fe45a284.jpg'
}
]


module.exports = {
palavrasANA, 
quizanimais
}