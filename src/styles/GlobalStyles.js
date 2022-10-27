import styled, { createGlobalStyle } from "styled-components";

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
        margin: 0 auto; 
        overscroll-behavior: none; 

        min-height: 100vh;
        position: relative;
    }

    :root {
        --background: white;
        --accent: FireBrick;
        --accent-hover: #c81e1e;
        --text-primary: black;
        --text-secondary: white;
        --text-special: FireBrick;    
    }

    [data-theme='dark'] {
        --background: rgb(0, 17, 26);
        --accent: LightCoral;
        --accent-hover: #fa6464;
        --text-primary: FloralWhite;
        --text-secondary: rgb(0, 17, 26);
        --text-special: LightCoral; 
      }
`;

export const PageContainer = styled.div`
  /* Necesario para el footer */
  padding-bottom: ${(props) => !props.sizeManagment && "45vh"};
`;

export const Theme = styled.div`
  color: var(--text-primary);
  background-color: var(--background);
`;
