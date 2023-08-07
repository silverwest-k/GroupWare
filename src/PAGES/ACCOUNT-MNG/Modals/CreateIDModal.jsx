import {Button, Modal} from "react-bootstrap";
import styles from "./Modal.module.css";

function CreateIDModal({showRegisterModal, handleRegisterModalClose, createID}) {
    return (
        <>
            <Modal show={showRegisterModal} onHide={handleRegisterModalClose} className={styles.modal} centered>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title style={{fontWeight: "bold"}}>계정 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    계정을 등록 하시겠습니까?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"
                            className={styles.button}
                            onClick={handleRegisterModalClose}
                    >취소</Button>

                    <Button variant="primary"
                            className={styles.button}
                            onClick={createID}
                    >확인</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateIDModal