import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre|null) => useData<Game>("/games", [selectedGenre?.id],{params: {genres: selectedGenre?.id}});

export default useGames