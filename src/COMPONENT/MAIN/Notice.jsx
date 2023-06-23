import styles from "./Notice.module.css"

function Notice() {
    return(
        <div className={styles.wrapper}>
            <h3 className={styles.title}>공지시항</h3>

            <div className={styles.list}>
                [공지] 휴가신청서 관련 양식 추가의 건.
            </div>
        </div>
    )
}

export default Notice