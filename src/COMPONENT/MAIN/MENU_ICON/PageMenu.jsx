import ApprovalMenu from "./ApprovalMenu";
import PapersMenu from "./PapersMenu";
import MyPageMenu from "./MyPageMenu";
import PaperManagementMenu from "./PaperManagementMenu";
import AccountManagementMenu from "./AccountManagementMenu";
import styles from "./Menu.module.css"
function PageMenu() {
    return(
        <div className={styles.container}>
            <ApprovalMenu/>
            <PapersMenu/>
            <MyPageMenu/>
            <PaperManagementMenu/>
            <AccountManagementMenu/>
        </div>
    )
}

export default PageMenu