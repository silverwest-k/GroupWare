import Sidebar from "../COMPONENT/LAYOUT/Sidebar";
import {Route, Routes} from "react-router-dom";
import Write from "./APPROVAL/Write";
import PageContents from "./PageContents";
import ApprovalPath from "./APPROVAL/ApprovalPath";
import ReceiveDocument from "./DOCUMENT/ReceiveDocument";
import ReportDocument from "./DOCUMENT/ReportDocument";
import styles from "./Page.module.css"
import MyPage from "./MYPAGE/MyPage";
import AccountManagement from "./ACCOUNT-MNG/AccountManagement";
import DocumentRegistration from "./DOCUMENT-MNG/DocumentRegistration";
import AccountRegistration from "./ACCOUNT-MNG/AccountRegistration";
function Page() {
    return(
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.container}>
                <Routes>
                    <Route path="*" element={<PageContents />}>
                        <Route path="write" element={<Write />} />
                        <Route path="approvalpath" element={<ApprovalPath/>} />
                        <Route path="receivedocument" element={<ReceiveDocument/>} />
                        <Route path="reportdocument" element={<ReportDocument/>} />
                        <Route path="mypage" element={<MyPage/>} />
                        <Route path="documentregistration" element={<DocumentRegistration/>}/>
                        <Route path="accountmanagement" element={<AccountManagement/>} />
                        <Route path="accountregistration" element={<AccountRegistration/>} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Page