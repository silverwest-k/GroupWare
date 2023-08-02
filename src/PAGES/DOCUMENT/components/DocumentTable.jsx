import styles from "../ReportDocument.module.css";
import {Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DOCUMENT_DETAIL_COMPONENT} from "../../../constants/component_constants";
import backgroundColor from "../ReceiveDocument"
import Pagination from "react-bootstrap/Pagination";
import {useState} from "react";

function DocumentTable({listData}) {
    // const [page, setPage] = useState(1);
    // const [limit, setLimit] = useState(10);

    // const offset = (page - 1) * limit;
    // const total = listData.length;

    const navigate = useNavigate();
    const routeDetail = (id) => {
        navigate(`/page/${DOCUMENT_DETAIL_COMPONENT}/${id}`);
    }
    const getBackgroundColor = (state) => {
        return backgroundColor[state] || "#ffffff"
    };

    return (
        <>
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
                    {/*{listData.slice(offset, offset + limit).map((data, index) => {*/}
                    {listData.map((data, index) => {
                        return (
                            <tr key={data.id} onClick={() => routeDetail(data.id)}>
                                <td>{index + 1}</td>
                                <td>{data.title}</td>
                                <td>{data.createDate.split("T", 1)}</td>
                                <td style={{display: "flex", justifyContent: "center"}}>
                                    <div className={styles.stateButton}
                                         style={{background: getBackgroundColor(data.state)}}
                                    >{data.state}</div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>

            {/*<div>*/}
            {/*    <Pagination total={total} limit={limit} page={page} setPage={setPage}/>*/}
            {/*</div>*/}
        </>
    )
}

export default DocumentTable