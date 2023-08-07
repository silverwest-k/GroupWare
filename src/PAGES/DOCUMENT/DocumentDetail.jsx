import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {APPROVAL_SIGN_API, DOCUMENT_READ_API} from "../../constants/api_constans";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import styles from "../APPROVAL/Write.module.css"
import {Viewer} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import DocumentSignTable from "./components/DocumentSignTable";

function DocumentDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [documentData, setDocumentData] = useState({});
    const [signLine, setSignLine] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [showApprovBtn, setShowApprovBtn] = useState(true)

    useEffect(() => {
        fetcher().get(`${DOCUMENT_READ_API}/${id}`)
            .then((res) => {
                const { document, groupedApprovals } = res.data
                // 문서 정보
                setDocumentData(document)
                // 결재라인
                setSignLine(groupedApprovals[document.dno])
                setIsCompleted(true)
            })
    }, [id])

    const approvalBtn=(status)=>{
        fetcher().post(APPROVAL_SIGN_API, {
            "status": status,
            "document" : `${documentData.dno}`
        })
            .then(setShowApprovBtn(false))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.upperContainer}>
                <div className={styles.buttonGroup}>
                    <Button className="button" onClick={()=>navigate(-1)}>목록으로</Button>
                    {showApprovBtn && <Button variant="success" onClick={()=>approvalBtn(1)}>결재승인</Button>}
                    {!showApprovBtn && <Button variant="danger" onClick={()=>approvalBtn(2)}>결재반려</Button>}
                    <Button className="button">문서수정</Button>
                </div>
            </div>

            <div className={styles.divisionLine}></div>
            <div className={styles.lowerContainer}>
                <div className={styles.categoryTitle}>
                    <p>문서양식명</p>
                </div>

                <DocumentSignTable documentData={documentData} signLine={signLine}/>

                <div className={styles.editorContainer}>
                    <div className={styles.documentTitle}>
                        <p>제목 : </p>{documentData.title}
                    </div>
                    <div className={styles.documentContent}>
                        {isCompleted && <Viewer initialValue={documentData.content}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentDetail