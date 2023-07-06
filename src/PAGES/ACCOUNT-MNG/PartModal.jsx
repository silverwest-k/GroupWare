import {Button, Modal} from "react-bootstrap";
import styles from "./AccountManagement.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";

function PartModal({showPartModal, handlePartModalClose}) {

    const [part, setPart] = useState([]);

    useEffect(() => {
        fetchPartData();
    }, []);

    useEffect(() => {
        if (showPartModal) {
            fetchTeamData();
        }
    }, [showPartModal]);

    const fetchPartData = () => {
        axios.get("http://172.20.10.26:9091/part")
            .then((res) => setPart(res.data))
            .catch((error) => console.error("Error fetching part data:", error));
    };

    const fetchTeamData = async ()=>{
        for (let i = 1; i <= 7; i++) {
            try {
                const res = await axios.get(`http://172.20.10.26:9091/part/${i}/team`);
                setPart((prevPart) => {
                    const updatedPart = [...prevPart];
                    updatedPart[i - 1].teams = res.data;
                    return updatedPart;
                });
            } catch (error) {
                console.log(`Error fetching team data for ${i}:`, error);
            }
        }
    }

    return(
        <>
            <Modal show={showPartModal} onHide={handlePartModalClose} className={styles.modal} centered>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title style={{fontWeight:"bold"}}>부서선택</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <ul>
                            {part.map((data, i) => (
                                // <li key={data.id}>
                                //     {data.name}
                                //     <ul>
                                //         {data.teams &&
                                //             data.teams.map((team) => (
                                //                 <li key={team.id}>
                                //                     {team.name}
                                //                 </li>
                                //             ))}
                                //     </ul>
                                // </li>
                                <Accordion>
                                    <Accordion.Item eventKey={i}>
                                        <Accordion.Header key={data.id}>{data.name}</Accordion.Header>
                                        {data.teams && data.teams.map((team) => (
                                            <Accordion.Body key={team.id}>
                                                {team.name}
                                            </Accordion.Body>
                                        ))}
                                    </Accordion.Item>
                                </Accordion>
                            ))}
                        </ul>
                    </div>

                    <div style={{float:"right"}}>
                        <Button variant="secondary"
                                onClick={handlePartModalClose}
                                style={{margin:"40px 15px 10px 0"}}
                        >취소</Button>

                        {/*<Button variant="primary"*/}
                        {/*        className={styles.button}*/}
                        {/*        style={{margin:"40px 10px 10px 0"}}*/}
                        {/*>확인</Button>*/}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PartModal