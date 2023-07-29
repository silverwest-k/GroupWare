import styles from "./Write.module.css"
import Dropdown from 'react-bootstrap/Dropdown';
import {Button} from "react-bootstrap";
import {useState} from "react";
import fetcher from "../../fetcher";
import {DOCUMENT_CREATE_API} from "../../constants/api_constans";
import ApprovalPathModal from "./ApprovalPathModal";
import useStore from "../../store";

function Write() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [status, setStatus] = useState("1")
    const [formTitle, setFormTitle] = useState("양식을 선택하세요")

    const [showApprovalPathModal, setShowApprovalPathModal] = useState(false);
    const {myAccount} = useStore(state => state)

    const resetInput = () => {
        setTitle("")
        setContent("")
        setStatus("")
    }
    const saveBtn = (status) => {
        fetcher().post(DOCUMENT_CREATE_API, {
            "title": title,
            "content": content,
            "status": status,
        })
            .then(resetInput)
        alert("상신되었습니다.")
    }

    const handleTempSave = () => {
        saveBtn(0)
    }
    const handleSave = () => {
        saveBtn(1)
    }

    const time = new Date();
    const toDay = {
        year: time.getFullYear(),
        month: time.getMonth() + 1,
        day: time.getDate()
    }
    console.log(toDay);
    const sign_Table_Left_data = [
        {title: "기안자", content: `${myAccount.name}`},
        {title: "기안부서", content: `${myAccount.team}`},
        {title: "기안일", content: `${toDay.year}-${toDay.month}-${toDay.day}`},
        {title: "문서번호", content: `문서번호`}
    ]

    const sign_Table_Right_data = [
        {signTurn: "작성", sign: "결재완료", signName: `${myAccount.name}${myAccount.position}`},
        {signTurn: "검토", sign: "결재중", signName: "김성철 대리"},
        {signTurn: "승인", sign: "", signName: "강동원 차장"}
    ]

    const formTitles =  ["휴가신청서", "지출결의서", "외근신청서"]
    const handleDropdownSelect = (title)=> { setFormTitle(title)}

    return (
        <div className={styles.wrapper}>
            <div className={styles.upperContainer}>
                <div className={styles.select}>
                    <Dropdown>
                        <Dropdown.Toggle className="button">
                            문서양식
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.dropMenu}>
                            {formTitles.map((data)=>{
                                return(
                                    <Dropdown.Item onClick={() => handleDropdownSelect(data)}>
                                        {data}
                                    </Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button className="button" onClick={() => setShowApprovalPathModal(true)}>결재라인</Button>
                </div>

                <div className={styles.buttonGroup}>
                    <Button className="button">작성취소</Button>
                    <Button className="button" onClick={handleTempSave}>임시저장</Button>
                    <Button className="button" onClick={handleSave}>상신하기</Button>
                </div>
            </div>

            <div className={styles.lowerContainer}>
                <div className={styles.formTitle}><p>{formTitle}</p></div>
                <div className={styles.signTable}>
                    <div>
                        <table>
                            <tbody>
                            {sign_Table_Left_data.map((data) => {
                                return (
                                    <tr>
                                        <td className={styles.signTableLeft_title}>{data.title}</td>
                                        <td className={styles.signTableLeft_content}>{data.content}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <th className={styles.signTableRight_title}>결재</th>
                                {sign_Table_Right_data.map((data) => {
                                    return (
                                        <td className={styles.signTableRight_content}>
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td>{data.signTurn}</td>
                                                </tr>
                                                <tr>
                                                    <td>{data.sign}</td>
                                                </tr>
                                                <tr>
                                                    <td>{data.signName}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    )
                                })}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <input placeholder="제목"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea placeholder="본문"
                              value={content}
                              onChange={(e) => setContent(e.target.value)}
                    />
                </div>
            </div>

            <ApprovalPathModal showApprovalPathModal={showApprovalPathModal}
                               handleApprovalPathModalClose={() => setShowApprovalPathModal(false)}
            />
        </div>
    )
}

export default Write