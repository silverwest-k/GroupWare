import styles from "./ReportDocument.module.css"
import Pagination from 'react-bootstrap/Pagination';
import {Button, FormControl, InputGroup, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {TEMP_DOCUMENT_LIST_API} from "../../constants/api_constans";
import DocumentTable from "./components/DocumentTable";

function TempDocument() {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        fetcher().get(TEMP_DOCUMENT_LIST_API)
            .then((res) => setListData(res.data.content))
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.tableContainer}>
                {/*<div className={styles.search}>*/}
                {/*    <InputGroup className="mb-3">*/}
                {/*        <FormControl type="text" className="form-control-lg" placeholder="제목"/>*/}
                {/*        <Button className={styles.searchButton}> 검색 </Button>*/}
                {/*    </InputGroup>*/}
                {/*</div>*/}
                <DocumentTable listData={listData}/>
            </div>
        </div>
    )

}

export default TempDocument
