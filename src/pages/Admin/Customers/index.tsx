import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import Modal from 'react-bootstrap/Modal';


import { getAllCustomer } from '../../../services/api/customer'

const Customer = () => {
    const [lgShow, setLgShow] = useState(false);
    const [fetchCustomersData, setFetchCustomersData] = useState<any[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [modalContent, setModalContent] = useState<any>({});

    useEffect(() => {
        getAllCustomer().then(data => {
            setFetchCustomersData(data.data.reverse())
            setIsLoading(false)
        })
    }, [])
    return (
        <>
            {!isLoading &&
                <Container fluid={true} className='container' style={{ paddingTop: '100px', paddingBottom: '50px' }} >
                    <Table striped hover responsive="sm" style={{ textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Assunto</th>
                                <th>Mensagem</th>
                                <th>Criado Em</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                fetchCustomersData?.map((item, index) => {
                                    const date = new Date(item.created_at)
                                    return (
                                        <tr onClick={() => {
                                            setLgShow(true)
                                            setModalContent(item)
                                        }} key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.subject}</td>
                                            <td>{item.message.substring(0, 20)}{item.message.length > 19 && '...'}</td>
                                            <td>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
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
        </>

    )
}

export default Customer;