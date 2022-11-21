import Container from 'react-bootstrap/Container';

import logo from '../../assets/logo.png'

const AboutUs = () => {
    return (
        <Container style={{ paddingTop: '80px', paddingBottom: '50px' }}>
            <h2 className='text-center mt-2'>Sobre Nós</h2>
            <img style={{ borderRadius: '10px', maxWidth: '400px' }} className='img-fluid d-block m-auto mt-5 mb-5' src={logo} />
            <p className="m-auto"> Formado desde 1998 no ramo de seguros, Fernando se consolidou com a criação da FAAP Coverage em 2011, tendo como objetivo atender seus clientes com confiança, seriedade e técnica.

                Nosso principal foco é o atendimento personalizado, pois acreditamos que cada um dos nossos clientes tem suas necessidades, seus projetos e suas expectativas individuais.

                Em nossa corretora, o cliente não é apenas um número. </p>
        </Container>
    )
}

export default AboutUs;