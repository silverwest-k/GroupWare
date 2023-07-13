import {useRef, useState} from "react";
import styles from "./AccountManagement.module.css";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import RegistrationModal from "./RegistrationModal";

function AccountRegistration() {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [no, setNo] = useState("");
    const [position, setPosition] = useState("");
    const [team, setTeam] = useState("");

    const saveImgFile = () =>{
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            setImgFile(reader .result);
        }
    }

    const Register = ()=>{
        axios.post("http://172.20.10.8:9091/auth/admin/signup", {
            "name": name,
            "password": password,
            "no": no,
            "position": position,
            "team": team,
        })
          .then(()=> {
              handleRegisterModalClose();
              resetInput();
          })
            .catch((error) => {
                alert("값을 입력하세요");
                console.log(error);
            })
    }

    const resetInput = () =>{
        setName("")
        setPassword("")
        setNo("")
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
                        <div className={styles.line}>
                            이　　름
                            <input  value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>

                        <div className={styles.line}>
                            비밀번호
                            <input value={password} type="password"
                                   onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <div className={styles.line}>
                            사　　번
                            <input value={no}
                                onChange={(e)=>setNo(e.target.value)}
                            />
                        </div>

                        <div className={styles.line}>
                            부　　서
                            <input value={team}
                                onChange={(e)=>setTeam(e.target.value)}
                            />
                            <img src={require("../../IMAGES/more.png")} className={styles.icon} />
                        </div>

                        <div className={styles.line}>
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

            <RegistrationModal
                showRegisterModal={showRegisterModal}
                Register={Register}
                handleRegisterModalClose={handleRegisterModalClose}
            />
        </div>
    )
}

export default AccountRegistration