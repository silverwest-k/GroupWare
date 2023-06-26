import axios from "axios";
import {useState} from "react";


function LogIn() {
    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("")

    return(
        <>
            id <input value={userId}
                      onChange={(e)=>{setUserId(e.currentTarget.value)}}
            />

            pw <input value={userPassword}
                      onChange={(e)=>{setUserPassword(e.currentTarget.value)}}
            />
            
            <button
                onClick={()=>{axios.post("http://172.20.10.8:9091/login_proc", {
                    userId:"userId", userPassword:"userPassword"
                })
                    .then(function (res) {
                        console.log(res);
                    })
                    .catch(function (error){
                    console.log(error);
                })
                }}
            >로그인</button>
        </>
    )
}

export default LogIn