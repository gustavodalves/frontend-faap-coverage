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
    product
}: ICustomerParams) => api.post('customer/store', {
    email,
    name,
    subject,
    message,
    product,
})

export const getAllCustomer = () => api.get('customer')

export const index = () => api.get('customer');
