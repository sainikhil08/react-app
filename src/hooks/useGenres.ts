import { useQuery } from "@tanstack/react-query";
import ApiClient, { Response } from "../services/api-client";

export interface Genre{
    id: number;
    name: string;
    slug: string;
    image_background: string;
}
const apiClient= new ApiClient<Genre>("/genres")
const useGenres=()=> useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000, //one day
})


export default useGenres;