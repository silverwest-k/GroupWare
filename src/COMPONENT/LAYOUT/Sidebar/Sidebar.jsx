import styles from "./Sidebar.module.css"
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {useState} from "react";
import useStore from "../../../store";
import SidebarProfile from "./components/SidebarProfile";
import {
    ACCOUNT_MANAGEMENT_COMPONENT,
    ACCOUNT_REGISTRATION_COMPONENT,
    ALL_DOCUMENT_LIST_COMPONENT,
    DOCUMENT_REGISTRATION_COMPONENT,
    DOCUMENT_WRITE_COMPONENT,
    MY_PAGE_COMPONENT,
    RECEIVE_DOCUMENT_COMPONENT,
    REPORT_DOCUMENT_COMPONENT,
    TEMP_DOCUMENT_COMPONENT
} from "../../../constants/component_constants";
import styled, {css} from "styled-components";
import {styleConstants} from "../../../STYLES/styleConstants";

function Sidebar() {
    const [activeLink, setActiveLink] = useState("");

    const {changeTitle, myAccount} = useStore(state => state)

    const isAdmin = myAccount?.authority === "ADMIN";

    const menuName = (e) => {
        const selectMenu = e.target.textContent;
        changeTitle(selectMenu);
    }

    const handleLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Wrapper>
            <SidebarProfile/>
            <MenuContainer>
                <Accordion eventKey="0" flush>
                    <AccordionItem eventKey="0">
                        <Accordion.Header>
                            <MenuImg src={require("../../../IMAGES/checklist.png")}/>
                            <MenuTitle>전자결재</MenuTitle>
                        </Accordion.Header>
                        <Accordion.Body onClick={menuName}>
                            <Link to={`/page/${DOCUMENT_WRITE_COMPONENT}`}
                                  className={`${styles.underline} ${styles.blue} ${activeLink === "write" ? styles.active : ""}`}
                                  onClick={() => handleLink("write")}
                            >작성하기</Link>
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <Accordion.Header>
                            <MenuImg src={require("../../../IMAGES/folder.png")}/>
                            <MenuTitle>문서함</MenuTitle>
                        </Accordion.Header>
                        <Accordion.Body onClick={menuName}>
                            <Link to={`/page/${RECEIVE_DOCUMENT_COMPONENT}`}
                                  className={`${styles.underline} ${styles.blue} ${activeLink === RECEIVE_DOCUMENT_COMPONENT ? styles.active : ""}`}
                                  onClick={() => handleLink(RECEIVE_DOCUMENT_COMPONENT)}
                            >수신문서</Link>
                        </Accordion.Body>
                        <Accordion.Body onClick={menuName}>
                            <Link to={`/page/${REPORT_DOCUMENT_COMPONENT}`}
                                  className={`${styles.underline} ${styles.blue} ${activeLink === REPORT_DOCUMENT_COMPONENT ? styles.active : ""}`}
                                  onClick={() => handleLink(REPORT_DOCUMENT_COMPONENT)}
                            >상신문서</Link>
                        </Accordion.Body>
                        <Accordion.Body onClick={menuName}>
                            <Link to={`/page/${TEMP_DOCUMENT_COMPONENT}`}
                                  className={`${styles.underline} ${styles.blue} ${activeLink === TEMP_DOCUMENT_COMPONENT ? styles.active : ""}`}
                                  onClick={() => handleLink(TEMP_DOCUMENT_COMPONENT)}
                            >임시보관함</Link>
                        </Accordion.Body>
                    </AccordionItem>

                    <AccordionItem eventKey="2">
                        <Accordion.Header>
                            <MenuImg src={require("../../../IMAGES/profile.png")}/>
                            <MenuTitle>마이페이지</MenuTitle>
                        </Accordion.Header>
                        <Accordion.Body onClick={menuName}>
                            <Link to={`/page/${MY_PAGE_COMPONENT}`}
                                  className={`${styles.underline} ${styles.blue} ${activeLink === MY_PAGE_COMPONENT ? styles.active : ""}`}
                                  onClick={() => handleLink(MY_PAGE_COMPONENT)}
                            >내정보관리</Link>
                        </Accordion.Body>
                    </AccordionItem>

                    {isAdmin &&
                        <>
                            <AccordionItem eventKey="3" isAdmin={isAdmin}>
                                <Accordion.Header>
                                    <MenuImg src={require("../../../IMAGES/process.png")}/>
                                    <MenuTitle>문서관리</MenuTitle>
                                </Accordion.Header>
                                <Accordion.Body onClick={menuName}>
                                    <Link to={`/page/${DOCUMENT_REGISTRATION_COMPONENT}`}
                                          className={`${styles.underline} ${styles.orange} ${activeLink === DOCUMENT_REGISTRATION_COMPONENT ? styles.active : ""}`}
                                          onClick={() => handleLink(DOCUMENT_REGISTRATION_COMPONENT)}
                                    >양식관리</Link>
                                </Accordion.Body>
                                <Accordion.Body onClick={menuName}>
                                    <Link to={`/page/${ALL_DOCUMENT_LIST_COMPONENT}`}
                                          className={`${styles.underline} ${styles.orange} ${activeLink === ALL_DOCUMENT_LIST_COMPONENT ? styles.active : ""}`}
                                          onClick={() => handleLink(ALL_DOCUMENT_LIST_COMPONENT)}
                                    >결재문서</Link>
                                </Accordion.Body>
                            </AccordionItem>

                            <AccordionItem eventKey="4" isAdmin={isAdmin}>
                                <Accordion.Header>
                                    <MenuImg src={require("../../../IMAGES/management.png")}/>
                                    <MenuTitle>계정관리</MenuTitle>
                                </Accordion.Header>
                                <Accordion.Body onClick={menuName}>
                                    <Link to={`/page/${ACCOUNT_REGISTRATION_COMPONENT}`}
                                          className={`${styles.underline} ${styles.orange} ${activeLink === ACCOUNT_REGISTRATION_COMPONENT ? styles.active : ""}`}
                                          onClick={() => handleLink(ACCOUNT_REGISTRATION_COMPONENT)}
                                    >계정등록</Link>
                                </Accordion.Body>
                                <Accordion.Body onClick={menuName}>
                                    <Link to={`/page/${ACCOUNT_MANAGEMENT_COMPONENT}`}
                                          className={`${styles.underline} ${styles.orange} ${activeLink === ACCOUNT_MANAGEMENT_COMPONENT ? styles.active : ""}`}
                                          onClick={() => handleLink(ACCOUNT_MANAGEMENT_COMPONENT)}
                                    >계정관리</Link>
                                </Accordion.Body>
                            </AccordionItem>
                        </>
                    }
                </Accordion>
            </MenuContainer>
        </Wrapper>
    )
}
export default Sidebar

const Wrapper = styled.div`
  width: ${styleConstants.layout.sidebar.width};
  height: 100%;
  border-right: 1px solid #afb0b1;
`
const MenuContainer = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
`
const MenuImg = styled.img`
  width: 40px;
  height: 40px;
`
const MenuTitle = styled.p`
  font-weight: bold;
  color: #4429f2;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: 20px;
`
const AccordionItem = styled(Accordion.Item)`
  --bs-accordion-border-color: none;
  --bs-accordion-btn-bg: none;
  --bs-accordion-btn-focus-box-shadow: none;
  --bs-accordion-active-bg: rgba(125, 121, 242, 0.37);
  --bs-accordion-btn-padding-x: 4rem;
  --bs-accordion-body-padding-x: 4rem;
  --bs-accordion-btn-padding-y: 0.7rem;
  --bs-accordion-body-padding-y: 0.5rem;

  ${props => props.isAdmin && css`
    --bs-accordion-active-bg: rgba(250, 62, 12, 0.21);
    color: #fa3e0c;
    // TODO: 배경색은 바뀌는데 글씨색은 안바뀜
  `}
`
