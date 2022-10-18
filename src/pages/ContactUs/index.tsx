import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';

import { useForm } from 'react-hook-form';

import { register as customerRegister } from '../../services/api/customer'

import CarImage from '../../assets/car.png'
import Loading from '../../components/Loading';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import toast, { Toaster } from 'react-hot-toast';


interface IFormInputs {
    email: string
    name: string
    subject: string
    message: string
}

const schema = yup.object({
    email: yup.string().required(),
    age: yup.number().positive().integer().required(),
}).required();

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        subject: '',
        message: '',
    })

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<string>('Enviado com sucesso');
    const notify = () => toast(response, {
        duration: 2000,
        position: 'top-right',

        // Styling
        style: {},
        className: '',

        // Custom Icon
        icon: response === 'Enviado com sucesso' ? '✅' : '❌',

        // Change colors of success/error/loading icon
        iconTheme: {
            primary: '#000',
            secondary: '#fff',
        },

        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });

    const onSubmit = async (data: any) => {
        setIsLoading(true)
        try {
            const { status } = await customerRegister(data);

            setResponse('Enviado com sucesso')
            if (status === 201) {
            }

        } catch ({ response }) {
            setResponse('Falha ao enviar')
        }
        notify()
        setIsLoading(false);
    }

    return (
        <>
            {isLoading ? <Loading /> :
                <Container className='container' style={{ paddingTop: '120px', paddingBottom: '50px' }}>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-center mb-2'> Fale Conosco </h3>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Nome"
                                aria-label="Nome"
                                {...register('name', { required: true })}
                            />
                        </InputGroup>
                        <p>{errors.name?.message}</p>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email"
                                {...register('email', { required: true })}
                            />
                            {errors.email && <p role="alert">{errors.email?.message}</p>}
                        </InputGroup>


                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Assunto"
                                aria-label="Assunto"
                                {...register('subject')}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Mensagem"
                                aria-label="Mensagem"
                                as="textarea" rows={4}
                                {...register('message')}
                            />
                        </InputGroup>

                        <input type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#123680', color: '#f8f8f8' }} value="Enviar" />
                    </Form>
                    <Toaster />
                </Container>
            }
        </>
    )
}

export default ContactUs;