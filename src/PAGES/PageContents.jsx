import {Route, Routes} from "react-router-dom";
import Write from "./Write";


function PageContents() {
    return(
        <>
            <Routes>
                <Route path="/page/write" element={<Write/>}></Route>
            </Routes>
        </>
    )
}

export default PageContents