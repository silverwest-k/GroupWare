import {useRef, useState} from "react";
import useStore from "../../store";
import styles from "./MyPage.module.css";
import commonStyles from "../ACCOUNT-MNG/AccountManagement.module.css";
import {Button} from "react-bootstrap";
import fetcher from "../../fetcher";
import {MY_PASSWORD_CHANGE_API} from "../../constants/api_constans";

function MyPage() {
    const imgRef = useRef();
    const [password, setPassword] = useState("");
    const [imgFile, setImgFile] = useState("");
    const {myAccount} = useStore(state => state);

    const resetInput = () => {
        setPassword("")
    }

    const passwordChange = () =>{
        fetcher().post(MY_PASSWORD_CHANGE_API, {
            "newPassword": password})
            .then(resetInput)
            alert("수정 완료되었습니다.")
    }

    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImgFile(reader.result);
        }
    }

    return (
        <div className={commonStyles.wrapper}>
            <div className={styles.container}>
                <div className={commonStyles.upper}>
                    마이페이지
                </div>

                <div className={styles.contents}>
                    <table>
                        <tbody>
                        <tr>
                            <th></th>
                            <td className={commonStyles.profile}>
                                <img src={imgFile ? imgFile : require("../../IMAGES/profile.jpg")}
                                     style={{border: "solid 3px rgba(68, 41, 242, 0.4)"}}
                                     alt="프로필 이미지"
                                />
                                <label className={commonStyles.profileImgLabel}
                                       style={{background: "#4429f2"}}
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
                            <td>{myAccount.name}</td>
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
                            <td>{myAccount.no}</td>
                        </tr>
                        <tr>
                            <th>부서</th>
                            <td>{myAccount.team}</td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td>{myAccount.position}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className={commonStyles.modify}>
                        <Button className="button"
                                onClick={passwordChange}
                        >수정</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage