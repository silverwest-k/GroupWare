import styles from "./Pagination.module.css";
import {Button} from "react-bootstrap";

function Pagination({total, page, setPage, limit}) {

    const numPages = Math.ceil(total / limit);

    return (
        <div className={styles.pagination}>
            <Button className={styles.button} onClick={() => setPage(page - 1)} disabled={page === 1}>&lt;</Button>
            {Array(numPages).fill().map((_, i) => (
                <Button className={`${styles.button} ${page === i + 1 ? styles.active : ''}`}
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        aria-current={page === i + 1 ? "page" : undefined}
                >
                    {i + 1}
                </Button>
            ))}
            <Button className={styles.button} onClick={(()=> setPage(page+1))} disabled={page=== numPages}>&gt;</Button>
        </div>
    )
}

export default Pagination