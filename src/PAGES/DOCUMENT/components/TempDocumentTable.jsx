import styles from "./DocumentTable.module.css";
import {Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {TEMP_DOCUMENT_COMPONENT} from "../../../constants/component_constants";
import {backgroundColor} from "./DocumentTable";

function TempDocumentTable({listData}) {
    const navigate = useNavigate();

    const routeTempDetail = (id) => {
        navigate(`/page/${TEMP_DOCUMENT_COMPONENT}/${id}`);
    }

    const getBackgroundColor = (result) => {
        return backgroundColor[result] || "#ffffff"
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
                        <tr key={data.id} onClick={() => routeTempDetail(data.id)}>
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

export default TempDocumentTable