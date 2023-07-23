import './App.css';
import MainContents from "./COMPONENT/MAIN/MainContents";
import Page from "./PAGES/Page";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import LogIn from "./PAGES/LogIn";
import NotFound from "./PAGES/NotFound";
import {LOGIN_COMPONENT, MAIN_COMPONENT, NOT_FOUND_COMPONENT, PAGE_COMPONENT} from "./constants/component_constants";
import {useCookies} from "react-cookie";
import {ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE} from "./constants/constants";
import {useEffect} from "react";


function App() {
    const navigate = useNavigate();
    const [accessToken, ,] = useCookies([ACCESS_TOKEN_COOKIE]);
    const [refreshToken, ,] = useCookies([REFRESH_TOKEN_COOKIE])

    // useEffect(()=> {
    //     console.log(accessToken);
    //     if(accessToken.length === 0 && refreshToken.length === 0) {
    //         navigate(LOGIN_COMPONENT);
    //         return;
    //     }
    // },[])

    return (
        <div className="App">
            <Routes>
                <Route path={LOGIN_COMPONENT} element={<LogIn/>}/>
                <Route path={NOT_FOUND_COMPONENT} element={<NotFound/>}/>
                <Route path={MAIN_COMPONENT} element={<MainContents/>}/>
                <Route path={PAGE_COMPONENT} element={<Page/>}/>
            </Routes>
        </div>
    );
}

export default App;
