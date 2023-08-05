import styles from "./DocumentTable.module.css";
import {Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DOCUMENT_DETAIL_COMPONENT} from "../../../constants/component_constants";
import {useState} from "react";

export const backgroundColor = {
    "진행중": "#f6c76a",
    "승인": "#87ea85",
    "반려": "#fb6a76"
}

function DocumentTable({listData}) {
    const navigate = useNavigate();
    const routeDetail = (id) => {
        navigate(`/page/${DOCUMENT_DETAIL_COMPONENT}/${id}`);
    }
    const getBackgroundColor = (reult) => {
        return backgroundColor[reult] || "#ffffff"
    };

    return (
        <div>
            <Table hover className={styles.table}>
                <thead className={styles.tableHead}>
                <tr>
                    <th>NO</th>
                    <th>제목</th>
                    <th>기안일</th>
                    <th>상태</th>
                </tr>
                </thead>

                <tbody className={styles.tableBody}>
                {listData.map((data, index) => {
                    return (
                        <tr key={data.id} onClick={() => routeDetail(data.id)}>
                            <td>{index + 1}</td>
                            <td>{data.title}</td>
                            <td>{data.createDate}</td>
                            <td style={{display: "flex", justifyContent: "center"}}>
                                <div className={styles.stateButton}
                                     style={{background: getBackgroundColor(data.result)}}
                                >{data.result}</div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>

    )
}

export default DocumentTable