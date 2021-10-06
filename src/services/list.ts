import { AxiosResponse } from 'axios';
import api from './_api';

export type AnimeProps = {
    id:number,
    anilist_id: number,
    mal_id: number,
    titles: {
        en: string;
    },
    description: {
        en: string;
    },
    cover_image: string,
    banner_image: string,
    genres: string[]
}

type ListAnimeProps = {
    data: {
        current_page: number,
        count: number,
        documents: AnimeProps[]
    };
}

type FavoritesAnimeProps = {
    data: AnimeProps
}
 
export async function getAnimeList(): Promise<AxiosResponse<ListAnimeProps>> {
    return await api.get('/anime?page=1');
}

export async function getEspecificAnime(id: string): Promise<AxiosResponse<FavoritesAnimeProps>> {
    return await api.get(`/anime/${id}`);
}

export async function getSearchAnime(title: string): Promise<AxiosResponse<ListAnimeProps>> {
    return await api.get(`/anime?per_page=3&title=${title}`);
}