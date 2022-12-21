import axios from "axios";

export class AxiosRequest {
    async get (url: string) {
        return axios.get(url).then((response) => response.data)
    }
}