import {Button, ToggleButton} from "react-bootstrap";
import styles from "./AccountManagement.module.css"
import {useEffect, useState} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DeleteIDModal from "./Modal/DeleteIDModal";
import TeamModal from "./Modal/TeamModal";
import useStore from "../../store";
import PositionModal from "./Modal/PositionModal";
import AccountModal from "./Modal/AccountModal";
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
        { name: '일반계정', value: '1' },
        { name: '관리자계정', value: '2' },
        { name: '접속차단', value: '3' }
    ];

    const onChange = (e, setValue) => {
        setValue(e.target.value);
    }

    const resetInput = () =>{
        setName("")
        setPassword("")
        setMemberNo("")
        // setTeam("")
        // setPosition("")
    }

    useEffect(()=> resetInput, []);

    const deleteID = () => {
        fetcher().delete(`${DELETE_ID_API}/${memberNo}`)
            .then(()=>alert("삭제가 완료되었습니다."))
            .then(resetInput)
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.upperButton}>
                    <div>
                        계정관리
                        <Button variant="primary"
                                className={styles.button} style={{marginLeft:"15px"}}
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
                        <img src={require("../../IMAGES/profile.jpeg")} />
                        <Button variant="primary" className={styles.button}>사진등록</Button>
                    </div>

                    <div className={styles.inputContainer}>
                        <div className={styles.inputLine}>
                            이　　름 <input value={account.name}
                                        onChange={(e)=>onChange(e,setName)}
                        />
                        </div>

                        <div className={styles.inputLine}>
                            비밀번호 <input value={account.password}
                                        onChange={(e)=>onChange(e,setPassword)}
                        />
                        </div>

                        <div className={styles.inputLine}>
                            사　　번 <input value={account.no}
                                        onChange={(e)=>onChange(e,setMemberNo)}
                        />
                        </div>

                        <div className={styles.inputLine}>
                            부　　서 <input value={teamName || account.team}/>
                            <img src={require("../../IMAGES/more.png")}
                                 className={styles.icon}
                                 onClick={() => setShowTeamModal(true)}
                            />
                        </div>

                        <div className={styles.inputLine}>
                            직　　급 <input value={positionName || account.position}/>
                            <img src={require("../../IMAGES/more.png")}
                                 className={styles.icon}
                                 onClick={() => setShowPositionModal(true)}
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

            <DeleteIDModal
                resetInput={resetInput}
                deleteID={deleteID}
                showDeleteModal={showDeleteModal}
                handleDeleteModalClose={() => setShowDeleteModal(false)}
            />
            <AccountModal showAccountModal={showAccountModal} handleAccountModalClose={() => setShowAccountModal(false)} />
            <TeamModal showTeamModal={showTeamModal} handleTeamModalClose={() => setShowTeamModal(false)} />
            <PositionModal showPositionModal={showPositionModal} handlePositionModalClose={() => setShowPositionModal(false)} />
        </div>
    )
}

export default AccountManagement