import {useRef, useState} from "react";
import styles from "./AccountManagement.module.css";
import {Button, Modal} from "react-bootstrap";
import CreateIDModal from "./CreateIDModal";
import {CREATE_ID_API} from "../../constants/api_constans";
import fetcher from "../../fetcher";

function AccountRegistration() {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [memberNo, setMemberNo] = useState("")
    const [position, setPosition] = useState("");
    const [team, setTeam] = useState("");
    const [authority, setAuthority] = useState("ROLE_USER");

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
            "position": position,
            "team": team,
            "authority": authority
        })
          .then(()=> {
              handleRegisterModalClose();
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
        setPosition("")
        setTeam("")
    }

    const handleRegisterModalClose = () => setShowRegisterModal(false);
    const handleRegisterModalShow = () => setShowRegisterModal(true);

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
                            <input value={team}
                                onChange={(e)=>setTeam(e.target.value)}
                            />
                            <img src={require("../../IMAGES/more.png")} className={styles.icon} />
                        </div>

                        <div className={styles.inputLine}>
                            직　　급
                            <input value={position}
                                onChange={(e)=>setPosition(e.target.value)}
                            />
                            <img src={require("../../IMAGES/more.png")} className={styles.icon} />
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div className={styles.modify}>
                        <Button variant="primary" className={styles.button}
                                onClick={handleRegisterModalShow}
                        >등록</Button>
                    </div>
                </div>
            </div>

            <CreateIDModal
                showRegisterModal={showRegisterModal}
                createID={createID}
                handleRegisterModalClose={handleRegisterModalClose}
            />
        </div>
    )
}

export default AccountRegistration