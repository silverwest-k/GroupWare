import styles from "./ApprovalNotice.module.css"
import tableStyles from "../../PAGES/DOCUMENT/components/DocumentTable.module.css"
import fetcher from "../../fetcher";
import {STANDBY_APPROVAL_LIST_API} from "../../constants/api_constans";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {backgroundColor} from "../../PAGES/DOCUMENT/components/DocumentTable"
import {DOCUMENT_DETAIL_COMPONENT} from "../../constants/component_constants";

function ApprovalNotice() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetcher.get(STANDBY_APPROVAL_LIST_API)
            .then((res) => setData(res.data))
    }, [])

    const navigate = useNavigate();
    const routeDetail = (id) => {
        navigate(`/page/${DOCUMENT_DETAIL_COMPONENT}/${id}`);
    }

    const getBackgroundColor = (result) => {
        return backgroundColor[result] || "#ffffff"
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>결재 대기 문서</div>
            <div className={styles.container}>
                <div className={styles.tableBody}>
                <table>
                    <tbody>
                    {data?.map((data, index) => {
                        return (
                            <tr key={data.id} onClick={() => routeDetail(data.id)}>
                                <td>{data.createDate}</td>
                                {/*<td>문서양식</td>*/}
                                <td>{data.title}</td>
                                <td style={{display: "flex", justifyContent: "center"}}>
                                    <div className={tableStyles.stateButton}
                                         style={{background: getBackgroundColor(data.result)}}
                                    >{data.result}</div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default ApprovalNotice