import styles from "./Write.module.css"
import Dropdown from 'react-bootstrap/Dropdown';
import {Button} from "react-bootstrap";

// 작성하기
function Write() {

    return(
        <div className={styles.wrapper}>
            <div className={styles.formContainer}>
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

                    <diV className={styles.buttonGroup}>
                        <Button variant="primary" className={styles.button}>작성취소</Button>
                        <Button variant="primary" className={styles.button}>임시저장</Button>
                        <Button variant="primary" className={styles.button}>상신하기</Button>
                    </diV>
                </div>
            </div>

            <div className={styles.document}>
                <form action="" method="POST">
                    <textarea name="text" id="editor"></textarea>
                    <button type="submit">전송</button>
                </form>
                <script src="../../COMPONENT/LAYOUT/ckeditor.js"></script>
                <script>
                    ClassicEditor.create( document.querySelector( '#editor' ) );
                </script>
            </div>

        </div>
    )
}

export default Write