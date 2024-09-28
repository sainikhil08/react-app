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

const useGames = () => useData<Game>("/games");

export default useGames