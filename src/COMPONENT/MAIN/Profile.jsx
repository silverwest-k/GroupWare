import styles from "./Profile.module.css"
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

function Profile() {

    const navigate = useNavigate();
    // const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
    const logout = () =>{
        // removeCookie("loginCookie");
        navigate("/");
    }

    return(
        <div className={styles.profile}>
            <h5>안녕하세요, 장그래님</h5>
            <div className={styles.container}>
                <div className={styles.profileImg}>
                    <img src={require("../../IMAGES/profile.jpeg")}/>
                </div>
                <div className={styles.info}>
                    <p>장그래 사원</p>
                    <p>부서 : 영업3팀</p>
                    <p>사번 : 213327</p>
                    <p className={styles.logOut} onClick={logout}>로그아웃</p>
                </div>
            </div>
        </div>
    )
}

export default Profile