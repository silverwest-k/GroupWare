import styles from "./Header.module.css"
import {Link, useParams} from "react-router-dom";
import useStore from "../../store";


function Header() {
    const {headerTitle} = useStore(state => state)

    return (
        <>
            <div className={styles.headerTitle}>
                <Link to="/">원 인터내셔널</Link>
            </div>
            <div className={styles.headerLine}>
                <p>{headerTitle}</p>
            </div>
        </>
    );
}

export default Header;