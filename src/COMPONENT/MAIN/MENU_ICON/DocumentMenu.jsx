import {Link} from "react-router-dom";
import styles from "./Menu.module.css";

function DocumentMenu() {
    return(
        <>
            <div className={styles.mainMenu}>
                <img className={styles.icon} src={require("../../../IMAGES/folder.png")}/>

                <div className={styles.divisionLine}/>

                <div className={styles.mainLink}>
                    <Link to="/page/receivedocument">수신문서</Link>
                    <Link to="/page/reportdocument">상신문서</Link>
                    <Link to="">임시보관함</Link>
                </div>
            </div>
        </>
    )
}

export default DocumentMenu