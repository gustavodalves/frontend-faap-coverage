import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.color};
        transition: all .3s ease-in-out;
        min-height: 100vh;
        min-width: 100vw;
    }
`