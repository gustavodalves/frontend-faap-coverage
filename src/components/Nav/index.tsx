import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

import { NavContainer, NavList, NavItem } from './styles';

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
    }
]

const Nav = () => (
    <NavContainer>
            <NavList>
                <NavItem> 
                <img src={logo} />
                </NavItem>
                {
                    itemsMenu.map(item => (
                        <NavItem key={item.title}>
                            <Link to={item.to}>{ item.title }</Link>
                        </ NavItem>
                    ))
                }
            </NavList>
        </NavContainer>
)

export default Nav;