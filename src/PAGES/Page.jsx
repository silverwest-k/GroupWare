import Sidebar from "../COMPONENT/LAYOUT/Sidebar";
import {Route, Routes} from "react-router-dom";
import Write from "./Write";
import PageContents from "./PageContents";
import ApprovalPath from "./ApprovalPath";
import ReceiveDocument from "./ReceiveDocument";
import ReportDocument from "./ReportDocument";
import styles from "./Page.module.css"

function Page() {
    return(
        <div className={styles.container}>
            <Sidebar />
            <div>
                <Routes>
                    <Route path="/" element={<PageContents />}>
                        <Route path="write" element={<Write />} />
                        <Route path="approvalpath" element={<ApprovalPath/>} />
                        <Route path="receivedocument" element={<ReceiveDocument/>} />
                        <Route path="reportdocument" element={<ReportDocument/>} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Page