import React, { useContext } from 'react'
import { Context as ThemeContext } from '../../contexts/ThemeContext';

import Carousel from './components/Carousel';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import carImage from '../../assets/car.webp'
import homeImage from '../../assets/home.jpg'

const cardsData = [
    {
        title: 'Seguros de Carro',
        image: carImage,
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim venenatis orci. Fusce convallis nulla nec mattis dapibus. Nullam id magna ipsum. Maecenas nec nibh lacinia'
    },
    {
        title: 'Seguros de Casa',
        image: homeImage,
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim venenatis orci. Fusce convallis nulla nec mattis dapibus. Nullam id magna ipsum. Maecenas nec nibh lacinia'
    },
    {
        title: 'Seguro de Carros',
        image: carImage,
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim venenatis orci. Fusce convallis nulla nec mattis dapibus. Nullam id magna ipsum. Maecenas nec nibh lacinia'
    }
]

const Home: React.FC = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
        <Container style={{paddingTop: '80px', paddingBottom: '50px'}}>
            <Carousel images={[
                carImage
            ]} />

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

            <Carousel images={[
                homeImage
            ]} />

            <Row>
                {
                    cardsData.map((item, index) => {
                        var total = index / 2;
                        console.log(index)
                         return total % 2 == 0 ? (
                             <> 
                             <Col md={6}> <Card>
                                 <img src={item.image} />
                            </Card> </Col>
                             <Col className="text-center" md={6}> <h4>{item.title}</h4> <p>{item.description}</p> </Col>
                             </>
                         ) : (
                             <>
                            <Col className="text-center" md={6}> <h4>{item.title}</h4> <p>{item.description}</p> </Col>
                            <Col md={6}> <Card>
                            <img src={item.image} />
                       </Card> </Col>
                       </>
                         )
                    })
                }

            </Row>
            {/* <button onClick={() => changeTheme()}> { JSON.stringify(theme) } </button> */}
        </Container>
    )
}

export default Home;