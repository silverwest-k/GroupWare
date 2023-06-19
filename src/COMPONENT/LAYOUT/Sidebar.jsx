import styles from "./Sidebar.module.css"
import {Link} from "react-router-dom";

function Sidebar() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.profile}>
                <img src={require("../../IMAGES/profile.jpeg")}/>

                <p>장그래</p>
                <p>영업3팀 / 사원</p>
                <p>로그아웃</p>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menu}>
                    <img src={require("../../IMAGES/checklist.png")}/>
                    <Link to="/page/write">전자결재</Link>
                </div>

                <div className={styles.menu}>
                    <img src={require("../../IMAGES/folder.png")}/>
                    <Link to="">문서함</Link>
                </div>

                <div className={styles.menu}>
                    <img src={require("../../IMAGES/profile.png")}/>
                    <Link to="">마이페이지</Link>
                </div>

                <div className={`${styles.menu} ${styles.mng}`}>
                    <img src={require("../../IMAGES/process.png")}/>
                    <Link to="">문서관리</Link>
                </div>

                <div className={`${styles.menu} ${styles.mng}`}>
                    <img src={require("../../IMAGES/management.png")}/>
                    <Link to="">계정관리</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar