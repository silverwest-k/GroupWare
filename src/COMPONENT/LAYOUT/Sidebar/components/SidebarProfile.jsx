import styles from "../Sidebar.module.css"
import LogoutBtn from "../../../LogoutBtn";

function SidebarProfile () {

    return (<div className={styles.profileContainer}>
        <div className={styles.profile}>
            <img src={require("../../../../IMAGES/profile.jpeg")}/>
            <p>장그래</p>
            <p>영업3팀 / 사원</p>
            <LogoutBtn/>
        </div>
    </div>)
};

export default SidebarProfile