import axios from "axios";
import {useEffect, useState} from "react";
import styles from "./Login.module.css"
import {Alert} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function LogIn() {
    const [no, setNo] = useState("")
    const [password, setPassword] = useState("")
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const navigate = useNavigate();

    //Refresh token: Cookie 저장, Access token: Read-Only cookie 필요시마다 호출해서 사용

    const submit = () => {
        if (no.trim() === '') {
            setAlertMessage("사번을 입력하세요.");
            setShowAlert(true);
        } else if (password.trim() === "") {
            setAlertMessage("비밀번호를 입력하세요.");
            setShowAlert(true);
        } else {
            axios.post("http://172.20.10.8:9091/auth/login", {
                "no": no,
                "password": password
            })
                .then((res) => {
                    // accessToken 들어옴 - 쿠키 저장하기
                    console.log(res.data);
                    navigate("/main");
                })
                .catch((error) =>{
                    setAlertMessage("사번 또는 비밀번호가 틀렸습니다.");
                    setShowAlert(true);
                    console.log("Error Login:", error);
                })
        }
    }

    useEffect(() => {
        let timeout;
        if (showAlert) {
            timeout = setTimeout(() => {
                setShowAlert(false);
            }, 1500);
        }
        return () => clearTimeout(timeout);
    }, [showAlert]);

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>

                {showAlert && (
                    <div>
                        <Alert variant="danger" className={styles.alert}>
                            {alertMessage}
                        </Alert>
                    </div>
                )}
                <div className={styles.loginContainer}>
                    <h2>ACCOUNT LOGIN</h2>
                    <div className={styles.inputWrap}>
                        <div className="my-3">
                           <input type="text" className="form-control" id="email"
                                  placeholder="사번"
                                  value={no}
                                  onChange={(e)=>{setNo(e.currentTarget.value)}}
                        />
                        </div>
                        <div className="my-3">
                           <input type="password" className="form-control" id="password"
                                  placeholder="비밀번호"
                                  value={password}
                                  onChange={(e)=>{setPassword(e.currentTarget.value)}}
                        />
                        </div>
                        <button type="submit" className={`${styles.button} btn btn-primary`} id="send"
                                onClick={() => {submit()}}
                        >로그인</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn