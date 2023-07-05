import axios from "axios";
import {useEffect, useState} from "react";
import styles from "./Login.module.css"
import {Alert} from "react-bootstrap";


function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showAlert, setShowAlert] = useState(false);

    const submit = ()=> {
        axios.post("http://172.20.10.8:9091/auth/login", {
            "email": email,
            "password": password
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    const loginCheck = () => {
        if (email.trim() === '') {
            setShowAlert(true);
        }
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.loginContainer}>
                {/*<form action="/">*/}
                <h2>ACCOUNT LOGIN</h2>
                <div className={styles.inputWrap}>
                    <div className="my-3">
                       <input type="text" className="form-control" id="email"
                              placeholder="사번"
                              value={email}
                              onChange={(e)=>{setEmail(e.currentTarget.value)}}
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
                            onClick={() => {
                                submit();
                                loginCheck();
                            }}
                    >로그인</button>
                </div>
                {/*</form>*/}
            </div>

            {showAlert && (
                <div className={styles.alert}>
                    <Alert variant="danger">
                        아이디를 입력하세요!
                    </Alert>
                </div>
            )}
        </div>
    )
}

export default LogIn