import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { GameShot } from "../entities/GameShot";


const useGameShots = (param: number) => {
    
const apiClient=new ApiClient<GameShot>(`/games/${param}/screenshots`);
    return (useQuery({
    queryKey: ["screenshots", param],
    queryFn: apiClient.getAll,
    staleTime: 60* 1000,
}));
}

export default useGameShots;