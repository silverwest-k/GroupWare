import {Link} from "react-router-dom";
import styles from "./Menu.module.css"

function PaperManagementMenu() {
    return(
        <>
            <div className={styles.mainMenu}
                style={{background: "rgba(250, 62, 12, 0.21)"}}
            >
                <img className={styles.icon} src={require("../../../IMAGES/process.png")}/>

                <div className={styles.divisionLine}/>

                <div className={styles.mainLink}>
                    <Link style={{color: "#FA3E0C"}} to="">양식등록</Link>
                </div>
            </div>
        </>
    )
}

export default PaperManagementMenu