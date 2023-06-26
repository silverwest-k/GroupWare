import styles from "./Header.module.css"
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";

function Header() {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params]);

    return (
        <>
            <div className={styles.headerTitle}>
                <Link to="/">원 인터내셔널</Link>
            </div>
            <div className={styles.headerLine}>
                params
            </div>
        </>
    );
}

export default Header;