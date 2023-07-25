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
            .then((res) => setListData(res.data))
    }, []);

    return (
        <div className={styles.wrapper}>
            {/*<div className={styles.buttonContainer}>*/}
            {/*    <ButtonGroup/>*/}
            {/*</div>*/}

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

        {/*    <div className={styles.pagination}>*/}
        {/*        <Pagination>*/}
        {/*            <Pagination.First onClick={()=>setPage(1)} disabled={page===1}/>*/}
        {/*            <Pagination.Prev onClick={()=>setPage(page-1)} disabled={page===1}/>*/}
        {/*            {Array(pageNum)*/}
        {/*                .fill()*/}
        {/*                .map((_, i)=>(*/}
        {/*                    <Pagination.Item*/}
        {/*                        key={i+1}*/}
        {/*                        onClick = {()=> setPage(i+1)}*/}
        {/*                        aria-current={page === i+1 && "page"}*/}
        {/*                    >*/}
        {/*                        {i+1}*/}
        {/*                    </Pagination.Item>*/}
        {/*                ))*/}
        {/*            }*/}
        {/*            <Pagination.Next onClick={()=>setPage(page+1)} disabled={page===pageNum} />*/}
        {/*            <Pagination.Last onClick={()=>setPage(pageNum)} disabled={page===pageNum}/>*/}
        {/*        </Pagination>*/}
        {/*        /!*<Pagination.Ellipsis />*!/*/}
        {/*    </div>*/}
        {/*</div>*/}
}

export default TempDocument
