//import useMutation dari tanstack/react-query
import {useMutation} from "@tanstack/react-query";

//import service API
import Api from '../../services/api';


//interface LoginRequest
interface LoginRequest {
    username: string;
    password: string;
}

export const useLogin = () => {
    return useMutation({
        mutationFn: async (body: LoginRequest) => {
            const response = await Api.post('/api/login', body)
            return response.data
        }
    })
}