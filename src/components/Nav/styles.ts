import styled from 'styled-components';

export const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    background-color: #e7e7e7;
    padding: 3px;
    min-width: 100vw;
    display: flex;
    x-index: 99999999999999999;
`

export const NavList = styled.ul`
    padding: 7px;
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: calc(20% + 10px) !important;
    margin: auto 0;
`

export const NavItem = styled.li`
    margin-left: 20px;
    padding: 1px;
    cursor: pointer;
    img {
        max-width: 80px
    }

    :not(img){
        :hover{
            color: black;
        }
    }
`