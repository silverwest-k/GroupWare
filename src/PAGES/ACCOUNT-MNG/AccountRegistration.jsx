import {useEffect, useRef, useState} from "react";
import styles from "./AccountManagement.module.css";
import {Button, Modal} from "react-bootstrap";
import CreateIDModal from "./Modals/CreateIDModal";
import {CREATE_ID_API} from "../../constants/api_constans";
import fetcher from "../../fetcher";
import TeamModal from "./Modals/TeamModal";
import PositionModal from "./Modals/PositionModal";
import useStore from "../../store";

function AccountRegistration() {
    const imgRef = useRef();

    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showTeamModal, setShowTeamModal] = useState(false);
    const [showPositionModal, setShowPositionModal] = useState(false);
    const [imgFile, setImgFile] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [memberNo, setMemberNo] = useState("")
    const [team, setTeam] = useState("");
    const [position, setPosition] = useState("");
    const [authority, setAuthority] = useState("ROLE_USER");

    const {teamName, positionName, selectTeam, selectPosition} = useStore(state => state);

    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImgFile(reader.result);
        }
    }

    const createID = () => {
        fetcher.post(CREATE_ID_API, {
            "name": name,
            "password": password,
            "no": memberNo,
            "position": positionName,
            "team": teamName,
            "authority": authority
        })
            .then(() => {
                setShowRegisterModal(false);
                resetInput();
                alert("계정 등록을 완료하였습니다.")
            })
            .catch((error) => {
                alert("값이 올바르지 않습니다.");
                console.log(error);
            })
    }

    const resetInput = () => {
        setName("")
        setPassword("")
        setMemberNo("")
        selectTeam("")
        selectPosition("")
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.upper}>
                    <div>
                        계정등록
                    </div>
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
                            <td>
                                <input value={name}
                                       onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input value={password}
                                       type="password"
                                       onChange={(e) => setPassword(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>사번</th>
                            <td>
                                <input value={memberNo}
                                       onChange={(e) => setMemberNo(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>부서</th>
                            <td>
                                <input value={teamName}/>
                                <img src={require("../../IMAGES/more.png")}
                                     className={styles.icon}
                                     onClick={() => setShowTeamModal(true)}
                                     onChange={(e)=>setTeam(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td>
                                <input value={positionName}/>
                                <img src={require("../../IMAGES/more.png")}
                                     className={styles.icon}
                                     onClick={() => setShowPositionModal(true)}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.modify}>
                    <Button className="buttonAdmin"
                            onClick={() => setShowRegisterModal(true)}
                    >등록</Button>
                </div>

            </div>

            <CreateIDModal showRegisterModal={showRegisterModal}
                           createID={createID}
                           handleRegisterModalClose={() => setShowRegisterModal(false)}
            />
            <TeamModal showTeamModal={showTeamModal}
                       handleTeamModalClose={() => setShowTeamModal(false)}
            />
            <PositionModal showPositionModal={showPositionModal}
                           handlePositionModalClose={() => setShowPositionModal(false)}
            />
        </div>
    )
}

export default AccountRegistration