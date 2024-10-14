import { useQuery } from "@tanstack/react-query";
import ApiClient, { Response } from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient= new ApiClient<Genre>("/genres")
const useGenres=()=> useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000, //one day
})


export default useGenres;