import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Response<T>{
    count: number;
    results: T[];
}
const useData= <T>(endpoint: string, deps?: any[], requestConfig?: AxiosRequestConfig)=>{
    const controller= new AbortController();
    const [data,setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
      apiClient
        .get<Response<T>>(endpoint, {...requestConfig})
        .then((res) => {setData(res.data.results);
            setLoading(false);
        })
        .catch((error) => {
            if(error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
    });

        return ()=> controller.abort();
    }, deps ? deps: []);

    return {data, error, isLoading};
}

export default useData;