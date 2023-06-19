import styles from "./ApprovalNotice.module.css"

function ApprovalNotice() {
    return(
        <div className={styles.wrapper}>
            <div style={{paddingLeft : "30px"}}>
                <h2>전자결재</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.notice}>
                    <p>결재할 문서</p>
                    <p>12</p>
                </div>
                <div className={styles.divisionLine}></div>

                <div className={styles.notice}>
                    <p>상신한 문서</p>
                    <p>6</p>
                </div>
                <div className={styles.divisionLine}></div>

                <div className={styles.notice}>
                    <p>진행중 문서</p>
                    <p>3</p>
                </div>
                <div className={styles.divisionLine}></div>

                <div className={styles.notice}>
                    <p>대기 문서</p>
                    <p>0</p>
                </div>
            </div>
        </div>
    )
}

export default ApprovalNotice