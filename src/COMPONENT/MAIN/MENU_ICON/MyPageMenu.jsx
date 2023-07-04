import {Link} from "react-router-dom";
import styles from "./Menu.module.css";

function MyPageMenu({menuName}) {
    return(
        <>
            <div className={styles.mainMenu}>
                <img className={styles.icon} src={require("../../../IMAGES/profile.png")}/>

                <div className={styles.divisionLine}/>

                <div className={styles.mainLink}>
                    <Link to="/page/mypage" onClick={menuName}>내정보관리</Link>
                </div>
            </div>
        </>
    )
}

export default MyPageMenu