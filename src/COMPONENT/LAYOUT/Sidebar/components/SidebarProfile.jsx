import styles from "../Sidebar.module.css"
import LogoutBtn from "../../../LogoutBtn";
import useStore from "../../../../store";

function SidebarProfile() {
    const {myAccount} = useStore(state => state)

    return (<div className={styles.profileContainer}>
        <div className={styles.profile}>
            <img src={require("../../../../IMAGES/profile.jpeg")}/>

                <p style={{marginTop:"20px"}}>{myAccount.name}</p>
                <p>{myAccount.team} / {myAccount.position}</p>
                <LogoutBtn/>

        </div>
    </div>)
};

export default SidebarProfile