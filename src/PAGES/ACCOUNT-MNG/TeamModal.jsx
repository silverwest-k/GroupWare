import {Button, Modal} from "react-bootstrap";
import styles from "./Modal.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import useStore from "../../store";

function TeamModal({showTeamModal, handleTeamModalClose}) {

    const [team, setTeam] = useState([]);
    const {selectTeam} = useStore(state => state);

    const pickTeam = (team) => {
        selectTeam(team);
        handleTeamModalClose();
    }

    useEffect(() => {
        fetchTeamData();
    }, []);

     const fetchTeamData = () => {
        // axios.get("http://172.20.10.26:9091/team")
         axios.get("http://localhost:8080/team")
            .then((res) => setTeam(res.data))
    };

    return (
        <>
            <Modal show={showTeamModal} onHide={handleTeamModalClose} className={styles.modal} centered>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title style={{fontWeight: "bold"}}>부서 선택</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {team.map((data)=>{
                        return(
                            <p className={styles.position} style={{cursor:"pointer"}}
                               onClick={()=>pickTeam(data.name)}
                            >{data.name}</p>
                        )
                    })}

                    <div style={{float: "right"}}>
                        <Button variant="secondary"
                                className={styles.button}
                                onClick={handleTeamModalClose}
                        >취소</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TeamModal