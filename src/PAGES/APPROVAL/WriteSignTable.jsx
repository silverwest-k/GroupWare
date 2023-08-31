import useStore from "../../store";
import styled from "styled-components";

function WriteSignTable() {
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
        {title: "문서번호", content: ""}
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
                {sign_Table_Left_data.map((data) => {
                    return (
                        <tr>
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
                                <SignLineContent>
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

export default WriteSignTable

export const SignTableWrapper = styled.div`
  display: flex;
  margin: 0 140px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const WriterTitle = styled.td`
  border: 1px solid #000000;
  background: #f4f5f5;
  width: 120px;
  text-align: center;
  font-weight: bold;
  padding: 3px;
`
export const WriterContents = styled.td`
  border: 1px solid #000000;
  width: 150px;
  padding-left: 15px;
  text-align: left;
`
export const SignLineTitle = styled.th`
  width: 30px;
  border: 1px solid #000000;
  background: #f4f5f5;
  text-align: center;
`
export const SignLineContent = styled.td`
  padding: 0;
  margin: 0;
  width: 105px;
  border: 1px solid #424242;
`
export const SignInfo = styled.div`
  background: #f4f5f5;
  width: 105px;
  height: 24px;
  text-align: center;
`
export const Sign = styled.div`
  height: 100px;
  width: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;

  img {
    width: 65px;
  }
`
export const ReferTable = styled.div`
  border: 1px solid #000000;
  height: 26px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`
export const ReferTitle = styled.div`
  border-right: 1px solid #000000;
  width: 135px;
  background: #f4f5f5;
  box-sizing: inherit;
  font-weight: bold;
  text-align: center;
`
export const ReferContent = styled.div`
  padding-left: 15px;
  text-align: left;
`