import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {DOCUMENT_DELETE_API, DOCUMENT_READ_API} from "../../constants/api_constans";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./ReportDocument.module.css";
import {Button} from "react-bootstrap";
import {REPORT_DOCUMENT_COMPONENT} from "../../constants/component_constants";


function DocumentDetail() {

    const {id} = useParams();
    const [documentData, setDocumentData] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        fetcher().get(`${DOCUMENT_READ_API}/${id}`)
            .then((res) => setDocumentData(res.data))
    }, [])

    const deleteBtn = () => {
        fetcher().delete(`${DOCUMENT_DELETE_API}/${id}`)
            .then(
                alert("삭제 되었습니다."),
                navigate(-1)
            )
    }

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>
                <div>제목 : {documentData.title}</div>
                <hr/>
                <div>본문 :{documentData.content}</div>
            </div>
            <hr/>
            <div style={{display:"flex", flexDirection:"row"}}>
                <Button> 수정 </Button>
                <Button onClick={deleteBtn}> 삭제 </Button>
            </div>

        </div>
    )
}

export default DocumentDetail