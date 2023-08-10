import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {
    DOCUMENT_DELETE_API, TEMP_DOCUMENT_READ_API
} from "../../constants/api_constans";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import styles from "../APPROVAL/Write.module.css"
import {Viewer} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import TempDocumentSignTable from "./components/TempDocumentSignTable";
import Swal from "sweetalert2";

function DocumentDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [documentData, setDocumentData] = useState({});
    const [signLine, setSignLine] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);


    useEffect(() => {
        fetcher.get(`${TEMP_DOCUMENT_READ_API}/${id}`)
            .then((res) => {
                const { document, groupedApprovals } = res.data
                // 문서 정보
                setDocumentData(document)
                // 결재라인
                setSignLine(groupedApprovals[document.sno])
                setIsCompleted(true)
            })
    }, [id])
    // TODO: API 오류 수정중

    const deleteBtn = () => {
        fetcher.delete(`${DOCUMENT_DELETE_API}/${id}`)
            .then(
                Swal.fire({
                    position: 'mid',
                    icon: 'success',
                    title: '삭제 완료',
                    showConfirmButton: false,
                    timer: 1500
                }),
                navigate(-1)
            )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.upperContainer}>
                <div className={styles.buttonGroup}>
                    <Button className="button" onClick={()=>navigate(-1)}>목록으로</Button>
                    <Button className="button">상신하기</Button>
                    <Button className="button" onClick={deleteBtn}>문서삭제</Button>
                </div>
            </div>

            <div className={styles.divisionLine}></div>
            <div className={styles.lowerContainer}>
                <div className={styles.categoryTitle}>
                    <p>문서양식명</p>
                </div>

                <TempDocumentSignTable documentData={documentData} signLine={signLine}/>

                <div className={styles.editorContainer}>
                    <div className={styles.documentTitle}>
                        <p>제목 : </p>{documentData.title}
                    </div>
                    {/*<div className={styles.documentContent}>*/}
                    {/*    {isCompleted && <Viewer initialValue={documentData.content}/>}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default DocumentDetail