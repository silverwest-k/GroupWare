import styles from "./Profile.module.css"
import LogoutBtn from "../LogoutBtn";
import useStore from "../../store";

function Profile() {
    // const [myInfo, setMyInfo] = useState({})
    const { myAccount} = useStore(state => state)


    return (
        <div className={styles.profile}>
            <p className={styles.hello}>안녕하세요, <div style={{fontWeight:"bold"}}>{myAccount.name}</div>님</p>
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