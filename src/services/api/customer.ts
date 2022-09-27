import api from "../../api";

interface ICustomerParams {
    email: string;
    name: string;
    subject: string;
    message: string
}

export const register = ({
    email,
    name,
    subject,
    message,
}: ICustomerParams) => api.post('customer/store', {
    email,
    name,
    subject,
    message,
})

export const index = () => api.get('customer');