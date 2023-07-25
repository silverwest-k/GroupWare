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
    // const [position, setPosition] = useState("");
    // const [team, setTeam] = useState("");
    const [authority, setAuthority] = useState("ROLE_USER");

    const { teamName, positionName} = useStore(state => state);

    const saveImgFile = () =>{
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            setImgFile(reader.result);
        }
    }

    const createID = ()=>{
        fetcher().post(CREATE_ID_API, {
            "name": name,
            "password": password,
            "no": memberNo,
            "position": positionName,
            "team": teamName,
            "authority": authority
        })
          .then(()=> {
              setShowRegisterModal(false);
              resetInput();
          })
            .catch((error) => {
                alert("값이 올바르지 않습니다.");
                console.log(error);
            })
    }

    const resetInput = () =>{
        setName("")
        setPassword("")
        setMemberNo("")
        // setTeam("")
        // setPosition("")
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.upperButton}>
                    <div>
                        계정등록
                    </div>
                </div>

                <div className={styles.contents}>
                    <div>
                        <form className={styles.profile}>
                            <img src={imgFile ? imgFile : require("../../IMAGES/profile.jpg")}
                                 alt="프로필 이미지"
                            />
                            <label
                                className={styles.profileImgLabel}
                                htmlFor="profileImg"
                            > 이미지 업로드
                            </label>
                            <input
                                style={{display: "none"}}
                                type="file"
                                accept="image/*"
                                id="profileImg"
                                onChange={saveImgFile}
                                ref={imgRef}
                            />
                        </form>
                    </div>

                    <div className={styles.inputContainer}>
                        <div className={styles.inputLine}>
                            이　　름
                            <input  value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputLine}>
                            비밀번호
                            <input value={password} type="password"
                                   onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputLine}>
                            사　　번
                            <input value={memberNo}
                                onChange={(e)=>setMemberNo(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputLine}>
                            부　　서
                            <input value={teamName}/>
                            <img src={require("../../IMAGES/more.png")}
                                 className={styles.icon}
                                 onClick={() => setShowTeamModal(true)}
                            />
                        </div>

                        <div className={styles.inputLine}>
                            직　　급
                            <input value={positionName}/>
                            <img src={require("../../IMAGES/more.png")}
                                 className={styles.icon}
                                 onClick={() => setShowPositionModal(true)}
                            />
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div className={styles.modify}>
                        <Button variant="primary" className={styles.button}
                                onClick={()=>setShowRegisterModal(true)}
                        >등록</Button>
                    </div>
                </div>
            </div>

            <CreateIDModal
                showRegisterModal={showRegisterModal}
                createID={createID}
                handleRegisterModalClose={()=>setShowRegisterModal(false)}
            />
            <TeamModal showTeamModal={showTeamModal} handleTeamModalClose={() => setShowTeamModal(false)} />
            <PositionModal showPositionModal={showPositionModal} handlePositionModalClose={() => setShowPositionModal(false)} />
        </div>
    )
}

export default AccountRegistration