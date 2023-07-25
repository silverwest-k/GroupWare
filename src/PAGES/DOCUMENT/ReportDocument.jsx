import styles from "./ReportDocument.module.css"
import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {REPORT_DOCUMENT_LIST_API} from "../../constants/api_constans";
import DocumentTable from "./components/DocumentTable";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import ButtonGroup from "./components/ButtonGroup";

function ReportDocument() {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        fetcher().get(REPORT_DOCUMENT_LIST_API)
            .then((res) => setListData(res.data))
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonContainer}>
               <ButtonGroup/>
            </div>

            <div className={styles.tableContainer}>
                <div className={styles.search}>
                    <InputGroup className="mb-3">
                        <FormControl type="text" className="form-control-lg" placeholder="제목"/>
                        <Button className={styles.searchButton}> 검색 </Button>
                    </InputGroup>
                </div>

                <DocumentTable listData={listData}/>
            </div>
        </div>
    )
}

export default ReportDocument