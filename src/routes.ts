import { Router } from 'express';
import { AnimeProps, getAnimeList, getEspecificAnime, getSearchAnime } from './services/list';

const router = Router();  
 
const favorites: AnimeProps[] = [];

router.get('/', (req, res) => {
    getAnimeList()
        .then(e => {
            const animeList = e.data.data.documents;
            res.render('pages/home', { animeList, favorites }); 
        })
        .catch(err => {
            return res.send(err);
        });
});

router.get('/favorites', (req, res) => {
    res.render('pages/favorites', { favorites });
});
 
router.post('/favorites/:id', (req, res) => {
    const { id } = req.params;
    getEspecificAnime(id.toString())
        .then(e => favorites.push(e.data.data))
        .catch(() => res.status(404).json({ message: 'this anime not exists' }));
    
    res.status(200).json();
});

router.delete('/favorites/:id', (req, res) => {
    const { id } = req.params;
    const indexFavoritesId = favorites.findIndex(anime => anime.id === parseInt(id));
    favorites.splice(indexFavoritesId, 1);
    res.send();
});

router.get('/search-results', (req, res) => {
    const { title } = req.query;

    getSearchAnime(title.toString())
        .then(e => {
            res.status(200).json(e.data.data.documents); 
        });
});

router.get('/anime', (req, res) => {
    const { id } = req.query;

    getEspecificAnime(id.toString())
        .then(anime => {
            const animeData = anime.data.data;
            res.render('pages/anime', { animeData });
        });
    
});

export { router };