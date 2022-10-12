import styled from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:5vh;
    margin-bottom:5vh;
    gap: 1vh;
    @media ${device.desktop} { 
        max-width: calc(100% - 80px);
      }
    @media ${device.laptopL} {
        max-width: calc(100% - 60px);
      }
    @media ${device.laptopL} {
        max-width: calc(100% - 40px);
      }
    @media ${device.tablet} {
        max-width: calc(100% - 30px);
      }
    @media ${device.mobileL} {
        max-width: calc(100% - 20px);
      }
    @media ${device.mobileM} {
        max-width: calc(100% - 10px);
      }
    @media ${device.mobileS} {
        max-width: calc(100% - 10px);
      }
`

export const CartTotal = styled.div`
    display:flex;
    height: 60px;
    width: 100%;
    margin:1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    align-items: center;
    gap: 1em;
    padding-left:1em;
    padding-right:1em;
    margin:0px;
`

export const TotalText = styled.div`
    font-weight: bold;
    font-size: 2em;
    width:50%;
    color: FireBrick;
`

export const  VacioText = styled.div`
    font-weight: bold;
    font-size: 2em;
    color: FireBrick;
    margin: auto;
`

export const TotalPrice = styled.div`
    font-weight: bold;
    font-size: 2em;
    color: rgb(15, 30, 62);
    display:flex;
    align-items:flex-start;
    color: FireBrick;
`