import styles from "./ReceiveDocument.module.css"
import Pagination from "react-bootstrap/Pagination";
import {useState} from "react";
import {Button, FormControl, InputGroup} from "react-bootstrap";

function ReceiveDocument() {
    const data = [
        {
            title: "연차소진관련 근태신청",
            name: "장그래 사원",
            date: "2023-07-01",
            form: "휴가신청서",
            state: "진행중"
        },
        {
            title: "떡볶이 구매 관련 지출결의서",
            name: "구은서 사원",
            date: "2023-07-01",
            form: "지출결의서",
            state: "완료"
        },
        {
            title: "사원증 재발급 신청",
            name: "안영이 사원",
            date: "2023-06-30",
            form: "업무협조",
            state: "반려"
        },
        {
            title: "떡볶이 구매 관련 지출결의서",
            name: "구은서 사원",
            date: "2023-07-01",
            form: "지출결의서",
            state: "완료"
        },
        {
            title: "떡볶이 구매 관련 지출결의서",
            name: "구은서 사원",
            date: "2023-07-01",
            form: "지출결의서",
            state: "완료"
        },
        {
            title: "떡볶이 구매 관련 지출결의서",
            name: "구은서 사원",
            date: "2023-07-01",
            form: "지출결의서",
            state: "완료"
        },
        {
            title: "떡볶이 구매 관련 지출결의서",
            name: "구은서 사원",
            date: "2023-07-01",
            form: "지출결의서",
            state: "완료"
        },
        {
            title: "떡볶이 구매 관련 지출결의서",
            name: "구은서 사원",
            date: "2023-07-01",
            form: "지출결의서",
            state: "완료"
        },
        {
            title: "떡볶이 구매 관련 지출결의서",
            name: "구은서 사원",
            date: "2023-07-01",
            form: "지출결의서",
            state: "완료"
        },
    ]

    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const offset= (page - 1) * limit;
    const total = data.length;
    const pageNum = Math.ceil(total/limit);
    const getBackgroundColor = (state) => {
        return state === "진행중" ? "#f6c76a" : state === "완료" ? "#afb0b1" : state === "반려" ? "#f6736a" : "white";
    };

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.search}>
                    <InputGroup className="mb-3">
                        <FormControl type="text" className="form-control-lg" placeholder="제목" />
                        <Button className={styles.searchButton}> 검색 </Button>
                    </InputGroup>
                </div>

                    {data.slice(offset, offset + limit).map((data, index)=> {
                    return(
                        <div className={styles.cardContainer}>
                            <div className={styles.contents}>
                                <div className={styles.upperState}
                                    style={{background:getBackgroundColor(data.state)}}
                                >
                                    {data.state}
                                </div>
                                <div className={styles.cardUpper}>
                                    <h5>{data.title}</h5>
                                </div>
                                <div className={styles.cardLower}>
                                    <div>기안자 : {data.name}</div>
                                    <div>날짜 : {data.date}</div>
                                    <div>양식 : {data.form}</div>
                                </div>
                            </div>

                            <div className={styles.divisionLine}/>

                            <div className={styles.approvalButton}
                                 style={{ cursor: data.state === "완료" ? "not-allowed" : "pointer" ,
                                          color: data.state === "완료" ? "gray" : ""
                            }}
                            >
                                결재하기
                            </div>
                        </div>
                    )
                })}

                <div className={styles.pagination}>
                    <Pagination>
                        <Pagination.First onClick={()=>setPage(1)} disabled={page===1}/>
                        <Pagination.Prev onClick={()=>setPage(page-1)} disabled={page===1}/>
                        {Array(pageNum)
                            .fill()
                            .map((_, i)=>(
                                <Pagination.Item
                                    key={i+1}
                                    onClick = {()=> setPage(i+1)}
                                    aria-current={page === i+1 && "page"}
                                >
                                    {i+1}
                                </Pagination.Item>
                            ))
                        }
                        <Pagination.Next onClick={()=>setPage(page+1)} disabled={page===pageNum} />
                        <Pagination.Last onClick={()=>setPage(pageNum)} disabled={page===pageNum}/>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default ReceiveDocument