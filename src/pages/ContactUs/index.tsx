import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useForm } from 'react-hook-form';

import { register as customerRegister } from '../../services/api/customer'

import CarImage from '../../assets/car.png'
import Loading from '../../components/Loading';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import toast, { Toaster } from 'react-hot-toast';

import { products } from '../Products'

const subjectOptions = [
    'Orçamento',
    'Atendimento',
    'Dúvida',
    'Outros',
]


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
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        mode: "onChange" // "onChange"
      });

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

    console.log(errors, 90)
    useEffect(() => {
    }, [errors])

    return (
        <>
            {isLoading ? <Loading /> :
                <Container className='container' style={{ paddingTop: '120px', paddingBottom: '50px' }}>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-center mb-2'> Fale Conosco </h3>
                        <InputGroup className="mb-1">
                            <Form.Control
                                placeholder="Nome"
                                className={errors.name && 'is-invalid'}
                                aria-label="Nome"
                                {...register('name', { required: true })}
                            />
                        </InputGroup>
                        {errors.name && <small style={{marginTop: '-20px'}} className="text-danger">O campo nome é obrigatório </small>}

                        <InputGroup className="mb-1">
                            <Form.Control
                                placeholder="Email"
                                className={errors.email && 'is-invalid'}
                                {...register('email', { required: true, pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Endereço de email inválido"
                                  } })}
                            />
                        </InputGroup>
                            {errors.email && <small style={{marginTop: '-20px'}} className="text-danger">{errors.email.message || 'O campo email é obrigatório'}</small>}


                        <InputGroup className="mb-1">
                            <Form.Control
                                placeholder="Assunto"
                                aria-label="Assunto"
                                className={errors.subject && 'is-invalid'}
                                {...register('subject', { required: true })}
                            />
                        </InputGroup>
                        {errors.subject && <small style={{marginTop: '-20px'}} className="text-danger">O campo assunto é obrigatório </small>}

                    <Row>
                        <Col md={6} sm={12}>
                            <InputGroup className="mb-1">
                                <Form.Select>
                                    {
                                        products.map(product => (
                                            <option value={product.title}>
                                                {product.title}
                                            </option>
                                        ))
                                    }
                                </Form.Select>
                            </InputGroup>
                        </Col>

                        <Col md={6} sm={12}>
                            <InputGroup className="mb-1">
                                <Form.Select>
                                    {
                                        subjectOptions.map(subject => (
                                            <option value={subject}>
                                                {subject}
                                            </option>
                                        ))
                                    }
                                </Form.Select>
                            </InputGroup>
                        </Col>
                    </Row>

                        <InputGroup className="mb-1">
                            <Form.Control
                                placeholder="Mensagem"
                                aria-label="Mensagem"
                                className={errors.message && 'is-invalid'}
                                as="textarea" rows={4}
                                {...register('message', { required: true, minLength: 15 })}
                            />
                        </InputGroup>
                        {errors.message && <small style={{marginTop: '-20px'}} className="text-danger">O campo mensagem deve ter mais de 15 caracteres</small>}

                        <input type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#123680', color: '#f8f8f8', display: 'block' }} value="Enviar" />
                    </Form>
                    <Toaster />
                </Container>
            }
        </>
    )
}

export default ContactUs;