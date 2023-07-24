import styles from "./ApprovalNotice.module.css"
import {Link} from "react-router-dom";
import useStore from "../../store";
import {
    RECEIVE_DOCUMENT_COMPONENT,
    REPORT_DOCUMENT_COMPONENT,
    TEMP_DOCUMENT_COMPONENT
} from "../../constants/component_constants";

function ApprovalNotice() {

    const {changeTitle} = useStore(state => state)

    const menuName = (menu) => {
        changeTitle(menu);
    };

    return(
        <div className={styles.wrapper}>
            <div style={{paddingLeft : "30px"}}>
                <h2>전자결재</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.notice}>
                    <p>수신 문서</p>
                    <Link to={RECEIVE_DOCUMENT_COMPONENT}
                          onClick={()=>menuName("수신문서")}
                    >12</Link>
                </div>
                <div className={styles.divisionLine}></div>

                <div className={styles.notice}>
                    <p>상신 문서</p>
                    <Link to={REPORT_DOCUMENT_COMPONENT}
                          onClick={()=>menuName("상신문서")}
                    >6</Link>
                </div>
                <div className={styles.divisionLine}></div>

                <div className={styles.notice}>
                    <p>임시 보관함</p>
                    <Link to={TEMP_DOCUMENT_COMPONENT}
                          onClick={()=>menuName("임시보관함")}
                    >3</Link>
                </div>
            </div>
        </div>
    )
}

export default ApprovalNotice