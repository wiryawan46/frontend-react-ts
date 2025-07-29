import { useMutation } from "@tanstack/react-query";
import Api from "../../services/api.tsx";
import Cookies from "js-cookie";

export const useUserDelete = () => {
    return useMutation({
        mutationFn: async (id: number)=> {
            const token = Cookies.get('token');
            const response = await Api.delete(`/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            return response.data.data
        }
    })
}