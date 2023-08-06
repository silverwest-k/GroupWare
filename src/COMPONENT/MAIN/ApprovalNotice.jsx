import styles from "./ApprovalNotice.module.css"
import fetcher from "../../fetcher";
import {STANDBY_APPROVAL_LIST_API} from "../../constants/api_constans";
import {useEffect} from "react";

function ApprovalNotice() {

    // useEffect(()=>{
    //     fetcher().get(STANDBY_APPROVAL_LIST_API)
    //         .then((res) => console.log(res.data))
    // },[])
    // TODO: API 에러 수정 요청

    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>결재 대기 문서</div>
            <div className={styles.container}>

            </div>
        </div>
    )
}

export default ApprovalNotice