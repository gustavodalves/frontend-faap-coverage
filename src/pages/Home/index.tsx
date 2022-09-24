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
        <Container fluid={true} className='container-fluid' style={{paddingTop: '80px', paddingBottom: '50px',backgroundColor: 'rgba(18,54,128, .65)'}}>
            s
        </Container>

        <Container fluid={false} className='container-fluid' style={{paddingTop: '80px', paddingBottom: '50px'}}>
            <Row>
                {cardsData.map(item => (

                <Col md={4} sm={6} cols={12}>
                    <Card>
                        <img src={item.image} />
                        <div style={{ padding: '10px'}}>
                            <h2> {item.title} </h2>
                            <p> {item.description} </p>
                        </div>
                    </Card>
                </Col>
                ))
                }
            </Row>
            <Button style={{ }} onClick={() => navigate('/produtos')}> Conhecer </Button>
        </Container>

        <Container fluid={true} className='container-fluid' style={{paddingTop: '80px', paddingBottom: '50px',backgroundColor: 'rgba(18,54,128, .65)'}}>
            
        </Container>
            {/* <button onClick={() => changeTheme()}> { JSON.stringify(theme) } </button> */}
        </>
    )
}

export default Home;