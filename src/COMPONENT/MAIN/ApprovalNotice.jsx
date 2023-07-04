import styles from "./ApprovalNotice.module.css"
import {Link} from "react-router-dom";
import useStore from "../../store";

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
                    <Link to="/page/receivedocument"
                          onClick={()=>menuName("수신문서")}
                    >12</Link>
                </div>
                <div className={styles.divisionLine}></div>

                <div className={styles.notice}>
                    <p>상신 문서</p>
                    <Link to="/page/reportdocument"
                          onClick={()=>menuName("상신문서")}
                    >6</Link>
                </div>
                <div className={styles.divisionLine}></div>

                <div className={styles.notice}>
                    <p>임시 보관함</p>
                    <Link to=""
                          onClick={()=>menuName("임시보관함")}
                    >3</Link>
                </div>
            </div>
        </div>
    )
}

export default ApprovalNotice