import styles from "./ReportDocument.module.css"
import Pagination from 'react-bootstrap/Pagination';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import {Table} from "react-bootstrap";
import {useState} from "react";

function ReportDocument() {
    // const [stateButton, setStateButton] = useState("");

    const data = [
        {
            date:'2023-06-20',
            form:"휴가신청서",
            title:"비품 구매 요청서",
            state:"진행중"
        },
        {
            date:'2023-06-05',
            form:"외근신청서",
            title:"근태관련 신청서",
            state:"결재완료"
        },
        {
            date:'2023-05-30',
            form:"휴가신청서",
            title:"근태관련 신청서",
            state:"진행중"
        },
        {
            date:'2023-05-24',
            form:"업무협조",
            title:"사원증 신청서",
            state:"반려"
        }
    ]

    return(
        <div className={styles.wrapper}>
            <div className={styles.buttonGroup}>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton id="tbg-radio-1" value={1} className={styles.button}>전체</ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} className={styles.button}>진행중</ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} className={styles.button}>결재완료</ToggleButton>
                    <ToggleButton id="tbg-radio-4" value={4} className={styles.button}>반려</ToggleButton>
                </ToggleButtonGroup>
            </div>

            <div className={styles.tableContainer}>
                <Table hover>
                    <thead className={styles.tableHead}>
                        <tr>
                            <th>기안일</th>
                            <th>문서양식</th>
                            <th>제목</th>
                            <th>결재상태</th>
                        </tr>
                    </thead>

                    <tbody>
                    {data.map((data, index)=>{
                        const buttonClass =
                            data.state === "진행중" && styles.ongoing ||
                            data.state === "결재완료" && styles.completed ||
                            data.state === "반려" && styles.return;

                        return(
                            <tr key={index}>
                                <td>{data.date}</td>
                                <td>{data.form}</td>
                                <td>{data.title}</td>
                                <td  className={`${styles.stateButton} ${buttonClass}`}>{data.state}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>

            </div>

            <div className={styles.pagination}>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
    )
}

export default ReportDocument