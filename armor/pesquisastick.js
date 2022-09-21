const axios = require('axios')
const cheerio = require('cheerio')

//STICKER SEARCH
function st(nome) {
return new Promise((resolve, reject) => {
		axios.get(`https://getstickerpack.com/stickers?query=${nome}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
					link.push($(b).attr('href'))
				})
				rand = link[Math.floor(Math.random() * link.length)]
				axios.get(rand)
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						const url = [];
						$$('#stickerPack > div > div.row > div > img').each(function(a, b) {
							url.push($$(b).attr('src').split('&d=')[0])
						})
						resolve({
							criador: 'Switzg / gugu',
							titulo: $$('#intro > div > div > h1').text(),
							autor: $$('#intro > div > div > h5 > a').text(),
							autor_link: $$('#intro > div > div > h5 > a').attr('href'),
							figurinhas: url
						})
					})
			}).catch(reject)
	});
}

module.exports = { st }