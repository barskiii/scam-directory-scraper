import axios from 'axios'

//Returns raw results from `scam.directory`
const getSearchPage = async (url: String) => {
    // scam directory url
    const scamDirectory = 'https://scam.directory/'
    
    // search format is "ebsitename.domen"
    const replace = ["https://", "http://", "www."]
    for (let i of replace) {
        url.replace(i, '')
    }

    // Searching
    const { data } = await axios.get(scamDirectory, {params: {s: url}})

    return data
}

export { getSearchPage }