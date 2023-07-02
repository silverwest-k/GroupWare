import styles from "./ReceiveDocument.module.css"

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
        }
    ]

    const getBackgroundColor = (state) => {
        return state === "진행중" ? "orange" : state === "완료" ? "#afb0b1" : state === "반려" ? "red" : "white";
    };

    return(
        <div className={styles.wrapper}>
            {data.map((data, index)=> {
                return(
                    <div className={styles.cardContainer}>
                        <div className={styles.contents}>
                            <div className={styles.upperState}
                                style={{background:getBackgroundColor(data.state)}}
                            >
                                {data.state}
                            </div>
                            <div className={styles.cardUpper}>
                                <h2>{data.title}</h2>
                            </div>
                            <div className={styles.cardLower}>
                                <div>기안자 : {data.name}</div>
                                <div>날짜 : {data.date}</div>
                                <div>양식 : {data.form}</div>
                            </div>
                        </div>

                        <div className={styles.divisionLine}/>

                        <div className={styles.approvalButton}
                             style={{ cursor: data.state === "완료" ? "not-allowed" : "pointer" }}
                        >
                            결재하기
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ReceiveDocument