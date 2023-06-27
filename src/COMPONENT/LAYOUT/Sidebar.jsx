import styles from "./Sidebar.module.css"
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";

function Sidebar() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.profile}>
                <img src={require("../../IMAGES/profile.jpeg")}/>
                <p>장그래</p>
                <p>영업3팀 / 사원</p>
                <p>로그아웃</p>
            </div>
            <div className={styles.menuContainer}>
                <Accordion eventKey="0" flush>
                    <Accordion.Item eventKey="0" className={styles.accordion}>
                        <Accordion.Header className={styles.menu}>
                            <img src={require("../../IMAGES/checklist.png")}/>
                            <p>전자결재</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to="/page/write"
                                  className={`${styles.link} ${styles.underline} ${styles.blue}`}>작성하기</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to="/page/approvalpath"
                                  className={`${styles.link} ${styles.underline} ${styles.blue}`}>결재라인관리</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className={styles.accordion}>
                        <Accordion.Header className={styles.menu}>
                            <img src={require("../../IMAGES/folder.png")}/>
                            <p>문서함</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to="/page/receivedocument"
                                  className={`${styles.link} ${styles.underline} ${styles.blue}`}>수신문서</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to="/page/reportdocument"
                                  className={`${styles.link} ${styles.underline} ${styles.blue}`}>상신문서</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to=""
                                  className={`${styles.link} ${styles.underline} ${styles.blue}`}>임시보관함</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className={styles.accordion}>
                        <Accordion.Header className={styles.menu}>
                            <img src={require("../../IMAGES/profile.png")}/>
                            <p>마이페이지</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to="/page/mypage"
                                  className={`${styles.link} ${styles.underline} ${styles.blue}`}>내정보관리</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className={styles.accordion}>
                        <Accordion.Header className={`${styles.menu} ${styles.mng}`}>
                            <img src={require("../../IMAGES/process.png")}/>
                            <p>문서관리</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to="/page/documentregistration"
                                  className={`${styles.link} ${styles.underline} ${styles.orange}`}>양식등록</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to=""
                                  className={`${styles.link} ${styles.underline} ${styles.orange}`}>결재문서</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className={styles.accordion}>
                        <Accordion.Header className={`${styles.menu} ${styles.mng}`}>
                            <img src={require("../../IMAGES/management.png")}/>
                            <p>계정관리</p>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to="/page/accountregistration"
                                  className={`${styles.link} ${styles.underline} ${styles.orange}`}>계정등록</Link>
                        </Accordion.Body>
                        <Accordion.Body className={styles.accordionBody}>
                            <Link to="/page/accountmanagement"
                                  className={`${styles.link} ${styles.underline} ${styles.orange}`}>계정관리</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Sidebar