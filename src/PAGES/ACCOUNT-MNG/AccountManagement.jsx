import {Button, Modal, ToggleButton} from "react-bootstrap";
import styles from "./AccountManagement.module.css"
import {useState} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DeleteModal from "./DeleteModal";
import TeamModal from "./TeamModal";
import useStore from "../../store";
import PositionModal from "./PositionModal";
import AccountModal from "./AccountModal";
import {fetcher} from "../../Request";

function AccountManagement() {
    const [radioValue, setRadioValue] = useState('1');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showTeamModal, setShowTeamModal] = useState(false);
    const [showPositionModal, setShowPositionModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);

    const {account, teamName, positionName} = useStore(state => state);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [no, setNo] = useState("");
    const [team, setTeam] = useState("");
    const [position, setPosition] = useState("");

    const radioState = [
        { name: '일반계정', value: '1' },
        { name: '관리자계정', value: '2' },
        { name: '접속차단', value: '3' }
    ];

    const resetInput = () =>{
        setName("")
        setPassword("")
        setNo("")
        setTeam("")
        setPosition("")
    }

    const deleteAccount = () => {
        fetcher().delete(`/admin/members/${no}`)
            .then(() => {
                console.log(no);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleDeleteModalOpen = () => setShowDeleteModal(true);
    const handleDeleteModalClose = () => setShowDeleteModal(false);
    const handleTeamModalOpen = () => setShowTeamModal(true);
    const handleTeamModalClose = () => setShowTeamModal(false);
    const handlePositionModalOpen = () => setShowPositionModal(true);
    const handlePositionModalClose = () => setShowPositionModal(false);
    const handleAccountModalOpen = () => setShowAccountModal(true);
    const handleAccountModalClose = () => setShowAccountModal(false);


    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.upperButton}>
                    <div>
                        계정관리
                        <Button variant="primary"
                                className={styles.button} style={{marginLeft:"15px"}}
                                onClick={handleAccountModalOpen}
                        >불러오기</Button>
                    </div>
                    <Button variant="primary"
                            className={styles.button}
                            onClick={deleteAccount}
                            // onClick={handleDeleteModalOpen}
                    >삭제</Button>
                </div>

                <div className={styles.contents}>
                    <div className={styles.profile}>
                        <img src={require("../../IMAGES/profile.jpeg")} />
                        <Button variant="primary" className={styles.button}>사진등록</Button>
                    </div>

                    <div className={styles.inputContainer}>
                        <div className={styles.inputLine}>
                            이　　름 <input value={account.name}
                                        onChange={(e)=>setName(e.target.value)}
                        />
                        </div>

                        <div className={styles.inputLine}>
                            비밀번호 <input value={account.password}
                                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        </div>

                        <div className={styles.inputLine}>
                            사　　번 <input value={account.no}
                                        onChange={(e)=>setNo(e.target.value)}
                        />
                        </div>

                        <div className={styles.inputLine}>
                            부　　서 <input value={teamName || account.team}
                                        onChange={(e)=>setTeam(e.target.value)}
                        />
                            <img src={require("../../IMAGES/more.png")}
                                 className={styles.icon}
                                 onClick={handleTeamModalOpen}
                            />
                        </div>

                        <div className={styles.inputLine}>
                            직　　급 <input value={positionName || account.position}
                                        onChange={(e)=>setPosition(e.target.value)}
                        />
                            <img src={require("../../IMAGES/more.png")}
                                 className={styles.icon}
                                 onClick={handlePositionModalOpen}
                            />
                        </div>

                        <div className={styles.inputLine} style={{alignItems:"baseline"}}>
                            계정상태
                            <ButtonGroup style={{marginLeft:"15px"}}>
                                {radioState.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        const variant = {idx === 0 ? 'outline-primary' : (idx === 1 ? 'outline-warning' : 'outline-danger')}
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.modify}>
                        <Button variant="primary"
                                className={styles.button}
                        >수정</Button>
                    </div>
                </div>
            </div>

            <DeleteModal
                resetInput={resetInput}
                showDeleteModal={showDeleteModal}
                handleDeleteModalClose={handleDeleteModalClose}
            />
            <AccountModal showAccountModal={showAccountModal} handleAccountModalClose={handleAccountModalClose} />
            <TeamModal showTeamModal={showTeamModal} handleTeamModalClose={handleTeamModalClose} />
            <PositionModal showPositionModal={showPositionModal} handlePositionModalClose={handlePositionModalClose} />
        </div>
    )
}

export default AccountManagement