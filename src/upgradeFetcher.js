// import Cookies from "universal-cookie/es6";
// import axios from "axios";
// import {ACCESS_TOKEN_COOKIE} from "./constants/constants";
//
//
// const cookies = new Cookies();
//
// const defaultAxios = {
//     baseURL: "http://localhost:8080",
//     timeout: 10000,
// }
//
// const fetcher = () => {
//     const accessToken = cookies.get(ACCESS_TOKEN_COOKIE);
//     if (accessToken) {
//         const axiosWithAuthHeader = {...defaultAxios};
//         axiosWithAuthHeader.headers = {"Authorization": `Bearer ${accessToken}`}
//         return axios.create(axiosWithAuthHeader)
//     } else {
//         return axios.create(defaultAxios);
//     }
// }
//
// const upgradeFetcher = {
//     get: (url, options) => {
//         const originRequest = fetcher().get(url, options);
//         originRequest.then((res)=>res.data)
//         originRequest.catch((err)=>{
//             if(err.status === 401){
//                 // TODO :: 401 에러 메세지 받아서 처리하세용
//                 // Access 만료면 Refresh 로 갱신해서 다시 원래 요청 처리
//                 // Refresh 까지 만료면 로그인 화면으로 보내기
//             }
//         })
//     },
//     post: () => {
//     },
//     delete: () => {
//     }
//
// }