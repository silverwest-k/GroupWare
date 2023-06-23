import Sidebar from "../COMPONENT/LAYOUT/Sidebar";
import {Route, Routes} from "react-router-dom";
import Write from "./Write";
import PageContents from "./PageContents";
import ApprovalPath from "./ApprovalPath";
import ReceiveDocument from "./ReceiveDocument";
import ReportDocument from "./ReportDocument";
import styles from "./Page.module.css"
import MyPage from "./MyPage";
import AccountManagement from "./AccountManagement";
import DocumentRegistration from "./DocumentRegistration";

function Page() {
    return(
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.container}>
                <Routes>
                    <Route path="/" element={<PageContents />}>
                        <Route path="write" element={<Write />} />
                        <Route path="approvalpath" element={<ApprovalPath/>} />
                        <Route path="receivedocument" element={<ReceiveDocument/>} />
                        <Route path="reportdocument" element={<ReportDocument/>} />
                        <Route path="mypage" element={<MyPage/>} />
                        <Route path="accountmanagement" element={<AccountManagement/>} />
                        <Route path="documentregistration" element={<DocumentRegistration/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Page