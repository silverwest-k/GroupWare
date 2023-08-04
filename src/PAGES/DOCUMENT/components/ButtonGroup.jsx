import styles from "../ReportDocument.module.css";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function ButtonGroup({filterOngoing,filterApproved,filterRejected}) {
    return(
        <>
            <div className={styles.divisionLine}></div>
            <div className={styles.buttonGroup}>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton id="tbg-radio-1" value={1} className={styles.button}>전체</ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2}
                                  className={styles.button} onClick={filterOngoing}
                    >진행중</ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3}
                                  className={styles.button} onClick={filterApproved}>결재완료</ToggleButton>
                    <ToggleButton id="tbg-radio-4" value={4}
                                  className={styles.button} onClick={filterRejected}>반려</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className={styles.divisionLine}></div>
        </>
    )
}

export default ButtonGroup