import styles from "./Write.module.css"

// 작성하기
function Write() {
    return(
        <div className={styles.writeContainer}>
            <div className={styles.select}>
                작성하기
            </div>
            <div className={styles.document}>
                문서양식
            </div>
        </div>
    )
}

export default Write