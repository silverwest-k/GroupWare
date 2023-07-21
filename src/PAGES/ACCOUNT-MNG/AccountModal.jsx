import styles from "./Modal.module.css";
import tableStyles from "./AccountModal.module.css";
import {Button, FormControl, InputGroup, Modal, Table} from "react-bootstrap";
import useStore from "../../store";
import {useEffect, useState} from "react";
import {fetcher} from "../../Request";

function AccountModal({showAccountModal,handleAccountModalClose}) {
    const {selectAccount} = useStore(state => state)
    const [members, setMembers] = useState([]);

    useEffect(()=>{
        fetcher().get("/members")
            .then((res) => setMembers(res.data))
    },[])

    const pickAccount = (account) => {
        selectAccount(account);
        handleAccountModalClose();
    }

    return(
        <div>
            <Modal show={showAccountModal} onHide={handleAccountModalClose}
                   className={`${styles.modal} ${tableStyles.wrap}`} centered
            >
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title style={{fontWeight: "bold"}}>계정 선택</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className={tableStyles.tableContainer}>

                            <div className={tableStyles.search}>
                                <InputGroup className="mb-3">
                                    <FormControl type="text" className="form-control-lg" placeholder="이름" />
                                    <Button className={tableStyles.searchButton}> 검색 </Button>
                                </InputGroup>
                            </div>

                            <Table hover>
                                <thead className={tableStyles.tableHead}>
                                <tr>
                                    <th>사번</th>
                                    <th>성명</th>
                                    <th>직급</th>
                                    <th>부서</th>
                                </tr>
                                </thead>

                                <tbody>
                                {members.map((data)=>{
                                    return(
                                        <tr key={data.no} style={{cursor:"pointer"}}
                                            onClick={()=>pickAccount(data)}
                                        >
                                            <td>{data.no}</td>
                                            <td>{data.name}</td>
                                            <td>{data.position}</td>
                                            <td>{data.team}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div style={{float: "right"}}>
                        <Button variant="secondary"
                                className={styles.button}
                                onClick={handleAccountModalClose}
                        >취소</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AccountModal