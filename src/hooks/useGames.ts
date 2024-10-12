import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import { Response } from "../services/api-client";
import ApiClient from "../services/api-client";
import { GameQuery } from "../state management/store";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
}

const apiClient=new ApiClient<Game>("/games");
const useGames = (gameQuery: GameQuery) => useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam=1})=>apiClient.getAll({params: {
        genres: gameQuery.genreId, 
        parent_platforms: gameQuery.platformId, 
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchQuery,
        page: pageParam,
    }}),
    staleTime: 60* 1000,
    getNextPageParam: (lastPage, allPages)=>{
        return lastPage.next? allPages.length+1: undefined;
    }
})

export default useGames