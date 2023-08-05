import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {DOCUMENT_DELETE_API, DOCUMENT_READ_API} from "../../constants/api_constans";
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
    const [signLine, setSignLine] = useState({});

    useEffect(() => {
        fetcher().get(`${DOCUMENT_READ_API}/${id}`)
            .then((res) => {
                // 문서 정보
                setDocumentData(res.data.document)
                // 결재라인
                setSignLine(Object.values(res.data.groupedApprovals))
            })
    }, [id])

    const deleteBtn = () => {
        fetcher().delete(`${DOCUMENT_DELETE_API}/${id}`)
            .then(
                alert("삭제 되었습니다."),
                navigate(-1)
            )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.upperContainer}>
                <div className={styles.buttonGroup}>
                    <Button className="button" onClick={()=>navigate(-1)}>목록으로</Button>
                    <Button className="button">결재하기</Button>
                    <Button className="button">수정하기</Button>
                    <Button className="button" onClick={deleteBtn}>삭제하기 </Button>
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
                        <Viewer initialValue={documentData?.content || ''}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentDetail