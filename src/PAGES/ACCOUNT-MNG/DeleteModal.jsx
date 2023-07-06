import {Button, Modal} from "react-bootstrap";
import styles from "./AccountManagement.module.css";

function DeleteModal({showDeleteModal, handleDeleteModalClose}) {

    return(
        <>
            <Modal show={showDeleteModal} onHide={handleDeleteModalClose} className={styles.modal} centered>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title style={{fontWeight:"bold"}}>계정삭제</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    계정을 완전히 삭제하시겠습니까?
                    <div style={{float:"right"}}>
                        <Button variant="secondary"
                                onClick={handleDeleteModalClose}
                                style={{margin:"40px 15px 10px 0"}}
                        >취소</Button>

                        <Button variant="primary"
                                className={styles.button}
                                style={{margin:"40px 10px 10px 0"}}
                        >확인</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DeleteModal