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
            'Tranquilidade no seu dia e nas viagens. A certeza de que o inesperado não irá te perturbar. Com várias opções de coberturas como colisão, incêndio, roubo, furto, terceiros, além de assistência 24h. Nós da FAAP, faremos sua cotação procurando atender suas necessidades e o melhor custo benefício.'
    },
    {
        title: 'Seguro de Casa',
        image: homeImage,
        id: 'seguro-casa',
        description:
            'A garantia de que a sua família e o seu patrimônio estarão em segurança é o nosso objetivo. Opções de seguros para sua residência com coberturas para danos elétricos, incêndio, explosão, fumaça, roubo, responsabilidade civil e outros, conforme a sua necessidade.'
    },
    {
        title: 'Seguro de Vida',
        image: lifeImage,
        id: 'seguro-vida',
        description:
            'Proteja quem você ama! Seguro de vida é a garantia do seu futuro e de sua família. Fornecemos seguros com opções de doenças graves e DIT (Diária de Incapacidade de Temporária) para sua maior tranquilidade.'
    },
    {
        title: 'Seguro Empresa',
        image: officeImage,
        id: 'seguro-empresa',
        description:
            'Proteção e Segurança para sua empresa como escritórios, lojas, comércios em geral e indústrias e seus clientes.'
    },
    {
        title: 'Seguro Saúde',
        image: healthImage,
        id: 'seguro-saude',
        description:
            'Segurança, tranquilidade e proteção para você, sua família e seus funcionários. Planos individuais, por adesão ou para a sua empresa à partir de duas vidas. Administramos procurando trazer apoio e o seu melhor custo-benefício.'
    },
    {
        title: 'Seguro Transporte',
        image: transportationImage,
        id: 'seguro-transporte',
        description:
            'A garantia que seus produtos, durante transporte, estarão seguros são os nossos objetivos nesse caso. Transporte de carga, sem risco de perder algum valor, como extravio, são tais possibilidades a se evitar ao escolher essa opção.'
    },
    {
        title: 'Seguro Viagem',
        image: tripImage,
        id: 'seguro-viagem',
        description:
            'Viagem de férias, a trabalho, malas prontas, destino dos sonhos! Porque longe de casa temos que estar mais seguros do que nunca. Garanta os imprevistos e fique tranquilo, estaremos aqui para dar todo o suporte.'
    },
    {
        title: 'Seguro Celular',
        image: mobileImage,
        id: 'seguro-celular',
        description:
            'Atualmente os smartphones, notebooks, câmeras, instrumentos musicais e outros equipamentos eletrônicos são indispensáveis no nosso dia a dia, mas o risco existe e podemos minimizar. Consulte-nos, você escolhe as coberturas conforme sua necessidade.'
    },
    {
        title: 'Seguro Saúde Pet',
        image: petImage,
        id: 'seguro-saude-pet',
        description:
            'Saúde, vacinas e qualidade de vida para o seu pet que merece tanto carinho, cuidado e protegendo o dono dos imprevistos. Sim, temos o melhor para oferecer, consulte-nos.'
    },
    {
        title: 'Seguro Responsabilidade Civil',
        image: responsibilityImage,
        id: 'segura-responsabilidade-civil',
        description:
            'Danos físicos, materiais ou morais a terceiros, de sua responsabilidade, podem ser reparados com a nossa ajuda. Temos o serviço de responsabilidade civil profissional para médicos, engenheiros, advogados e outros, bem como riscos operacionais para sua empresa ou evento. Consulte-nos!'
    },
    {
        title: 'Seguro Fiança',
        image: bailImage,
        id: 'seguro-fianca',
        description:
            'Com a FAPP Seguros, o seguro fiança para alugar um imóvel ficou muito mais fácil. Você não precisa se preocupar com fiador e caução; aluga o imóvel que quiser, para sua moradia ou seu negócio, com agilidade. Fazemos toda a consultoria com garantia.'
    },
    {
        title: 'Consórcio',
        image: consortiumImage,
        id: 'consorcio',
        description:
            'A sua casa própria ou o automóvel dos seus sonhos, no seu tempo, e cabendo no seu bolso. Você pode usar o seu FGTS, imóveis e opções com parcelas reduzidas até a contemplação. Peça a sua cotação!'
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