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
        to: '',
    },
    {
        title: 'Saúde',
        to: '',
    },
    {
        title: 'Consórcio',
        to: '',
    },
    {
        title: 'Produtos',
        to: '',
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
                            { item.title }
                        </ NavItem>
                    ))
                }
            </NavList>
        </NavContainer>
)

export default Nav;