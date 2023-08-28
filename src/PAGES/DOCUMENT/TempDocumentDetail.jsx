import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {
    DOCUMENT_DELETE_API, TEMP_DOCUMENT_READ_API
} from "../../constants/api_constans";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import TempDocumentSignTable from "./components/TempDocumentSignTable";
import Swal from "sweetalert2";
import parse from "html-react-parser";
import {
    ButtonGroup,
    CategorySelect,
    CategoryTitle,
    DivisionLine, DocumentTitle, EditorContainer,
    LowerContainer,
    UpperContainer,
    Wrapper
} from "../APPROVAL/Write";

function TempDocumentDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [documentData, setDocumentData] = useState({});
    const [signLine, setSignLine] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        fetcher.get(`${TEMP_DOCUMENT_READ_API}/${id}`)
            .then((res) => {
                // const { document, groupedApprovals } = res.data
                // 문서 정보
                setDocumentData(res.data)
                // 결재라인 - 임시저장에서 결재라인 아직 구현안됨
                // setSignLine(groupedApprovals[document.sno])
                setIsCompleted(true)
            })
            .catch((err)=>console.log(err))
    }, [id])


    const deleteBtn = () => {
        Swal.fire({
            title: "문서를 삭제 하시겠습니까?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '확인',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                fetcher.delete(`${DOCUMENT_DELETE_API}/${id}`)
                    .then(()=>{
                            Swal.fire({
                                position: 'mid',
                                icon: 'success',
                                title: '삭제 완료',
                                showConfirmButton: false,
                                timer: 1500
                            })
                                navigate(-1)
                    })
            }
        })
    }

    return (
        <Wrapper>
            <UpperContainer>
                <CategorySelect>
                    <Button className="button">문서수정</Button>
                    <Button className="button" onClick={deleteBtn}>문서삭제</Button>
                </CategorySelect>
                <ButtonGroup>
                    <Button className="button" onClick={()=>navigate(-1)}>목록으로</Button>
                </ButtonGroup>
            </UpperContainer>

            <DivisionLine/>

            <LowerContainer>
                <CategoryTitle>
                    <p>문서양식명</p>
                </CategoryTitle>

                <TempDocumentSignTable documentData={documentData} signLine={signLine}/>

                <EditorContainer>
                    <DocumentTitle>
                        <p>제목 : </p>{documentData.title}
                    </DocumentTitle>
                    <div>
                        <div>{isCompleted && parse(documentData.content)}</div>
                    </div>
                </EditorContainer>
            </LowerContainer>
        </Wrapper>
    )
}

export default TempDocumentDetail