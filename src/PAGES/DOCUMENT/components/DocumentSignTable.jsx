import SignTableComponent from "../../../COMPONENT/SignTableComponent";

function DocumentSignTable({documentData, signLine}) {
    const writer = documentData.writer;
    const signTurn1 = signLine[1];
    const signTurn2 = signLine[2];
    const signRefer = signLine[3];

    const leftData = [
        {title: "기안자", content: `${writer?.name || ""}`},
        {title: "기안부서", content: `${writer?.team || ""}`},
        {title: "기안일", content: `${documentData.createDate || ""}`},
        {title: "문서번호", content: `${documentData.dno}`}
    ]

    const approvalState = (index) => signLine[index]?.status

    const rightData = [
        {
            signTurn: "작 성",
            sign: approvalState(0) === "승인" ? require("../../../IMAGES/approval.png") :
                approvalState(0) === "반려" ? require("../../../IMAGES/return.png") : null,
            signName: `${writer?.name || ""}${writer?.position || ""}`
        },
        {
            signTurn: "검 토",
            sign: approvalState(1) === "승인" ? require("../../../IMAGES/approval.png") :
                approvalState(1) === "반려" ? require("../../../IMAGES/return.png") : null,
            signName: signTurn1 ? `${signTurn1?.name} ${signTurn1?.position || ""}` : ""
        },
        {
            signTurn: "승 인",
            sign: approvalState(2) === "승인" ? require("../../../IMAGES/approval.png") :
                approvalState(2) === "반려" ? require("../../../IMAGES/return.png") : null,
            signName: signTurn2 ? `${signTurn2?.name} ${signTurn2?.position || ""}` : ""
        }
    ]

    return (
        <>
            <SignTableComponent leftData={leftData} rightData={rightData} signRefer={signRefer}/>
        </>
    )
}

export default DocumentSignTable