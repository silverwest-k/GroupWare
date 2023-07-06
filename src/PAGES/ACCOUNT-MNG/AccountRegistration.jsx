import {useState} from "react";
import styles from "./AccountManagement.module.css";
import {Button, Modal} from "react-bootstrap";
import DeleteModal from "./DeleteModal";


function AccountRegistration() {
    const [show, setShow] = useState(false);

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
                            이　　름 <input/>
                        </div>

                        <div className={styles.line}>
                            비밀번호 <input type="password" />
                        </div>

                        <div className={styles.line}>
                            사　　번 <input/>
                        </div>

                        <div className={styles.line}>
                            부　　서 <input/>
                            <img src={require("../../IMAGES/more.png")} className={styles.icon} />
                        </div>

                        <div className={styles.line}>
                            직　　급 <input/>
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

            <Modal
                show={show}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
                centered
                className={styles.modal}
            >
                <DeleteModal handleClose={handleClose} />
            </Modal>
        </div>
    )
}

export default AccountRegistration