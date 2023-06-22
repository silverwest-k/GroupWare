import MenuPage from "./MENU_ICON/MenuPage";
import Profile from "./Profile";
import ApprovalNotice from "./ApprovalNotice";
import Notice from "./Notice";
import styles from "./MainContents.module.css"

function MainContents() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.upperContents}>
                <Profile/>
                <ApprovalNotice/>
                <Notice/>
            </div>
            <div className={styles.lowerContents}>
                <MenuPage/>
            </div>
        </div>
    )
}

export default MainContents