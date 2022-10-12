import { keyframes, css } from "styled-components";

const fadeInKeyFrames = keyframes`
    from {
        filter: blur(2px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`;

/* El valor por defecto es un objeto vacio  */
export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `;
