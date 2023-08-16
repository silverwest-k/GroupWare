import styles from "./ReportDocument.module.css"
import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {TEMP_DOCUMENT_LIST_API} from "../../constants/api_constans";
import TempDocumentTable from "./components/TempDocumentTable";

function TempDocument() {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        fetcher.get(TEMP_DOCUMENT_LIST_API)
            .then((res) => setListData(res.data.content))
    }, []);

    return (
        <div className={styles.wrapper}>
            <TempDocumentTable listData={listData}/>
        </div>
    )

}

export default TempDocument