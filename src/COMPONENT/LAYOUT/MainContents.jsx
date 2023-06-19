import PageMenu from "../MAIN/MENU_ICON/PageMenu";
import Profile from "../MAIN/Profile";
import ApprovalNotice from "../MAIN/ApprovalNotice";
import Notice from "../MAIN/Notice";
import styles from "./MainContents.module.css"

function MainContents() {
    return(
        <>
            <div className={styles.upperContents}>
                <Profile/>
                <ApprovalNotice/>
                <Notice/>
            </div>
            <div className={styles.lowerContents}>
                <PageMenu/>
            </div>
        </>
    )
}

export default MainContents