import styles from "./Write.module.css"
import Dropdown from 'react-bootstrap/Dropdown';
import {Button} from "react-bootstrap";
import {useState} from "react";
import fetcher from "../../fetcher";
import {DOCUMENT_CREATE_API} from "../../constants/api_constans";
import ApprovalPathModal from "./ApprovalPathModal";

function Write() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [status, setStatus] = useState("1")

    const [showApprovalPathModal, setShowApprovalPathModal] = useState(false);

    const resetInput = ()=> {
        setTitle("")
        setContent("")
        setStatus("")
    }
    const saveBtn = (status) =>{
        fetcher().post(DOCUMENT_CREATE_API, {
            "title": title,
            "content": content,
            "status": status,
        })
            .then(resetInput)
            alert("상신되었습니다.")
    }

    const handleTempSave= ()=>{
        saveBtn(0)
    }
    const handleSave= ()=>{
        saveBtn(1)
    }

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
                    <div className={styles.title}>
                        <h3>결재라인</h3>
                        <Button className={styles.titleImg} onClick={()=>setShowApprovalPathModal(true)}>
                            <img src={require("../../IMAGES/team.png")}/>
                        </Button>
                    </div>
                    <div className={styles.select}>
                            <p className={styles.title}>결재</p>
                            <input/>
                    </div>

                    <div className={styles.select}>
                            <p className={styles.title}>참조</p>
                            <input/>
                    </div>

                    <div className={styles.select}>
                        <div className={styles.title}>
                            <h3>첨부파일</h3>
                            <Button className={styles.titleImg}>
                                <img src={require("../../IMAGES/upload.png")}/>
                            </Button>
                        </div>
                            <input/>
                    </div>

                    <div className={styles.buttonGroup}>
                        <Button variant="primary" className={styles.button}>작성취소</Button>
                        <Button variant="primary"
                                className={styles.button}
                                onClick={handleTempSave}
                        >임시저장</Button>
                        <Button variant="primary"
                                className={styles.button}
                                onClick={handleSave}
                        >상신하기</Button>
                    </div>
                </div>
            </div>

            <div className={styles.document}>
                <input placeholder="제목"
                       value={title}
                       onChange={(e) =>setTitle(e.target.value)}
                />
                <textarea placeholder="본문"
                          value={content}
                          onChange={(e)=>setContent(e.target.value)}
                />
            </div>

            <ApprovalPathModal showApprovalPathModal={showApprovalPathModal}
                               handleApprovalPathModalClose={() => setShowApprovalPathModal(false)}
            />
        </div>
    )
}

export default Write