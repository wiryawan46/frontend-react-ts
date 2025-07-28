import { useContext } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext.tsx";

export const useLogout = (): (() => void) => {
    const { setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = (): void => {
        Cookies.remove("token");
        Cookies.remove("user");
        setIsAuthenticated(false);
        navigate("/login");
    }

    return logout
}