import React from 'react';
import Container from 'react-bootstrap/Container';
import { Description, ProductsContainer, Title } from './styled';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Images
import carImage from '../../assets/car.png'
import homeImage from '../../assets/home.png'
import lifeImage from '../../assets/life.png'
import officeImage from '../../assets/office.png'
import healthImage from '../../assets/Health.png'
import transportationImage from '../../assets/transportation.png'
import tripImage from '../../assets/trip.png'
import mobileImage from '../../assets/mobile.png'
import petImage from '../../assets/pet.png'
import responsibilityImage from '../../assets/responsibility.png'
import bailImage from '../../assets/bail.png'
import consortiumImage from '../../assets/consortium.png'

export const products = [
    {
        title: 'Seguro de carro',
        image: carImage,
        id: 'seguro-carro',
        description:
            'sse site possui algumas das mais belas imagens disponíveis na web. Todas as imagens são completamente livres de qualquer tipo de direito autoral.'
    },
    {
        title: 'Seguro de Casa',
        image: homeImage,
        id: 'seguro-casa',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro de Vida',
        image: lifeImage,
        id: 'seguro-vida',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Empresa',
        image: officeImage,
        id: 'seguro-empresa',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Saúde',
        image: healthImage,
        id: 'seguro-saude',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Transporte',
        image: transportationImage,
        id: 'seguro-transporte',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Viagem',
        image: tripImage,
        id: 'seguro-viagem',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Celular',
        image: mobileImage,
        id: 'seguro-celular',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Saúde Pet',
        image: petImage,
        id: 'seguro-saude-pet',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Responsabilidade Civil',
        image: responsibilityImage,
        id: 'segura-responsabilidade-civil',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Fiança',
        image: bailImage,
        id: 'seguro-fianca',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Consórcio',
        image: consortiumImage,
        id: 'consorcio',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    }
]

const Products = () => {
    console.log(products)
    return (
        <>
            <Container className='container-fluid' style={{ paddingTop: '80px', paddingBottom: '60px' }}>
                <h1 className='text-center'> Produtos </h1>
                {
                    products.map((product, index) => (
                        <ProductsContainer key={index} id={product.id}>
                            <Title> {product.title}</Title>
                            <Row className={index % 2 === 1 ? 'reverse' : ''}>
                                <Col md={6}>
                                    <img className='img-fluid' src={product.image} />
                                </Col>
                                <Col md={6}>
                                    <Description> {product.description}</Description>
                                </Col>
                            </Row>
                        </ProductsContainer>
                    ))
                }
            </Container>
        </>

    )
}

export default Products;