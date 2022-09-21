import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    }
        
    *, *::before, *::after {
        box-sizing: inherit;
    }
        
    ul, ol, li, h1, h2, h3, p, button {
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
    }
    button {
        background: transparent;
        border: 0;
        outline: 0;
    }
    body {
        width: 100%;
        height: 100vh;
        margin: 0 auto; 
        overscroll-behavior: none; 
    }
`;