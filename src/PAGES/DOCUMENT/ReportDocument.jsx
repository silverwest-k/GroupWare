import styles from "./ReportDocument.module.css"
import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {
    APPROVED_DOCUMENT_LIST_API, ONGOING_DOCUMENT_LIST_API,
    REJECTED_DOCUMENT_LIST_API, REPORT_DOCUMENT_LIST_API
} from "../../constants/api_constans";
import DocumentTable from "./components/DocumentTable";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import ButtonGroup from "./components/ButtonGroup";

function ReportDocument() {
    const [listData, setListData] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [approved, setApproved] = useState([]);
    const [rejected, setRejected] = useState([]);

    useEffect(() => {
        fetcher().get(REPORT_DOCUMENT_LIST_API)
            .then((res) => setListData(res.data.content))
    }, []);

    const filterOngoing =()=>{
        fetcher().get(ONGOING_DOCUMENT_LIST_API)
            .then((res)=> setOngoing(res.data));
        console.log("ongoing",ongoing)
    }
    const filterApproved =()=>{
        fetcher().get(APPROVED_DOCUMENT_LIST_API)
            .then((res)=> setApproved(res.data));
    }
    const filterRejected =()=>{
        fetcher().get(REJECTED_DOCUMENT_LIST_API)
            .then((res)=> setRejected(res.data));
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonContainer}>
               <ButtonGroup filterOngoing={filterOngoing} filterApproved={filterApproved} filterRejected={filterRejected}/>
            </div>

            <div>
                <div className={styles.search}>
                    <InputGroup className="mb-3">
                        <FormControl type="text" className="form-control-lg" placeholder="제목"/>
                        <Button className={styles.searchButton}> 검색 </Button>
                    </InputGroup>
                </div>

                <DocumentTable listData={listData} ongoing={ongoing} approved={approved} rejected={rejected}/>
            </div>
        </div>
    )
}

export default ReportDocument