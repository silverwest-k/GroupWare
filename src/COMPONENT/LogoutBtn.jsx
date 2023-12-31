import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "../constants/constants";
import fetcher from "../fetcher";
import { LOGIN_COMPONENT } from "../constants/component_constants";
import { Button } from "react-bootstrap";
import {LOGOUT_API} from "../constants/api_constans";
import styled from "styled-components";

function LogoutBtn () {
    const navigate = useNavigate();
    const [, , removeAccessCookie] = useCookies([ACCESS_TOKEN_COOKIE]);
    const [, , removeRefreshCookie] = useCookies([REFRESH_TOKEN_COOKIE]);

    const handleLogout = () => {
        fetcher
            .post(LOGOUT_API)
            .then(() => {
                removeAccessCookie(ACCESS_TOKEN_COOKIE);
                removeRefreshCookie(REFRESH_TOKEN_COOKIE);
                navigate(LOGIN_COMPONENT);
            });
    };

    return (
        <>
            <Btn onClick={handleLogout}>로그아웃</Btn>
        </>
    );
}
export default LogoutBtn;

const Btn = styled.button`
  border:none;
  background:none;
  color:gray;
  text-decoration:underline;
`