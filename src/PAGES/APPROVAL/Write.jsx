import styles from "./Write.module.css"
import Dropdown from 'react-bootstrap/Dropdown';

// 작성하기
function Write() {

    return(
        <div className={styles.wrapper}>
            <div className={styles.writeContainer}>
                <div className={styles.documentSelect}>
                    <h3>양식선택</h3>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles.dropToggle} >
                            양식을 선택하세요
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={styles.dropMenu}>
                            <Dropdown.Item>근태신청서</Dropdown.Item>
                            <Dropdown.Item>지출결의서</Dropdown.Item>
                            <Dropdown.Item>외근신청서</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className={styles.selectContainer}>
                    <h3>결재라인</h3>
                    <div className={styles.select}>
                        <div className={styles.title}>
                            <p>결재</p>
                            <img src={require("../../IMAGES/team.png")}/>
                        </div>
                            <input/>
                    </div>

                    <div className={styles.select}>
                        <div className={styles.title}>
                            <p>참조</p>
                            <img src={require("../../IMAGES/team.png")}/>
                        </div>
                            <input/>
                    </div>

                    <div className={styles.select}>
                        <div className={styles.title}>
                            <p>첨부파일</p>
                            <img src={require("../../IMAGES/upload.png")}/>
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