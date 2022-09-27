import React, { useContext } from 'react'
import { Context as ThemeContext } from '../../contexts/ThemeContext';

import { useNavigate } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import carImage from '../../assets/car.png'
import homeImage from '../../assets/home.png'
import lifeImage from '../../assets/life.png'
import { Button } from './styles';

import logo from '../../assets/logo.png'

const cardsData = [
    {
        title: 'Seguro Auto',
        image: carImage,
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim venenatis orci. Fusce convallis nulla nec mattis dapibus. Nullam id magna ipsum. Maecenas nec nibh lacinia'
    },
    {
        title: 'Seguro de Casa',
        image: homeImage,
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim venenatis orci. Fusce convallis nulla nec mattis dapibus. Nullam id magna ipsum. Maecenas nec nibh lacinia'
    },
    {
        title: 'Seguro de Vida',
        image: lifeImage,
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim venenatis orci. Fusce convallis nulla nec mattis dapibus. Nullam id magna ipsum. Maecenas nec nibh lacinia'
    }
]

const Home: React.FC = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    return (
        <>
            <Container fluid={true} className='container-fluid' style={{ paddingTop: '220px', paddingBottom: '180px', backgroundColor: 'rgba(18,54,128, .65)' }}>
                <Row className='align-items-center'>
                    <Col style={{ padding: '30px' }} md="6" sm="12">
                        <img style={{ borderRadius: '10px' }} className='img-fluid d-block mt-auto' src={logo} />
                    </Col>

                    <Col style={{ padding: '30px' }} className="align-center" md="6" sm="12">
                        <p style={{ color: 'white' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </Col>
                </Row>
            </Container>

            <Container fluid={false} className='container-fluid' style={{ paddingTop: '80px', paddingBottom: '50px' }}>
                <Row>
                    {cardsData.map(item => (

                        <Col md={4} sm={6} cols={12}>
                            <Card>
                                <img src={item.image} />
                                <div style={{ padding: '10px' }}>
                                    <h2> {item.title} </h2>
                                    <p> {item.description} </p>
                                </div>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
                <Button style={{}} onClick={() => navigate('/produtos')}> Conhecer </Button>
            </Container>

            <Container fluid={true} className='container-fluid' style={{ paddingTop: '50px', paddingBottom: '80px', backgroundColor: 'rgba(18,54,128, .65)', color: '#f8f8f8' }}>
                <h3 className='text-center'> Contato </h3>
                <p className='text-center'> <bold> Email: </bold> g@alves.com.br </p>
                <p className='text-center'> <bold> Telefone: </bold> +55 (11) 99187-8305 </p>
            </Container>
            {/* <button onClick={() => changeTheme()}> { JSON.stringify(theme) } </button> */}
        </>
    )
}

export default Home;