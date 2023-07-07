import {useState} from "react";
import styles from "./AccountManagement.module.css";
import modalStyles from "./Modal.module.css";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";

function AccountRegistration() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [no, setNo] = useState("");
    const [position, setPosition] = useState("");
    const [team, setTeam] = useState("");

    const Register = ()=>{
        axios.post("http://172.20.10.8:9091/admin/signup", {
            "name": name,
            "password": password,
            "no": no,
            "position": position,
            "team": team
        })
            .then((res)=>console.log(res))
            .catch((error) => console.log(error))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.upperButton}>
                    <div>
                        계정등록
                    </div>
                </div>

                <div className={styles.contents}>
                    <div className={styles.profile}>
                        <img src={require("../../IMAGES/profile.jpeg")} />
                        <Button variant="primary" className={styles.button}>사진등록</Button>
                    </div>

                    <div className={styles.inputContainer}>
                        <div className={styles.line}>
                            이　　름
                            <input onChange={(e)=>setName(e.target.value)}/>
                        </div>

                        <div className={styles.line}>
                            비밀번호
                            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>

                        <div className={styles.line}>
                            사　　번
                            <input onChange={(e)=>setNo(e.target.value)}/>
                        </div>

                        <div className={styles.line}>
                            부　　서
                            <input onChange={(e)=>setTeam(e.target.value)}/>
                            <img src={require("../../IMAGES/more.png")} className={styles.icon} />
                        </div>

                        <div className={styles.line}>
                            직　　급
                            <input onChange={(e)=>setPosition(e.target.value)}/>
                            <img src={require("../../IMAGES/more.png")} className={styles.icon} />
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div className={styles.modify}>
                        <Button variant="primary" className={styles.button}
                                onClick={handleShow}
                        >등록</Button>
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} className={modalStyles.modal} centered>
                <Modal.Header closeButton className={modalStyles.modalHeader}>
                    <Modal.Title style={{fontWeight: "bold"}}>계정 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    계정을 등록 하시겠습니까?
                </Modal.Body>
                <Modal.Footer>
                    {/*<div style={{float: "right"}}>*/}
                        <Button variant="danger"
                                className={modalStyles.button}
                                onClick={handleClose}
                        >취소</Button>

                        <Button variant="primary"
                                className={modalStyles.button}
                                onClick={Register}
                        >확인</Button>
                    {/*</div>*/}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AccountRegistration