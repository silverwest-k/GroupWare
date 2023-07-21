import Cookies from "universal-cookie/es6";
import axios from "axios";


const cookies = new Cookies();

export const fetcher = () => {
    const defaultAxios = {
        baseURL: "http://localhost:8080",
        timeout: 1500,
    }
    const accessToken = cookies.get("loginCookie");

    if(accessToken) {
        const axiosWithAuthHeader = {...defaultAxios};
        axiosWithAuthHeader.headers = {"Authorization" : `Bearer ${accessToken}`}
        return axios.create(axiosWithAuthHeader)
    } else {
        return axios.create(defaultAxios);
    }
}