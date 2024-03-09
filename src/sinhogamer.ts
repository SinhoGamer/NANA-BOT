import axios from "axios"
import * as cheerio from "cheerio"

export type SearchModResult = cheerio.Cheerio<{ title: string, url: string, snippet: string, thumbnail: string, published: string }>

export type SearchModResponse = { url: string, results: SearchModResult }

export const getMods = async (q: string): Promise<SearchModResponse> => {
    const url = encodeURI(`https://www.sinhogamer.com/search?q=${q}`)
    const response = await axios.get(`https://www.sinhogamer.com/search`, {
        params: { q },
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
        }
    })

    const $ = cheerio.load(response.data)

    const titles = $('.pTtl > a').map((i, e) => $(e).text())
    const links = $('.pJmp').map((i, e) => $(e).attr('href')!)
    const snippets = $('.pSnpt').map((i, e) => $(e).text())
    const thumbnails = $('.imgThm').map((i, e) => $(e).attr('src')!)
    const published_time = $('.aTtmp').map((i, e) => $(e).attr('data-text')!)

    const results: SearchModResult = titles.map((i) => ({
        title: titles[i],
        url: links[i],
        snippet: snippets[i],
        thumbnail: thumbnails[i],
        published: published_time[i]
    }))

    return {
        url: url,
        results
    }
}

export default { getMods }