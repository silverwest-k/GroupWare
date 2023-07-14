import styles from "./ReportDocument.module.css"
import Pagination from 'react-bootstrap/Pagination';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import {Button, Form, FormControl, InputGroup, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

function ReportDocument() {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const offset= (page - 1) * limit;
    const total = data.length;
    const pageNum = Math.ceil(total/limit);

    useEffect(() => {
        axios.get("http://localhost:8080/documents")
            .then((res) => setData(res.data))
    }, []);

    const getBackgroundColor = (state) => {
        return state === "진행중" ? "#f6c76a" : state === "완료" ? "#87ea85" : state === "반려" ? "#fb6a76" : "white";
    };

    return(
        <div className={styles.wrapper}>
            <div style={{height:"10%"}}/>
            <div className={styles.divisionLine}></div>
                <div className={styles.buttonGroup}>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton id="tbg-radio-1" value={1} className={styles.button}>전체</ToggleButton>
                        <ToggleButton id="tbg-radio-2" value={2} className={styles.button}>진행중</ToggleButton>
                        <ToggleButton id="tbg-radio-3" value={3} className={styles.button}>결재완료</ToggleButton>
                        <ToggleButton id="tbg-radio-4" value={4} className={styles.button}>반려</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            <div className={styles.divisionLine}></div>

            <div className={styles.tableContainer}>

                <div className={styles.search}>
                    <InputGroup className="mb-3">
                        <FormControl type="text" className="form-control-lg" placeholder="제목" />
                        <Button className={styles.searchButton}> 검색 </Button>
                    </InputGroup>
                </div>

                <Table hover>
                    <thead className={styles.tableHead}>
                        <tr>
                            <th>NO</th>
                            <th>기안일</th>
                            <th>제목</th>
                            <th>상태</th>
                        </tr>
                    </thead>

                    <tbody className={styles.tableBody}>
                    {data.slice(offset, offset + limit).map((data)=>{
                        return(
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.date}</td>
                                <td>{data.title}</td>
                                <td><p className={styles.stateButton}
                                        style={{background:getBackgroundColor(data.state)}}
                                >{data.state}</p></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>

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
                {/*<Pagination.Ellipsis />*/}
            </div>
        </div>
    )
}

export default ReportDocument