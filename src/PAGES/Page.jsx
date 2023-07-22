import Sidebar from "../COMPONENT/LAYOUT/Sidebar";
import {Route, Routes} from "react-router-dom";
import Write from "./APPROVAL/Write";
import ApprovalPath from "./APPROVAL/ApprovalPath";
import ReceiveDocument from "./DOCUMENT/ReceiveDocument";
import ReportDocument from "./DOCUMENT/ReportDocument";
import styles from "./Page.module.css"
import MyPage from "./MYPAGE/MyPage";
import AccountManagement from "./ACCOUNT-MNG/AccountManagement";
import DocumentRegistration from "./DOCUMENT-MNG/DocumentRegistration";
import AccountRegistration from "./ACCOUNT-MNG/AccountRegistration";
import Header from "../COMPONENT/LAYOUT/Header";
import {
    ACCOUNT_MANAGEMENT_COMPONENT, ACCOUNT_REGISTRATION_COMPONENT,
    APPROVAL_PATH_COMPONENT, DOCUMENT_REGISTRATION_COMPONENT, DOCUMENT_WRITE_COMPONENT, MY_PAGE_COMPONENT,
    RECEIVE_DOCUMENT_COMPONENT, REPORT_DOCUMENT_COMPONENT
} from "../constants/component_constants";
function Page() {
    return(
        <>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar />
                <div className={styles.container}>
                    <Routes>
                            <Route path={DOCUMENT_WRITE_COMPONENT} element={<Write />} />
                            <Route path={APPROVAL_PATH_COMPONENT} element={<ApprovalPath/>} />
                            <Route path={RECEIVE_DOCUMENT_COMPONENT} element={<ReceiveDocument/>} />
                            <Route path={REPORT_DOCUMENT_COMPONENT} element={<ReportDocument/>} />
                            <Route path={MY_PAGE_COMPONENT} element={<MyPage/>} />
                            <Route path={DOCUMENT_REGISTRATION_COMPONENT} element={<DocumentRegistration/>}/>
                            <Route path={ACCOUNT_MANAGEMENT_COMPONENT} element={<AccountManagement/>} />
                            <Route path={ACCOUNT_REGISTRATION_COMPONENT} element={<AccountRegistration/>} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Page