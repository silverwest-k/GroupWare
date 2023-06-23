import styles from "./AccountManagement.module.css"
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {useState} from "react";
import {Button} from "@mui/material";

function AccountManagement() {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div >
                    계정관리
                    <button>불러오기</button>
                </div>
                <div>
                    <div className={styles.profile}>
                        <img src={require("../IMAGES/profile.jpeg")}/>
                        <Button variant="contained" size="small">사진등록</Button>
                    </div>

                    <div>
                        <div>
                            이름 <input/>
                        </div>

                        <div>
                            비밀번호 <input/>
                            <button>초기화</button>
                        </div>

                        <div>
                            사번 <input/>
                        </div>

                        <div>
                            부서 <input/>
                            <img src={require("../IMAGES/more.png")} />
                        </div>

                        <div>
                            직급 <input/>
                            <img src={require("../IMAGES/more.png")} />
                        </div>

                        <div className={styles.toggleButton}>
                            계정상태
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton value="web">사용중</ToggleButton>
                                <ToggleButton value="android">접속차단</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountManagement