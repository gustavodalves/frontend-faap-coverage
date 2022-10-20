import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 30px 0;
    .row {
        align-items: center;
    }

    .reverse {
        flex-direction: row-reverse;
    }
    img { border-radius: 8px }
`

export const Title = styled.h2`
    color: #123680;
    text-align: center;
    margin-bottom: 30px;
`

export const Description = styled.p`
    margin-top: auto;
`