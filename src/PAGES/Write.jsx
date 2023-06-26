import styles from "./Write.module.css"

// 작성하기
function Write() {
    const documents = [
        { label: '휴가 신청서', id: 1 },
        { label: '지출 결의서', id: 2 },
        ]

    return(
        <div className={styles.wrapper}>
            <div className={styles.writeContainer}>
                <div className={styles.documentSelect}>
                    <h3>양식선택</h3>
                    {/*<Autocomplete*/}
                    {/*    disablePortal*/}
                    {/*    id="combo-box-demo"*/}
                    {/*    options={documents}*/}
                    {/*    sx={{ width: 300 }}*/}
                    {/*    renderInput={(params) => <TextField {...params} label="양식을 선택하세요"/>}*/}
                    {/*/>*/}
                </div>

                <div className={styles.selectContainer}>
                    <h3>결재라인</h3>
                    <div className={styles.select}>
                        <div className={styles.title}>
                            <p>결재</p>
                            <img src={require("../IMAGES/team.png")}/>
                        </div>
                            <input/>
                    </div>

                    <div className={styles.select}>
                        <div className={styles.title}>
                            <p>참조</p>
                            <img src={require("../IMAGES/team.png")}/>
                        </div>
                            <input/>
                    </div>

                    <div className={styles.select}>
                        <div className={styles.title}>
                            <p>첨부파일</p>
                            <img src={require("../IMAGES/upload.png")}/>
                        </div>
                            <input/>
                    </div>
                </div>
            </div>

            <div className={styles.document}>
                문서양식
            </div>

        </div>
    )
}

export default Write