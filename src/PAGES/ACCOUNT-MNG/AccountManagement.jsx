import {Button, ToggleButton} from "react-bootstrap";
import styles from "./AccountManagement.module.css"
import {useEffect, useRef, useState} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import TeamModal from "./Modals/TeamModal";
import useStore from "../../store";
import PositionModal from "./Modals/PositionModal";
import AccountModal from "./Modals/AccountModal";
import {ACCOUNT_INFO_API, MEMBER_LIST_INFO_API} from "../../constants/api_constans";
import fetcher from "../../fetcher";
import Swal from "sweetalert2";

function AccountManagement() {
    const imgRef = useRef();

    const [showAccountModal, setShowAccountModal] = useState(false);
    const [showTeamModal, setShowTeamModal] = useState(false);
    const [showPositionModal, setShowPositionModal] = useState(false);
    const [imgFile, setImgFile] = useState("");
    const [radioValue, setRadioValue] = useState('1');
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [memberNo, setMemberNo] = useState("");
    const [team, setTeam] = useState("");
    const [position, setPosition] = useState("");
    const [member, setMember] = useState([]);

    const {account, teamName, positionName, selectTeam, selectPosition}
        = useStore(state => state);

    const radioState = [
        {name: '일반계정', value: '1'},
        {name: '관리자계정', value: '2'},
        {name: '접속차단', value: '3'}
    ];

    const fetchMemberList = () => {
        fetcher.get(MEMBER_LIST_INFO_API)
            .then((res) => setMember(res.data))
    }

    useEffect(() => {
        resetInput()
        fetchMemberList()
    }, [])

    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImgFile(reader.result);
        }
    }

    const resetInput = () => {
        setName("")
        setPassword("")
        setMemberNo("")
        selectTeam("")
        selectPosition("")
    }

    const deleteID = (id) => {
        if (!id) {
            Swal.fire({
                title: "삭제 할 계정을 선택하세요",
                icon: 'warning',
            })
            return;
        }
        Swal.fire({
            title: "계정을 삭제하시겠습니까?",
            text: "접속차단을 추천드립니다.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '삭제',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                fetcher.delete(`${ACCOUNT_INFO_API}/${id}`)
                resetInput()
                fetchMemberList()
                Swal.fire({
                    position: 'mid',
                    icon: 'success',
                    title: '계정 삭제 완료',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.upper}>
                    <div> 계정관리
                        <Button className="buttonAdmin"
                                style={{marginLeft: "15px"}}
                                onClick={() => setShowAccountModal(true)}
                        >불러오기</Button>
                    </div>
                    <Button className="buttonAdmin"
                            onClick={() => deleteID(account.id)}
                    >삭제</Button>
                </div>

                <div className={styles.contents}>
                    <table>
                        <tbody>
                        <tr>
                            <th></th>
                            <td className={styles.profile}>
                                <img src={imgFile ? imgFile : require("../../IMAGES/profile.jpg")}
                                     alt="프로필 이미지"
                                />
                                <label className={styles.profileImgLabel}
                                       htmlFor="profileImg"
                                >이미지 업로드</label>
                                <input
                                    style={{display: "none"}}
                                    type="file"
                                    accept="image/*"
                                    id="profileImg"
                                    onChange={saveImgFile}
                                    ref={imgRef}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>{account.name}</td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input value={account.password}
                                       type="password"
                                       onChange={(e) => setPassword(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>사번</th>
                            <td>{account.no}</td>
                        </tr>
                        <tr>
                            <th>부서</th>
                            <td>
                                <input value={teamName || account.team}
                                       onChange={(e) => setTeam(e.target.value)}/>
                                <img src={require("../../IMAGES/more.png")}
                                     className={styles.icon}
                                     onClick={() => setShowTeamModal(true)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td>
                                <input value={positionName || account.position}
                                       onChange={(e) => setPosition(e.target.value)}
                                />
                                <img src={require("../../IMAGES/more.png")}
                                     className={styles.icon}
                                     onClick={() => setShowPositionModal(true)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>계정상태</th>
                            <td>
                                <ButtonGroup>
                                    {radioState.map((radio, index) => (
                                        <ToggleButton
                                            key={index}
                                            id={`radio-${index}`}
                                            type="radio"
                                            const
                                            variant={index === 0 ? 'outline-primary' : (index === 1 ? 'outline-warning' : 'outline-danger')}
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className={styles.modify}>
                        <Button className="buttonAdmin">수정</Button>
                    </div>
                </div>
            </div>

            <AccountModal showAccountModal={showAccountModal} fetchMemberList={fetchMemberList}
                          handleAccountModalClose={() => setShowAccountModal(false)}/>
            <TeamModal showTeamModal={showTeamModal} handleTeamModalClose={() => setShowTeamModal(false)}/>
            <PositionModal showPositionModal={showPositionModal}
                           handlePositionModalClose={() => setShowPositionModal(false)}/>
        </div>
    )
}

export default AccountManagement