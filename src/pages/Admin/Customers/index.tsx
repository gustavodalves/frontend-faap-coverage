import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import Modal from 'react-bootstrap/Modal';

import Pagination from 'react-bootstrap/Pagination';

import { getAllCustomer } from '../../../services/api/customer'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from 'react-hook-form';

import { authenticate } from '../../../services/api/auth'
interface IFormInputs {
    email: string
    password: string
}


const Customer = () => {
    const [lgShow, setLgShow] = useState(false);
    const [fetchCustomersData, setFetchCustomersData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [modalContent, setModalContent] = useState<any>({});
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
    const [show, setShow] = useState(false);
    let length = 62

    const [page, setPage] = useState(1)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getAllCustomer().then(data => {
            setFetchCustomersData(data.data.reverse())
            length = data.data.length

            console.log(length, 19)
        }).catch(() => {
            handleShow()
        }).finally(() => setIsLoading(false))
    }, [])

    let numberPages = 0
    let arrayPagination = new Array(1).fill(0)

    const onSubmit = async (dataReq: any) => {
        console.log(dataReq)
        setIsLoading(true)

        authenticate(dataReq).then(item => {
            const { status, data } = item

            if (status === 200) {
                localStorage.setItem('token', data.token)
                window.location.reload();
                handleClose()
            }

        }).catch(() => {
            localStorage.removeItem('token')
        }).finally(() => {
            setIsLoading(false);
        })
    }

    if(length > 0) {
        numberPages = Math.ceil(length / 8)
        arrayPagination = new Array(numberPages).fill(0)

        console.log(Math.round(length / 8))
    }

    const tablePaginated = fetchCustomersData?.filter((_, index ) => {
        const test = (page - 1) * 7
        console.log(test, 9)

        return index > test && index < 7 * page
    })

    return (
        <>
            {!isLoading &&
                <Container fluid={true} className='container' style={{ paddingTop: '100px', paddingBottom: '50px' }} >
                    <Table striped hover responsive="sm" style={{ textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Produto</th>
                                <th>Assunto</th>
                                <th>Mensagem</th>
                                <th>Criado Em</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                tablePaginated?.map((item, index) => {
                                    const date = new Date(item.created_at)
                                    return (
                                        <tr onClick={() => {
                                            setLgShow(true)
                                            setModalContent(item)
                                        }} key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.product}</td>
                                            <td>{item.subject}</td>
                                            <td>{item.message.substring(0, 20)}{item.message.length > 19 && '...'}</td>
                                            <td>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>

                    <Pagination>
                        {
                            arrayPagination.map((_, index) => {
                                const item = index
                                return (
                                    <Pagination.Item active={index + 1 === page} onClick={() => setPage(item + 1)} key={index}>
                                        { index + 1}
                                    </Pagination.Item>
                                )
                            })
                        }
                    </Pagination>

                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        centered
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                {modalContent.subject}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{modalContent.name}</p>
                            <p>{modalContent.email}</p>
                            <p>{modalContent.message}</p>
                        </Modal.Body>
                    </Modal>


                </Container>

            }

            <Container>
                <Modal centered backdrop="static" show={show}>
                    <Modal.Header>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                    {...register('email')}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                            >
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" {...register('password')} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <input type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#123680', color: '#f8f8f8' }} value="Login" />
                        </Modal.Footer>
                    </Form>
                </Modal>
            </Container>
        </>

    )
}

export default Customer;
