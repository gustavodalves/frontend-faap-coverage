import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom'
import './style.css'

import logo from '../../assets/logo.png'
import { products } from '../../pages/Products';
const itemsMenu = [
  {
    title: 'Inicio',
    to: '',
  },
  {
    title: 'Sobre',
    to: '/sobre-nos',
  },
  {
    title: 'Produtos',
    to: '/produtos',
    children: products
  },
  {
    title: 'Bot',
    to: '/bot'
  },
  {
    title: 'Fale Conosco',
    to: '/fale-conosco'
  }
]

const NavComponent = () => (
  <Navbar style={{ position: 'fixed', minWidth: '100vw', zIndex: 9999 }} bg="light" expand="lg">
    <Container>
      <Navbar.Brand><Link className='link' to={'/'}><img style={{ width: '200px' }} src={logo} ></img></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {
            itemsMenu.map(r => {
              return r.children ? (
                <NavDropdown className='link' title={itemsMenu[2].title} id="basic-nav-dropdown">
                    {
                      r.children.map(children => {
                        return (
                          <NavDropdown.Item href={`/produtos/#${children.id}`}>
                            {children.title}
                          </NavDropdown.Item>)
                      })
                    }
                </NavDropdown>
              ) : <Nav.Link> <Link className='link' to={r.to}>{r.title}</Link>  </Nav.Link>
            })
          }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NavComponent;