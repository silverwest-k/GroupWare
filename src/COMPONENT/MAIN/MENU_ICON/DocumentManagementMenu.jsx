import {Link} from "react-router-dom";
import styles from "./Menu.module.css"
import {DOCUMENT_REGISTRATION_COMPONENT} from "../../../constants/component_constants";

function DocumentManagementMenu({menuName}) {
    return(
        <>
            <div className={styles.mainMenu}
                style={{background: "rgba(250, 62, 12, 0.21)"}}
            >
                <img className={styles.icon} src={require("../../../IMAGES/process.png")}/>

                <div className={styles.divisionLine}/>

                <div className={styles.mainLink}>
                    <Link to={DOCUMENT_REGISTRATION_COMPONENT}
                          style={{color: "#FA3E0C"}}
                          onClick={menuName}
                    >양식등록</Link>
                    <Link to=""
                          style={{color: "#FA3E0C"}}
                          onClick={menuName}
                    >결재문서</Link>
                </div>
            </div>
        </>
    )
}

export default DocumentManagementMenu