import { JSDOM } from 'jsdom'
import axios from 'axios'

const getData = async (pageUrl: string) => {
    const { data } = await axios.get(pageUrl)

    const { window } = new JSDOM(data)
    const category = window.document.querySelector('div.entry-inline-meta > div.meta-category')?.textContent
    const url = window.document.querySelector('h1.entry-title')?.textContent?.toLowerCase()
    const description = window.document.querySelector('div.post-excerpt')?.textContent

    return {
        url,
        category,
        description,
        article: pageUrl
    }
}

export { getData }