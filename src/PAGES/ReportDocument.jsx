import {Button, ButtonGroup, Pagination} from "@mui/material";


function ReportDocument() {

    return(
        <>
            <div>
                <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    <Button key="button1">전체</Button>
                    <Button key="button2">진행중</Button>
                    <Button key="button3">결재완료</Button>
                    <Button key="button4">반려</Button>
                </ButtonGroup>
            </div>
            <div>
                <h3>상신 문서</h3>
                <div>
                    결재하기
                </div>
            </div>
            <div>
                <Pagination count={10} />
            </div>
        </>
    )
}

export default ReportDocument