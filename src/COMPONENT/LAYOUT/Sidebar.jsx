import styles from "./Sidebar.module.css"
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {useState} from "react";
import useStore from "../../store";


function Sidebar() {
    const [activeLink, setActiveLink] = useState("");

    const {changeTitle} = useStore(state => state)

    const menuName = (e) =>{
        const selectMenu = e.target.textContent;
        changeTitle(selectMenu);
    }

    const handleLink = (link) => {
        setActiveLink(link);
    }
    // TODO :: 로그인 후 개인 인사정보를 전역 상태에서 가져오도록..
    return(
        <div className={styles.wrapper}>
            <div className={styles.profileContainer}>
                <div className={styles.profile}>
                    <img src={require("../../IMAGES/profile.jpeg")}/>
                    <p>장그래</p>
                    <p>영업3팀 / 사원</p>
                    <Link to="/"><p className={styles.logOut}>로그아웃</p></Link>
                </div>
            </div>
            <div className={styles.menuContainer}>
                {/* TODO :: 컴포넌트 분리가 너무 안되어있는듯 .. */}
                <Accordion eventKey="0" flush>
                    <Accordion.Item eventKey="0" className={styles.accordion}>
                        <Accordion.Header className={styles.menu}>
                            <img src={require("../../IMAGES/checklist.png")}/>
                            <p>전자결재</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to="/page/write"
                                  className={`${styles.underline} ${styles.blue} ${activeLink === "write" ? styles.active : ""}`}
                                  onClick={()=>handleLink("write")}
                            >작성하기</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to="/page/approvalpath"
                                  className={`${styles.underline} ${styles.blue} ${activeLink === "approvalpath" ? styles.active : ""}`}
                                  onClick={()=>handleLink("approvalpath")}
                            >결재라인관리</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className={styles.accordion}>
                        <Accordion.Header className={styles.menu}>
                            <img src={require("../../IMAGES/folder.png")}/>
                            <p>문서함</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to="/page/receivedocument"
                                  className={`${styles.underline} ${styles.blue} ${activeLink === "receivedocument" ? styles.active : ""}`}
                                  onClick={()=>handleLink("receivedocument")}
                            >수신문서</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to="/page/reportdocument"
                                  className={`${styles.underline} ${styles.blue} ${activeLink === "reportdocument" ? styles.active : ""}`}
                                  onClick={()=>handleLink("reportdocument")}
                            >상신문서</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to=""
                                  className={`${styles.underline} ${styles.blue}`}
                            >임시보관함</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className={styles.accordion}>
                        <Accordion.Header className={styles.menu}>
                            <img src={require("../../IMAGES/profile.png")}/>
                            <p>마이페이지</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to="/page/mypage"
                                  className={`${styles.underline} ${styles.blue} ${activeLink === "mypage" ? styles.active : ""}`}
                                  onClick={()=>handleLink("mypage")}
                            >내정보관리</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className={styles.accordion}>
                        <Accordion.Header className={`${styles.menu} ${styles.mng}`}>
                            <img src={require("../../IMAGES/process.png")}/>
                            <p>문서관리</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to="/page/documentregistration"
                                  className={`${styles.underline} ${styles.orange} ${activeLink === "documentregistration" ? styles.active : ""}`}
                                  onClick={()=>handleLink("documentregistration")}
                            >양식등록</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to=""
                                  className={`${styles.underline} ${styles.orange}`}

                            >결재문서</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className={`${styles.accordion} ${styles.mng}`}>
                        <Accordion.Header className={`${styles.menu} ${styles.mng}`}>
                            <img src={require("../../IMAGES/management.png")}/>
                            <p>계정관리</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to="/page/accountregistration"
                                  className={`${styles.underline} ${styles.orange} ${activeLink === "accountregistration" ? styles.active : ""}`}
                                  onClick={()=>handleLink("accountregistration")}
                            >계정등록</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody} onClick={menuName}>
                            <Link to="/page/accountmanagement"
                                  className={`${styles.underline} ${styles.orange} ${activeLink === "accountmanagement" ? styles.active : ""}`}
                                  onClick={()=>handleLink("accountmanagement")}
                            >계정관리</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Sidebar

