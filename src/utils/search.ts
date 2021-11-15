import axios from 'axios'

//Returns raw results from `scam.directory`
const getSearchPage = async (searchUrl: String) => {
    // scam directory url
    const scamDirectory = 'https://scam.directory/'

    // search format is "websitename.domen"
    const replace = ["https://", "http://", "www."]
    for (let i of replace) {
        searchUrl.replace(i, '')
    }

    // Searching
    const { data } = await axios.get(scamDirectory, {params: {s: searchUrl}})

    return { data , searchUrl: searchUrl.toLowerCase() }
}

export { getSearchPage }