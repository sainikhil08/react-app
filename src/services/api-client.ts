import axios, { AxiosRequestConfig } from "axios"

export interface Response<T>{
    count: number;
    next: string|null;
    results: T[];
}
const apiClient=axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8142d69046d9485da77e351dbf6861d4",
    }
})

class ApiClient<T>{
    endpoint: string

    constructor(endpoint: string){
        this.endpoint=endpoint
    }

    getAll=(config: AxiosRequestConfig)=>apiClient.get<Response<T>>(this.endpoint, config).then(res=> res.data)

}

export default ApiClient;