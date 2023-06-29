import axios from "axios";
import {useState} from "react";


function LogIn() {
    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const login = ()=> {
        axios.post("http://172.20.10.8:9091/members/login", {
            mid: userId,
            password: userPassword
        })
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error){
                console.log(error);
            })
    }

    return(
        <>
            id <input value={userId}
                      onChange={(e)=>{setUserId(e.currentTarget.value)}}
            />

            pw <input value={userPassword}
                      onChange={(e)=>{setUserPassword(e.currentTarget.value)}}
            />

            <button onClick={login}>로그인</button>
        </>
    )
}

export default LogIn