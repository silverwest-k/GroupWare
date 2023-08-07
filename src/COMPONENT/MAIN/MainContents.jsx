import MenuPage from "./MENU_ICON/MenuPage";
import Profile from "./Profile";
import ApprovalNotice from "./ApprovalNotice";
import Notice from "./Notice";
import styles from "./MainContents.module.css"
import Header from "../LAYOUT/Header";

function MainContents() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.contents}>
                <div className={styles.leftContents}>
                    <div className={styles.upperContents}>
                        <Profile/>
                        <ApprovalNotice/>
                    </div>
                    <div className={styles.lowerContents}>
                        <MenuPage/>
                    </div>
                </div>
                <div className={styles.rightContents}>
                    <Notice/>
                </div>
            </div>
        </div>
    )
}

export default MainContents