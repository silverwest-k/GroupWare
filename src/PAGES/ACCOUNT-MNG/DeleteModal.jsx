import {Button, Modal} from "react-bootstrap";
import styles from "./Modal.module.css";

function DeleteModal({showDeleteModal, handleDeleteModalClose}) {

    return (
        <>
            <Modal show={showDeleteModal} onHide={handleDeleteModalClose} className={styles.modal} centered>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title style={{fontWeight: "bold"}}>계정 삭제</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    계정을 완전히 삭제하시겠습니까?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger"
                            className={styles.button}
                            onClick={handleDeleteModalClose}
                    >취소</Button>

                    <Button variant="primary"
                            className={styles.button}
                    >확인</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal