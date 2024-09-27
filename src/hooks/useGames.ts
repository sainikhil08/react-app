import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  
  interface Response {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const controller= new AbortController();
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
      apiClient
        .get<Response>("/games")
        .then((res) => {setGames(res.data.results);
            setLoading(false);
        })
        .catch((error) => {
            if(error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
    });

        return ()=> controller.abort();
    }, []);

    return {games, error, isLoading};
}

export default useGames