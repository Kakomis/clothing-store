import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 62.5%;
        font-family: 'Montserrat', 'sans-serif';
        background: #fafafa;
    }

    a {
        text-decoration: none;
        color: black;
    }
`