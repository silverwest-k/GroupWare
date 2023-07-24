import styles from "./Profile.module.css"
import fetcher from "../../fetcher";
import {MY_INFO_API} from "../../constants/api_constans";
import {useEffect, useState} from "react";
import LogoutBtn from "../LogoutBtn";

function Profile() {
    const [myInfo, setMyInfo] = useState({})

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
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    )
}

export default Profile