import {
    ReferContent,
    ReferTable,
    ReferTitle,
    Sign,
    SignInfo,
    SignLineContent,
    SignLineTitle, SignTableWrapper, WriterContents, WriterTitle
} from "../../APPROVAL/WriteSignTable";

function DocumentSignTable({documentData, signLine}) {
    const writer = documentData.writer;
    const signTurn1 = signLine[1];
    const signTurn2 = signLine[2];
    const signRefer = signLine[3];
    // TODO: 참조 undifined

    const sign_Table_Left_data = [
        {title: "기안자", content: `${writer?.name || ""}`},
        {title: "기안부서", content: `${writer?.team || ""}`},
        {title: "기안일", content: `${documentData.createDate || ""}`},
        {title: "문서번호", content: `${documentData.sno || ""}`}
    ]

    const sign_Table_Right_data = [
        {
            signTurn: "작 성",
            sign: "",
            signName: `${writer?.name || ""}${writer?.position || ""}`
        },
        {
            signTurn: "검 토",
            sign: "",
            signName: signTurn1 ? `${signTurn1?.name} ${signTurn1?.position || ""}` : ""
        },
        {
            signTurn: "승 인",
            sign: "",
            signName: signTurn2 ? `${signTurn2?.name} ${signTurn2?.position || ""}` : ""
        }
    ]

    return (
        <SignTableWrapper>
            <div style={{marginRight:"30px"}}>
                <table>
                    <tbody>
                    {sign_Table_Left_data.map((data, index) => {
                        return (
                            <tr key={index}>
                                <WriterTitle>{data.title}</WriterTitle>
                                <WriterContents>{data.content}</WriterContents>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <SignLineTitle>결재</SignLineTitle>
                        {sign_Table_Right_data.map((data, index) => {
                            return (
                                <SignLineContent key={index}>
                                    <SignInfo> {data.signTurn} </SignInfo>
                                    <Sign> {data.sign} </Sign>
                                    <SignInfo> {data.signName} </SignInfo>
                                </SignLineContent>
                            )
                        })}
                    </tr>
                    </tbody>
                </table>

                <ReferTable>
                    <ReferTitle>참조</ReferTitle>
                    <ReferContent>
                        {signRefer ? `${signRefer?.name} ${signRefer?.position}` : null}
                    </ReferContent>
                </ReferTable>
            </div>
        </SignTableWrapper>
    )
}

export default DocumentSignTable