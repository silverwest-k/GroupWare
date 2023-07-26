import styles from "./Profile.module.css"
import fetcher from "../../fetcher";
import {MY_INFO_API} from "../../constants/api_constans";
import {useEffect, useState} from "react";
import LogoutBtn from "../LogoutBtn";
import useStore from "../../store";

function Profile() {
    // const [myInfo, setMyInfo] = useState({})
    const {setMyAccountInfo, myAccount} = useStore(state => state)

    useEffect(()=>{
        fetcher().get(MY_INFO_API)
            .then((res)=> setMyAccountInfo(res.data))
    },[])

    return (
        <div className={styles.profile}>
            <h5>안녕하세요, {myAccount.name}님</h5>
            <div className={styles.container}>
                <div className={styles.profileImg}>
                    <img src={require("../../IMAGES/profile.jpeg")}/>
                </div>
                <div className={styles.info}>
                    <p>{myAccount.name} {myAccount.position}</p>
                    <p>부서 : {myAccount.team}</p>
                    <p>사번 : {myAccount.no}</p>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    )
}

export default Profile