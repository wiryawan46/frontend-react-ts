//import js cookies
import Cookies from "js-cookie";

//interface User
interface User {
    id: string;
    name: string;
    username: string;
    email: string;
}

export const useAuthUser = (): User | null => {
    const user = Cookies.get("user");

    return user ? JSON.parse(user) as User : null;
}