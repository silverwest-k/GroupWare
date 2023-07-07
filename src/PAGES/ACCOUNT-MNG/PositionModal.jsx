import axios from "axios";
import {useEffect, useState} from "react";
import styles from "./Modal.module.css";
import {Button, Modal} from "react-bootstrap";
import useStore from "../../store";


function PositionModal({showPositionModal,handlePositionModalClose}) {
    const [position, setPosition] =useState([]);
    const {selectPosition} = useStore(state => state);
    const FetchPositionData= () => {
        axios.get("http://172.20.10.26:9091/position")
            .then(res=> setPosition(res.data))
            .catch((error) => console.log(error));
    }

    useEffect(()=>{
        FetchPositionData();
    },[])

    const changePosition =(e)=> {
        selectPosition(e);
        handlePositionModalClose();
    }

    return(
        <div className={styles.wrap}>
            <Modal show={showPositionModal} onHide={handlePositionModalClose} className={styles.modal} centered>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title style={{fontWeight: "bold"}}>직급 선택</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {position.map((data)=>{
                        return(
                            <p className={styles.position} style={{cursor:"pointer"}}
                               onClick={()=>changePosition(data.name)}
                            >{data.name}</p>
                        )
                    })}

                    <div style={{float: "right"}}>
                        <Button variant="secondary"
                                className={styles.button}
                                onClick={handlePositionModalClose}
                        >취소</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PositionModal