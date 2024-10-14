import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { GameVideo } from "../entities/GameVideo";


const useGameVideo = (param: number) => {
    
const apiClient=new ApiClient<GameVideo>(`/games/${param}/movies`);
    return (useQuery({
    queryKey: ["trailers", param],
    queryFn: apiClient.getAll,
    staleTime: 60* 1000,
}));
}

export default useGameVideo;