import { getSearchPage } from './utils/search'
import { JSDOM } from 'jsdom'
import { getData } from './utils/getData'

// Scraping search result
const isItScam = async (url: String) => {
    const result = await getSearchPage(url)

    const { window } = new JSDOM(result)
    const scrapedUrl = window.document.querySelector('header.entry-header > h2.entry-title > a')?.getAttribute('href')

    if (scrapedUrl) {
        return {
            IsItScam: true,
            details: await getData(scrapedUrl)
        }
    }
    return {
        isItScam: false,
        details: {}
    }
}

export { isItScam }