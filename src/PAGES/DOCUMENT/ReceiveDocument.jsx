import styles from "./ReceiveDocument.module.css"
import {useEffect, useState} from "react";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import fetcher from "../../fetcher";
import {RECEIVE_DOCUMENT_LIST_API} from "../../constants/api_constans";
import {useNavigate} from "react-router-dom";
import {DOCUMENT_DETAIL_COMPONENT} from "../../constants/component_constants";
import Pagination from "./components/Pagination";
import {backgroundColor} from "../../COMPONENT/StateButton";
import styled from "styled-components";

function ReceiveDocument() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    // 페이지네이션
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetcher.get(RECEIVE_DOCUMENT_LIST_API)
            .then((res) => setData(res.data))
    }, [])

    const routeDetail = (id) => {
        navigate(`/page/${DOCUMENT_DETAIL_COMPONENT}/${id}`);
    }

    const getBackgroundColor = (state) => {
        return backgroundColor[state] || "#ffffff"
    };

    return (
        <Wrapper>
            <div className={styles.search}>
                <InputGroup>
                    <FormControl type="text" className="form-control-lg" placeholder="제목"/>
                    <Button className={styles.searchButton}> 검색 </Button>
                </InputGroup>
            </div>

            <CardContainer>
                {data?.reverse().slice(offset, offset + limit).map((data) => {
                    return (
                        <Card key={data.id}>
                            <Contents>
                                <div className={styles.upperState}
                                     style={{background: getBackgroundColor(data.result)}}
                                >
                                    {data.result}
                                </div>

                                <div className={styles.documentInfo}>
                                    <div className={styles.cardUpper}>
                                        <div className={styles.cardTitle}>{data.title}</div>
                                    </div>
                                    <div className={styles.cardLower}>
                                        <div>기안자 : {data.writer.name} {data.writer.position}</div>
                                        <div>날짜 : {data.createDate}</div>
                                        <div>양식 : {data.template.category}</div>
                                    </div>
                                </div>
                            </Contents>

                            <div className={styles.divisionLine}/>

                            <div className={styles.approvalButton}
                                 style={{
                                     cursor: "pointer",
                                     color: data.result === "승인" || data.result === "반려" ? "gray" : ""
                                 }}
                                 onClick={() => routeDetail(data.id)}
                            >
                                {data.result === "승인" || data.result === "반려" ? "상세보기" : "결재하기"}
                            </div>
                        </Card>
                    )
                })}
            </CardContainer>

            <Pagination total={data.length} limit={limit} page={page} setPage={setPage}/>
        </Wrapper>
    )
}
export default ReceiveDocument

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const CardContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  min-width: 800px;
  width: 45%;
  height: 130px;
  border: 1px solid #afb0b1;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`