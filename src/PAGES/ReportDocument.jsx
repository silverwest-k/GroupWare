import {Button, ButtonGroup, Pagination} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./ReportDocument.module.css"

function ReportDocument() {

    function createData(name, calories, fat, carbs) {
        return { name, calories, fat, carbs};
    }

    const rows = [
        createData('2023-06-20', "휴가신청서", "근태관련 신청서", "진행중"),
        createData('2023-06-15', "지출결의서", "비품 구매 요청서", "진행중"),
        createData('2023-06-05', "외근신청서", "근태관련 신청서", "회수요청"),
        createData('2023-05-30', "휴가신청서", "근태관련 신청서", "결재완료"),
        createData('2023-05-24', "업무협조", "사원증 신청서", "결재완료")
    ];

    return(
        <div className={styles.wrapper}>

            <div className={styles.buttonGroup}>
                <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    <Button key="button1">전체</Button>
                    <Button key="button2">진행중</Button>
                    <Button key="button3">결재완료</Button>
                    <Button key="button4">반려</Button>
                </ButtonGroup>
            </div>

            <div className={styles.tableContainer}>
                <h3>상신 문서</h3>
                <div>
                    <TableContainer component={Paper}>
                        <Table style={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className={styles.tableHead}>
                                    <TableCell>기안일</TableCell>
                                    <TableCell align="right">문서양식</TableCell>
                                    <TableCell align="right">제목</TableCell>
                                    <TableCell align="right">결재상태</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        style={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{row.name}</TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <div>
                <Pagination count={10} />
            </div>
        </div>
    )
}

export default ReportDocument