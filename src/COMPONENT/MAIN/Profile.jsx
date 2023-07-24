import styles from "./Profile.module.css"
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE} from "../../constants/constants";
import {LOGIN_COMPONENT} from "../../constants/component_constants";
import fetcher from "../../fetcher";
import {LOGOUT_API, MY_INFO_API} from "../../constants/api_constans";
import {useEffect, useState} from "react";

function Profile() {
    const [myInfo, setMyInfo] = useState({})

    const navigate = useNavigate();
    const [, , removeAccessCookie] = useCookies([ACCESS_TOKEN_COOKIE]);
    const [, , removeRefreshCookie] = useCookies([REFRESH_TOKEN_COOKIE]);

    const logout = () => {
        fetcher().post(LOGOUT_API, {
            // TODO :: 아이디, 비밀번호 ?
        })
            .then(
            removeAccessCookie(ACCESS_TOKEN_COOKIE),
            removeRefreshCookie(REFRESH_TOKEN_COOKIE),
            navigate(LOGIN_COMPONENT)
    )
    }

    useEffect(()=>{
        fetcher().get(MY_INFO_API)
            .then((res)=> setMyInfo(res.data))
    },[])

    return (
        <div className={styles.profile}>
            <h5>안녕하세요, {myInfo.name}님</h5>
            <div className={styles.container}>
                <div className={styles.profileImg}>
                    <img src={require("../../IMAGES/profile.jpeg")}/>
                </div>
                <div className={styles.info}>
                    <p>{myInfo.name} {myInfo.position}</p>
                    <p>부서 : {myInfo.team}</p>
                    <p>사번 : {myInfo.no}</p>
                    <button onClick={logout}>로그아웃</button>
                </div>
            </div>
        </div>
    )
}

export default Profile