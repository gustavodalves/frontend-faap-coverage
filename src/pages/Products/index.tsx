import React from 'react';
import Container from 'react-bootstrap/Container';
import { Description, ProductsContainer, Title } from './styled';

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

const products = [
    {
        title: 'Seguro de carro',
        image: carImage,
        description:
            'sse site possui algumas das mais belas imagens disponíveis na web. Todas as imagens são completamente livres de qualquer tipo de direito autoral.'
    },
    {
        title: 'Seguro de Casa',
        image: homeImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro de Vida',
        image: lifeImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Empresa',
        image: officeImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Saúde',
        image: healthImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Transporte',
        image: transportationImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Viagem',
        image: tripImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Celular',
        image: mobileImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Saúde Pet',
        image: petImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Responsabilidade Civil',
        image: responsibilityImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Seguro Fiança',
        image: bailImage,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nibh viverra, ultricies justo a, egestas dolor. Phasellus a augue.'
    },
    {
        title: 'Consórcio',
        image: consortiumImage,
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
                    products.map(product => (
                        <ProductsContainer>
                            <Title> {product.title}</Title>
                            <img className='img-fluid' src={product.image} />
                            <Description> {product.description}</Description>
                        </ProductsContainer>
                    ))
                }
            </Container>
        </>

    )
}

export default Products;