import ApprovalMenu from "./ApprovalMenu";
import DocumentMenu from "./DocumentMenu";
import MyPageMenu from "./MyPageMenu";
import DocumentManagementMenu from "./DocumentManagementMenu";
import AccountManagementMenu from "./AccountManagementMenu";
import styles from "./Menu.module.css"
function MenuPage() {
    return(
        <div className={styles.container}>
            <ApprovalMenu/>
            <DocumentMenu/>
            <MyPageMenu/>
            <DocumentManagementMenu/>
            <AccountManagementMenu/>
        </div>
    )
}

export default MenuPage