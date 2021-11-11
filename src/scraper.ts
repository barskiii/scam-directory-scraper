import { getSearchPage } from './utils/search'
import { JSDOM } from 'jsdom'

// Scraping search result
const isItScam = async (url: String) => {
    const result = await getSearchPage(url)

    const { window } = new JSDOM(result)
    const scraped = window.document.querySelector('header.entry-header > h2.entry-title > a')?.textContent

    if (scraped) return false
    return true
}

export { isItScam }