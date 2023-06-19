import Write from "./Write";
import ApprovalPath from "./ApprovalPath";
import {Route, Routes} from "react-router-dom";
import ReceiveDocument from "./ReceiveDocument";
import ReportDocument from "./ReportDocument";

function PageContents() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<div> </div>} />
                <Route path="/write" element={<Write />} />
                <Route path="/approvalpath" element={<ApprovalPath />} />
                <Route path="receivedocument" element={<ReceiveDocument/>} />
                <Route path="reportdocument" element={<ReportDocument/>} />
            </Routes>
        </div>
    )
}

export default PageContents