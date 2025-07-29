import { useMutation } from "@tanstack/react-query";
import Api from "../../services/api.tsx";
import Cookies from "js-cookie";

interface UserRequest {
    name: string;
    username: string;
    email: string;
    password: string;
}
export const useUserCreate = () => {
    return useMutation({
        mutationFn: async (data: UserRequest)=> {
            const token = Cookies.get('token');
            const response = await Api.post('/api/users', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            return response.data.data
        }
    })
}