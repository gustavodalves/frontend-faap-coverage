import styled from 'styled-components';

export const CarouselContainer = styled.div`
    background-color: rgba(18,54,128, .65);
    width: 100vw;
    height: 100vh;
`

export const CarouselItem = styled.img`
    width: 100%;
    height: 100;
    max-width: 100vw;
    max-height: 100vh;
`

export const Button = styled.button`
    margin: auto;
    background-color: #123680;
    border: 1px solid transparent;
    padding: 1rem 4rem;
    color: #f8f8f8;
    display: block;
    margin-top: 1rem;
    border-radius: .3rem;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: rgba(18,54,128, .95)
    }
`