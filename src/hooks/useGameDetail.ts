import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "../entities/Game";


const apiClient=new ApiClient<Game>("/games");
const useGameDetail = (param: string) => useQuery<Game, Error>({
    queryKey: ["games", param],
    queryFn: ()=>apiClient.get(param),
    staleTime: 60* 1000,
})

export default useGameDetail;