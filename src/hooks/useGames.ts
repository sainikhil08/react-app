import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface platform{
    id: number;
    slug: string;
    name: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    platforms: {platform: platform}[]
  }
  
  interface Response {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const controller= new AbortController();
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<Response>("/games")
        .then((res) => setGames(res.data.results))
        .catch((error) => {
            if(error instanceof CanceledError) return;
        setError(error.message);
    });

        return ()=> controller.abort();
    }, []);

    return {games, error};
}

export default useGames