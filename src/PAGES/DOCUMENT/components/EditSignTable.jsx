import useStore from "../../../store";
import {
    ReferContent, ReferTable, ReferTitle,
    Sign, SignInfo, SignLineContent,
    SignLineTitle, SignTableWrapper,
    WriterContents, WriterTitle
} from "../../APPROVAL/WriteSignTable";

function EditSignTable({documentData, signLine}) {
    const {myAccount} = useStore(state => state)
    const signTurn1 = signLine[1];
    const signTurn2 = signLine[2];
    const signRefer = signLine[3];

    const time = new Date();
    const toDay = {
        year: time.getFullYear(),
        month: (time.getMonth() + 1).toString().padStart(2, "0"),
        day: time.getDate().toString().padStart(2, "0")
    }

    const sign_Table_Left_data = [
        {title: "기안자", content: `${myAccount.name}`},
        {title: "기안부서", content: `${myAccount.team}`},
        {title: "기안일", content: `${toDay.year}-${toDay.month}-${toDay.day}`},
        {title: "문서번호", content: `${documentData.dno ? documentData.dno : documentData.sno}`}
    ]
    const sign_Table_Right_data = [
        {
            signTurn: "작 성",
            sign: "",
            signName: `${myAccount.name}${myAccount.position}`
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

            <div>
                <table>
                    <tbody>
                    <tr>
                        <SignLineTitle>결재</SignLineTitle>
                        {sign_Table_Right_data.map((data, index) => {
                            return (
                                <SignLineContent key={index}>
                                    <SignInfo>{data.signTurn}</SignInfo>
                                    <Sign>{data.sign}</Sign>
                                    <SignInfo>{data.signName}</SignInfo>
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

export default EditSignTable
