import api from "../../api";

export const authenticate = ({
    email,
    password,
}: { email: string; password: string }) => api.post('/authenticate', {
    email,
    password
})
