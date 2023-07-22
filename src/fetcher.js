import Cookies from "universal-cookie/es6";
import axios from "axios";
import {ACCESS_TOKEN_COOKIE} from "./constants/constants";


const cookies = new Cookies();

export default () => {
    const defaultAxios = {
        baseURL: "http://localhost:8080",
        timeout: 1500,
    }
    const accessToken = cookies.get(ACCESS_TOKEN_COOKIE);

    if(accessToken) {
        const axiosWithAuthHeader = {...defaultAxios};
        axiosWithAuthHeader.headers = {"Authorization" : `Bearer ${accessToken}`}
        return axios.create(axiosWithAuthHeader)
    } else {
        return axios.create(defaultAxios);
    }
}