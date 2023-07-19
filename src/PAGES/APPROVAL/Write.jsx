import styles from "./Write.module.css"
import Dropdown from 'react-bootstrap/Dropdown';
import {Button} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

// 작성하기
function Write() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [status, setStatus] = useState("1")

    const resetInput = ()=> {
        setTitle("")
        setContent("")
        setStatus("")
    }
    const submit = (status) =>{
        axios.post("http://172.20.10.26:9091/documents/create", {
            "title": title,
            "content": content,
            "status": status,
        }) .then(resetInput)
    }

    const handleTempSave= ()=>{
        submit(0)
    }
    const handleSave= ()=>{
        submit(1)
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
        </div>
    )
}

export default Write