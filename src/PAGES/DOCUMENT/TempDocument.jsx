import styles from "./ReportDocument.module.css"
import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {TEMP_DOCUMENT_LIST_API} from "../../constants/api_constans";
import TempDocumentTable from "./components/TempDocumentTable";
import Pagination from "./components/Pagination";

function TempDocument() {
    const [listData, setListData] = useState([]);
    // 페이지네이션
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetcher.get(TEMP_DOCUMENT_LIST_API)
            .then((res) => setListData(res.data))
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.tableContainer} style={{marginTop:"200px"}}>
                <div className={styles.table}>
                    <TempDocumentTable listData={listData} limit={limit} offset={offset}/>
                </div>
                <Pagination total={listData.length} limit={limit} page={page} setPage={setPage}/>
            </div>
        </div>
    )

}

export default TempDocument
