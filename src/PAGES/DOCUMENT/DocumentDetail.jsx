import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {DOCUMENT_DELETE_API, DOCUMENT_READ_API, SHOW_CATEGORY_API} from "../../constants/api_constans";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import styles from "../APPROVAL/Write.module.css"
import {Viewer} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import SignTable from "../APPROVAL/SignTable";



function DocumentDetail() {
    const {id} = useParams();
    const [documentData, setDocumentData] = useState({});
    const [signLine, setSignLine] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        fetcher().get(`${DOCUMENT_READ_API}/${id}`)
            .then((res) => setDocumentData(res.data.document))
        // .then((res) => setSignLine(res.data?.groupedApprovals))
    }, [])

    const deleteBtn = () => {
        fetcher().delete(`${DOCUMENT_DELETE_API}/${id}`)
            .then(
                alert("삭제 되었습니다."),
                navigate(-1)
            )
    }

    console.log(documentData)

    return (
        <div className={styles.wrapper}>
            <div className={styles.upperContainer}>
                <div className={styles.buttonGroup}>
                    <Button className="button" onClick={()=>navigate(-1)}>목록으로</Button>
                    <Button className="button">수정하기</Button>
                    <Button className="button" onClick={deleteBtn}>삭제하기 </Button>
                </div>
            </div>

            <div className={styles.divisionLine}></div>
            <div className={styles.lowerContainer}>
                <div className={styles.categoryTitle}>
                    <p>문서양식명</p>
                </div>

                <SignTable/>

                <div className={styles.editorContainer}>
                    <div className={styles.documentTitle}> <p>제목 : </p>{documentData.title}</div>
                    <div className={styles.documentContent}>
                        <Viewer initialValue={documentData?.content || ''}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentDetail