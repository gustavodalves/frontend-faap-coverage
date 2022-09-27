import { useState } from "react";
import IAuthType from "../interfaces/AuthType";
import { authenticate } from "../services/api/auth";
import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(false)
    const [authToken, setAuthToken] = useLocalStorage('token', '');

    const login = async ({ email, password }: IAuthType) => {
        try {
            const { data } = await authenticate({ email, password });
            const { token } = data;
            setAuthenticated(true);
            setAuthToken(token);
        } catch ({ response }) {
            setAuthenticated(false);
        }
    }

    return {
        authenticated,
        login
    }
}

export default useAuth;