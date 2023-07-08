import {Button, Modal, ToggleButton} from "react-bootstrap";
import styles from "./AccountManagement.module.css"
import {useState} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DeleteModal from "./DeleteModal";
import PartModal from "./PartModal";
import useStore from "../../store";
import PositionModal from "./PositionModal";
import AccountModal from "./AccountModal";

function AccountManagement() {
    const [radioValue, setRadioValue] = useState('1');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showPartModal, setShowPartModal] = useState(false);
    const [showPositionModal, setShowPositionModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const {account, teamName, position} = useStore(state => state);

    const radioState = [
        { name: '사용중', value: '1' },
        { name: '접속차단', value: '2' }
    ];

    const handleDeleteModalOpen = () => setShowDeleteModal(true);
    const handleDeleteModalClose = () => setShowDeleteModal(false);
    const handlePartModalOpen = () => setShowPartModal(true);
    const handlePartModalClose = () => setShowPartModal(false);
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
                        <Button variant="primary" className={styles.button} style={{marginLeft:"15px"}}
                                onClick={handleAccountModalOpen}
                        >불러오기</Button>
                    </div>
                    <Button variant="primary"
                            className={styles.button}
                            onClick={handleDeleteModalOpen}
                    >삭제</Button>
                </div>

                <div className={styles.contents}>
                    <div className={styles.profile}>
                        <img src={require("../../IMAGES/profile.jpeg")} />
                        <Button variant="primary" className={styles.button}>사진등록</Button>
                    </div>

                    <div className={styles.inputContainer}>
                        <div className={styles.line}>
                            이　　름 <input value={account.name}/>
                        </div>

                        <div className={styles.line}>
                            비밀번호 <input value={account.value}/>
                            {/*<Button variant="primary" className={styles.button}>초기화</Button>*/}
                        </div>

                        <div className={styles.line}>
                            사　　번 <input value={account.no}/>
                        </div>

                        <div className={styles.line}>
                            부　　서 <input value={teamName || account.team} />
                            <img src={require("../../IMAGES/more.png")} className={styles.icon}
                                 onClick={handlePartModalOpen}
                            />
                        </div>

                        <div className={styles.line}>
                            직　　급 <input value={position || account.position} />
                            <img src={require("../../IMAGES/more.png")} className={styles.icon}
                                 onClick={handlePositionModalOpen}
                            />
                        </div>

                        <div className={styles.line} style={{alignItems:"baseline"}}>
                            계정상태
                            <ButtonGroup style={{marginLeft:"15px"}}>
                                {radioState.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={idx % 2 ? 'outline-danger' : 'outline-success'}
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
                        <Button variant="primary" className={styles.button}>수정</Button>
                    </div>
                </div>
            </div>

            <PartModal showPartModal={showPartModal} handlePartModalClose={handlePartModalClose} />
            <DeleteModal showDeleteModal={showDeleteModal} handleDeleteModalClose={handleDeleteModalClose} />
            <PositionModal showPositionModal={showPositionModal} handlePositionModalClose={handlePositionModalClose} />
            <AccountModal showAccountModal={showAccountModal} handleAccountModalClose={handleAccountModalClose} />
        </div>
    )
}

export default AccountManagement