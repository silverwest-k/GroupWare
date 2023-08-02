import styles from "./ApprovalPathModal.module.css";
import {Button, FormControl, InputGroup, Modal, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {
    APPROVAL_BOOKMARK_CREATE_API, APPROVAL_BOOKMARK_DELETE_API, APPROVAL_BOOKMARK_INFO_API,
    APPROVAL_BOOKMARK_LIST_API, TEAM_INFO_API, TEAM_MEMBER_INFO_API
} from "../../constants/api_constans";
import useStore from "../../store";
import Accordion from "react-bootstrap/Accordion";

function ApprovalPathModal({showApprovalPathModal, handleApprovalPathModalClose}) {
    const {myAccount, setSignList} = useStore(state => state)
    const [team, setTeam] = useState([]);
    const [selectTeam, setSelectTeam] = useState([]);
    const [member, setMember] = useState([]);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [activeMember, setActiveMember] = useState(null);
    const [approvalMembers, setApprovalMembers] = useState([]); // 결재자
    const [approvalLineList, setApprovalLineList] = useState("");   // 결재라인리스트
    const [referMember, setReferMember] = useState([]);     // 참조자
    const [bookmarkName, setBookmarkName] = useState("");   // 즐겨찾기 이름
    const [bookmarkList, setBookmarkList] = useState([]);   // 즐겨찾기리스트
    const [signTurn1, setSignTurn1] = useState(""); // 검토
    const [signTurn2, setSignTurn2] = useState(""); // 승인
    const [signRefer, setSignRefer] = useState(""); // 참조

    useEffect(() => {
        fetcher().get(TEAM_INFO_API)
            .then((res) => setTeam(res.data))
    }, [])

    useEffect(() => {
        if (selectTeam) {
            fetcher().get(`${TEAM_MEMBER_INFO_API}/${selectTeam}`)
                .then((res) => setMember(res.data))
        } else {
            setMember([])
        }
    }, [selectTeam])

    // 결재자 테이블 추가삭제
    const handleMemberClick = (index) => {
        setClickedIndex(index);
        setActiveMember(member[index]);
    };
    const addToApprovalTable = () => {
        if (activeMember && approvalMembers.length < 2) {
            setApprovalMembers((prevMembers) => [...prevMembers, activeMember]);
        } else {
            alert("결재라인은 최대 3명입니다.")
        }
        setSignTurn1(approvalMembers[0])
        setSignTurn2(approvalMembers[1])
    }
    const removeApprovalTable = () => {
        setApprovalMembers((prevMembers) => {
            return prevMembers.slice(0, prevMembers.length - 1);
        })
    }
    // 참조자 테이블 추가삭제
    const addToReferTable = () => {
        if (activeMember && referMember.length < 1) {
            setReferMember((prevMembers) => [...prevMembers, activeMember]);
        } else {
            alert("참조자는 한명만 가능합니다.")
        }
        setSignRefer(activeMember)
    }
    const removeReferTable = () => {
        setReferMember((prevMembers) => {
            return prevMembers.slice(0, prevMembers.length - 1);
        })
    }
    // 결재라인 즐겨찾기 관련
    const fetchBookmark = () => {
       fetcher().get(APPROVAL_BOOKMARK_LIST_API)
            .then((res) => {
                const data = Object.values(res.data)
                setBookmarkList(data.map((array) => array[0]["line name"]))
            })
            console.log("결재라인 즐겨찾기 :", bookmarkList)
    }
    useEffect(() => {
        fetchBookmark()
    }, [])
    const addBookmark = (lineName, turn1, turn2, refer) => {
        fetcher().post(APPROVAL_BOOKMARK_CREATE_API, {
            name: lineName,
            approvers: [turn1.id, turn2.id, refer?.id || ""]
        })
            .then(() => setBookmarkName(""), fetchBookmark)
    }
    const removeBookmark = (id) => {
        fetcher().delete(`${APPROVAL_BOOKMARK_DELETE_API}/${id}`)
            .then(fetchBookmark)
    }
    const bookmarkInfo = (id) => {
        fetcher().get(`${APPROVAL_BOOKMARK_INFO_API}/${id}`)
            // .then((res) => setBookmarkName())
        console.log("북마크 정보: " ,bookmarkName)
    }
    // 결재라인 적용
    const enterSignLine = (data) => {
        setSignList(data)
        handleApprovalPathModalClose()
    }

    return (
        <div>
            <Modal show={showApprovalPathModal} onHide={handleApprovalPathModalClose}
                   className={`${styles.modal} ${styles.wrap}`} centered
            >
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title style={{fontWeight: "bold"}}>결재선 지정</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding: "0"}}>
                    <div className={styles.contents}>
                        <div className={styles.leftSide}>
                            <div className={styles.title}>조직도</div>
                            <Accordion defaultActiveKey="0">
                                {team.map((teamData, index) => {
                                    return (
                                        <Accordion.Item key={index} eventKey={index} className={styles.accordion}>
                                            <Accordion.Header onClick={() => setSelectTeam(teamData)}>
                                                <img src={require("../../IMAGES/members.png")}
                                                     style={{padding: "0 10px"}}/>
                                                {teamData}
                                            </Accordion.Header>

                                            {member?.map((memberData, memberIndex) => {
                                                return (
                                                    <Accordion.Body key={memberIndex}
                                                                    className={`${styles.chartMember} ${memberIndex === clickedIndex ? styles.boldText : ""}`}
                                                                    onClick={() => handleMemberClick(memberIndex)}
                                                    >
                                                        <img src={require("../../IMAGES/member.png")}
                                                             style={{padding: "0 12px"}}/>
                                                        {memberData.name} {memberData.position}
                                                    </Accordion.Body>
                                                )
                                            })}
                                        </Accordion.Item>
                                    )
                                })}
                            </Accordion>
                        </div>

                        <div className={styles.midSide}>
                            <div className={styles.buttonGroup}>
                                <p className={styles.title}>결재자</p>
                                <Button className={styles.arrowButton} onClick={addToApprovalTable}>
                                    <img src={require("../../IMAGES/right-arrow.png")}/>
                                </Button>
                                <Button className={styles.arrowButton} onClick={removeApprovalTable}>
                                    <img src={require("../../IMAGES/left-arrow.png")}/>
                                </Button>
                            </div>
                            <div className={styles.buttonGroup}>
                                <p className={styles.title}>참조자</p>
                                <Button className={styles.arrowButton} onClick={addToReferTable}>
                                    <img src={require("../../IMAGES/right-arrow.png")}/>
                                </Button>
                                <Button className={styles.arrowButton} onClick={removeReferTable}>
                                    <img src={require("../../IMAGES/left-arrow.png")}/>
                                </Button>
                            </div>
                        </div>

                        <div>
                            <div className={styles.rightSide}>
                                <p className={styles.title}>결재선 정보</p>
                                <div className={styles.bookmarkLine}>
                                    <p style={{marginBottom: "0"}}>사용자 결재라인</p>
                                    <select>
                                        {bookmarkList?.map((data, index) => {
                                            return (
                                                <option onClick={()=>bookmarkInfo()} key={index}>
                                                    {data ? data.name : "결재라인"}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <Button className="button" style={{padding: "6px"}}
                                            onClick={() => removeBookmark()}
                                    >삭제</Button>
                                </div>

                                <div>
                                    <div className={styles.tableContainer} style={{height: "220px"}}>
                                        <p className={styles.title}>결재자</p>
                                        <Table>
                                            <thead className={styles.tableHead}>
                                            <tr>
                                                <th>이름</th>
                                                <th>직급</th>
                                                <th>부서</th>
                                                <th>결재선</th>
                                            </tr>
                                            </thead>
                                            <tbody className={styles.tableBody}>
                                            <tr>
                                                <td>{myAccount.name}</td>
                                                <td>{myAccount.position}</td>
                                                <td>{myAccount.team}</td>
                                                <td>작성</td>
                                            </tr>
                                            {approvalMembers?.map((memberData, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{memberData.name}</td>
                                                        <td>{memberData.position}</td>
                                                        <td>{memberData.team}</td>
                                                        <td>{index === 0 ? "검토" : "승인"}</td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>

                                <div>
                                    <div className={styles.tableContainer} style={{height: "140px"}}>
                                        <p className={styles.title}>참조자</p>
                                        <Table>
                                            <thead className={styles.tableHead}>
                                            <tr>
                                                <th>이름</th>
                                                <th>직급</th>
                                                <th>부서</th>
                                            </tr>
                                            </thead>
                                            <tbody className={styles.tableBody}>
                                            {referMember?.map((memberData, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{memberData.name}</td>
                                                        <td>{memberData.position}</td>
                                                        <td>{memberData.team}</td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>

                                <div className={styles.bookmarkLine}>
                                    <p style={{marginBottom: "0"}}>사용자 결재라인 이름</p>
                                    <input value={bookmarkName}
                                           onChange={(e) => setBookmarkName(e.target.value)}
                                    />
                                    <Button className="button" style={{padding: "6px"}}
                                            onClick={() => addBookmark(bookmarkName, signTurn1, signTurn2, signRefer)}
                                    >저장</Button>
                                </div>
                            </div>

                            <div style={{float: "right", padding: "15px 0"}}>
                                <Button className="button"
                                        onClick={() => enterSignLine(signTurn1, signTurn2, signRefer)}
                                >적용
                                </Button>
                                <Button variant="secondary"
                                        style={{marginLeft: "15px"}}
                                        onClick={handleApprovalPathModalClose}
                                >닫기</Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ApprovalPathModal