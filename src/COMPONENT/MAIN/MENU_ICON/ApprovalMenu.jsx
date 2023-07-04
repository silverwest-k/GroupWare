import {Link} from "react-router-dom";
import styles from "./Menu.module.css"

function ApprovalMenu({menuName}) {
    return(
        <>
            <div className={styles.mainMenu}>
                <img className={styles.icon} src={require("../../../IMAGES/checklist.png")}/>

                <div className={styles.divisionLine}/>

                <div className={styles.mainLink}>
                    <Link to="/page/write" onClick={menuName}>작성하기</Link>
                    <Link to="/page/approvalpath" onClick={menuName}>결재라인관리</Link>
                </div>
            </div>
        </>
    )
}

export default ApprovalMenu