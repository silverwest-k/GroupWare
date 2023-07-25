import {Button, ToggleButton} from "react-bootstrap";
import styles from "./AccountManagement.module.css"
import {useEffect, useState} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DeleteIDModal from "./Modals/DeleteIDModal";
import TeamModal from "./Modals/TeamModal";
import useStore from "../../store";
import PositionModal from "./Modals/PositionModal";
import AccountModal from "./Modals/AccountModal";
import {DELETE_ID_API} from "../../constants/api_constans";
import fetcher from "../../fetcher";

function AccountManagement() {
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showTeamModal, setShowTeamModal] = useState(false);
    const [showPositionModal, setShowPositionModal] = useState(false);

    const [radioValue, setRadioValue] = useState('1');
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [memberNo, setMemberNo] = useState("");
    // const [team, setTeam] = useState("");
    // const [position, setPosition] = useState("");

    const {account, teamName, positionName} = useStore(state => state);

    const radioState = [
        {name: '일반계정', value: '1'},
        {name: '관리자계정', value: '2'},
        {name: '접속차단', value: '3'}
    ];

    const resetInput = () => {
        setName("")
        setPassword("")
        setMemberNo("")
        // setTeam("")
        // setPosition("")
    }

    const deleteID = (account) => {
        if (!account.no) {
            alert("삭제할 계정을 선택하세요.");
            setShowDeleteModal(false);
            return;
        }
        fetcher().delete(`${DELETE_ID_API}/${account.no}`)
            .then(() =>
                alert("삭제가 완료되었습니다."),
                setShowDeleteModal(false),
                resetInput
            )
            .catch((error) => {
                console.error('Error deleting account:', error);
            });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.upperButton}>
                    <div>
                        계정관리
                        <Button variant="primary"
                                className={styles.button} style={{marginLeft: "15px"}}
                                onClick={() => setShowAccountModal(true)}
                        >불러오기</Button>
                    </div>
                    <Button variant="primary"
                            className={styles.button}
                            onClick={() => setShowDeleteModal(true)}
                    >삭제</Button>
                </div>

                <div className={styles.contents}>
                    <div className={styles.profile}>
                        <img src={require("../../IMAGES/profile.jpeg")}/>
                        <Button variant="primary" className={styles.button}>사진등록</Button>
                    </div>

                    <div className={styles.inputContainer}>
                        <div className={styles.inputLine}>
                            <p>이 름 {account.name}</p>
                        </div>

                        <div className={styles.inputLine}>
                            비밀번호 <input value={account.password}
                                        onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>

                        <div className={styles.inputLine}>
                            <p>사 번 {account.no}</p>
                        </div>

                        <div className={styles.inputLine}>
                            부 서 <input value={teamName || account.team}/>
                            <img src={require("../../IMAGES/more.png")}
                                 className={styles.icon}
                                 onClick={() => setShowTeamModal(true)}
                            />
                        </div>

                        <div className={styles.inputLine}>
                            직 급 <input value={positionName || account.position}/>
                            <img src={require("../../IMAGES/more.png")}
                                 className={styles.icon}
                                 onClick={() => setShowPositionModal(true)}
                            />
                        </div>

                        <div className={styles.inputLine} style={{alignItems: "baseline"}}>
                            계정상태
                            <ButtonGroup style={{marginLeft: "15px"}}>
                                {radioState.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        const
                                        variant={idx === 0 ? 'outline-primary' : (idx === 1 ? 'outline-warning' : 'outline-danger')}
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

            <DeleteIDModal
                deleteID={()=>deleteID(account)}
                showDeleteModal={showDeleteModal}
                handleDeleteModalClose={() => setShowDeleteModal(false)}
            />
            <AccountModal showAccountModal={showAccountModal}
                          handleAccountModalClose={() => setShowAccountModal(false)}/>
            <TeamModal showTeamModal={showTeamModal} handleTeamModalClose={() => setShowTeamModal(false)}/>
            <PositionModal showPositionModal={showPositionModal}
                           handlePositionModalClose={() => setShowPositionModal(false)}/>
        </div>
    )
}

export default AccountManagement