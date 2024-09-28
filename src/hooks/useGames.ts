import { GameQuery } from "../App";
import useData from "./useData";

export interface platform{
    id: number;
    slug: string;
    name: string; 
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    platforms: {platform: platform}[];
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) => useData<Game>("/games", [gameQuery],
    {params: {
        genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id, 
        ordering: gameQuery.sortOrder
    }});

export default useGames