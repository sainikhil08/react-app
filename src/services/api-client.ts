import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8142d69046d9485da77e351dbf6861d4",
    }
})