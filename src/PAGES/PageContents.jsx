import Write from "./APPROVAL/Write";
import ApprovalPath from "./APPROVAL/ApprovalPath";
import {Route, Routes} from "react-router-dom";
import ReceiveDocument from "./DOCUMENT/ReceiveDocument";
import ReportDocument from "./DOCUMENT/ReportDocument";
import MyPage from "./MYPAGE/MyPage";
import AccountManagement from "./ACCOUNT-MNG/AccountManagement";
import DocumentRegistration from "./DOCUMENT-MNG/DocumentRegistration";
import AccountRegistration from "./ACCOUNT-MNG/AccountRegistration";
import styles from "./Page.module.css"

function PageContents() {
    return(
        <div className={styles.contentsContainer}>
            <Routes>
                <Route path="*" element={<div> </div>} />
                <Route path="write" element={<Write />} />
                <Route path="approvalpath" element={<ApprovalPath />} />
                <Route path="receivedocument" element={<ReceiveDocument/>} />
                <Route path="reportdocument" element={<ReportDocument/>} />
                <Route path="mypage" element={<MyPage/>} />
                <Route path="documentregistration" element={<DocumentRegistration/>} />
                <Route path="accountregistration" element={<AccountRegistration/>} />
                <Route path="accountmanagement" element={<AccountManagement/>} />
            </Routes>
        </div>
    )
}

export default PageContents