import styles from "../Sidebar.module.css"
import {Link} from "react-router-dom";

const SidebarProfile = () => {
    return (<div className={styles.profileContainer}>
        <div className={styles.profile}>
            <img src={require("../../../../IMAGES/profile.jpeg")}/>
            <p>장그래</p>
            <p>영업3팀 / 사원</p>
            <Link to="/"><p className={styles.logOut}>로그아웃</p></Link>
        </div>
    </div>)
};

    export default SidebarProfile