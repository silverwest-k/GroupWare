import styles from "./Header.module.css"
import {Link} from "react-router-dom";

function Header() {
    return(
        <>
            <div className={styles.headerTitle}>
                <Link to="/">원 인터내셔널</Link>
            </div>
            <div className={styles.headerLine}>
                메인
            </div>
        </>
    )
}

export default Header