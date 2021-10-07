const api = require('./_api')
 
async function getAnimeList() {
    return await api.get('/anime?page=1');
}

async function getEspecificAnime(id) {
    return await api.get(`/anime/${id}`);
}

async function getSearchAnime(title) {
    return await api.get(`/anime?per_page=3&title=${title}`);
}

module.exports = { getAnimeList, getEspecificAnime, getSearchAnime }