import {useEffect, useState} from "react";
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
            <CardContainer>
                {data?.reverse().slice(offset, offset + limit).map((data) => {
                    return (
                        <Card key={data.id}>
                            <Contents>
                                <UpperState style={{background: getBackgroundColor(data.result)}}>
                                    {data.result}
                                </UpperState>

                                <DocumentInfo>
                                    <CardUpper>
                                        <CardTitle>{data.title}</CardTitle>
                                    </CardUpper>
                                    <CardLower>
                                        <div>기안자 : {data.writer.name} {data.writer.position}</div>
                                        <div>날짜 : {data.createDate}</div>
                                        <div>양식 : {data.template.category}</div>
                                    </CardLower>
                                </DocumentInfo>
                            </Contents>

                            <DivisionLine/>

                            <ApprovalButton
                                 style={{
                                     cursor: "pointer",
                                     color: data.result === "승인" || data.result === "반려" ? "gray" : ""
                                 }}
                                 onClick={() => routeDetail(data.id)}
                            >
                                {data.result === "승인" || data.result === "반려" ? "상세보기" : "결재하기"}
                            </ApprovalButton>
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
  padding-top: 100px;
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
const UpperState = styled.div`
  font-size: 15px;
  font-weight: bold;
  border-top-left-radius: 15px;
  padding: 3px 20px;
`
const DocumentInfo = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const CardUpper = styled.div`
  display: flex;
  flex-direction: column;
`
const CardTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`
const CardLower = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: grey;
`
const DivisionLine = styled.div`
  border-right: 1px solid #afb0b1;
  height: 129px;
`
const ApprovalButton = styled.div`
  width: 15%;
  margin: auto;
  text-align: center;
`