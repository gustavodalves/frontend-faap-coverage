import React from 'react';
import Container from 'react-bootstrap/Container';

import carImage from '../../assets/car.png'
import { Description, ProductsContainer, Title } from './styled';

const products = [
    {
        title: 'Seguro de carro',
        image: carImage,
        description: 
            'sse site possui algumas das mais belas imagens disponíveis na web. Todas as imagens são completamente livres de qualquer tipo de direito autoral.'
    },
]

const Products = () => {
    console.log(products)
    return(
        <>
            <Container className='container-fluid' style={{paddingTop: '80px', paddingBottom: '50px'}}>
                <h1 className='text-center'> Produtos </h1>
                {
                    products.map(product => (
                        <ProductsContainer>
                            <Title> { product.title }</Title>
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