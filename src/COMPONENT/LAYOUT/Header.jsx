import styles from "./Header.module.css"

function Header() {
    return(
        <>
            <div className={styles.headerTitle}>
                원 인터내셔널
            </div>
            <div className={styles.headerLine}>
                메인
            </div>
        </>
    )
}

export default Header