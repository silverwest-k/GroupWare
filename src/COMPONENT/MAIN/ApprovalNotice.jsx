import styles from "./ApprovalNotice.module.css"
import {Link} from "react-router-dom";

function ApprovalNotice() {
    return(
        <div className={styles.wrapper}>
            <div style={{paddingLeft : "30px"}}>
                <h2>전자결재</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.notice}>
                    <p>수신 문서</p>
                    <Link to="/page/receivedocument">12</Link>
                </div>
                <div className={styles.divisionLine}></div>

                <div className={styles.notice}>
                    <p>상신 문서</p>
                    <Link to="/page/reportdocument">6</Link>
                </div>
                <div className={styles.divisionLine}></div>

                <div className={styles.notice}>
                    <p>임시 보관함</p>
                    <Link to="">3</Link>
                </div>
            </div>
        </div>
    )
}

export default ApprovalNotice