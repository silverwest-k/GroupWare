import ApprovalMenu from "./ApprovalMenu";
import DocumentMenu from "./DocumentMenu";
import MyPageMenu from "./MyPageMenu";
import DocumentManagementMenu from "./DocumentManagementMenu";
import AccountManagementMenu from "./AccountManagementMenu";
import styles from "./Menu.module.css"
import useStore from "../../../store";
function MenuPage() {

    const {changeTitle} = useStore(state => state)

    const menuName = (e) =>{
        const selectMenu = e.target.textContent;
        changeTitle(selectMenu);
    }

    return(
        <div className={styles.container}>
            <ApprovalMenu menuName={menuName}/>
            <DocumentMenu menuName={menuName}/>
            <MyPageMenu menuName={menuName}/>

            <DocumentManagementMenu menuName={menuName}/>
            <AccountManagementMenu menuName={menuName}/>
        </div>
    )
}

export default MenuPage