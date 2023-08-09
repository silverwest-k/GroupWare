import MenuPage from "./MENU_ICON/MenuPage";
import Profile from "./Profile";
import ApprovalNotice from "./ApprovalNotice";
import Notice from "./Notice";
import styles from "./MainContents.module.css"
import Header from "../LAYOUT/Header";
import Calender from "./Calender";

function MainContents() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.contents}>
                    <div className={styles.upperContents}>
                        <Profile/>
                        <ApprovalNotice/>
                        <Notice/>
                    </div>
                    <div className={styles.lowerContents}>
                        <MenuPage/>
                        <Calender/>
                    </div>
            </div>
        </div>
    )
}

export default MainContents