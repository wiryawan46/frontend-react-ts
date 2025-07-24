import { useContext } from "react";
import Cookies from "js-cookie";
import { userNavigate } from "react-router"
import { AuthContext } from "../../context/authContext";

export const useLogout = () => {
    const authContext = useContext(AuthContext);
    const { setIsAuthenticated } = authContext;
    const navigate = userNavigate();
    const logout = (): void => {
        Cookies.remove("token");
        Cookies.remove("user");
        setIsAuthenticated(false);
        navigate("/login");
    }

    return logout
}