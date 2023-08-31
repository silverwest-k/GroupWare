import useStore from "../../../store";
import {
    ReferContent, ReferTable, ReferTitle,
    Sign, SignInfo, SignLineContent,
    SignLineTitle, SignTableWrapper,
    WriterContents, WriterTitle
} from "../../APPROVAL/WriteSignTable";

function EditSignTable({documentData}) {
    const {myAccount, signLine} = useStore(state => state)

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
        {title: "문서번호", content: `${documentData.sno}`}
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
            signName: signLine.signTurn1 ? `${signLine.signTurn1.name} ${signLine.signTurn1.position}` : ""
        },
        {
            signTurn: "승 인",
            sign: "",
            signName: signLine.signTurn2 ? `${signLine.signTurn2.name} ${signLine.signTurn2.position}` : ""
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
                        {signLine.signRefer ? `${signLine.signRefer.name} ${signLine.signRefer.position}` : null}
                    </ReferContent>
                </ReferTable>
            </div>
        </SignTableWrapper>
    )
}

export default EditSignTable