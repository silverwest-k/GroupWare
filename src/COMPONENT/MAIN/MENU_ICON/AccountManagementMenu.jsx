import {Link} from "react-router-dom";
import styles from "./Menu.module.css";

function AccountManagementMenu() {
    return(
        <>
            <div className={styles.mainMenu}
                 style={{background: "rgba(250, 62, 12, 0.21)"}}
            >
                <img className={styles.icon} src={require("../../../IMAGES/management.png")}/>

                <div className={styles.divisionLine}/>

                <div className={styles.mainLink}>
                    <Link style={{color: "#FA3E0C"}} to="">계정등록</Link>
                    <Link style={{color: "#FA3E0C"}} to="/page/accountmanagement">계정관리</Link>
                </div>
            </div>
        </>
    )
}

export default AccountManagementMenu