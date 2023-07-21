import {Button, Modal} from "react-bootstrap";
import styles from "./Modal.module.css";
import {useEffect, useState} from "react";
import useStore from "../../store";
import {fetcher} from "../../Request";

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
         fetcher().get("/team")
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