import styled from "styled-components";

export const DetailsImage = styled.img`
    width:500px;
    height: 500px;
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const DetailsContainer = styled.div`
    display: flex;
    padding: 5px 5px;
    border: 2px solid black;
`
export const ProductTitle = styled.h1`
    margin: 20px 10px;
`

export const LargeDescription = styled.span`
    margin:0px 10px;
    font-size: 25px;
`

export const ProductPrice = styled.h2`
    margin: 20px 10px;
    font-size: 30px;
`

export const ProductAvailable = styled.h3`
    margin: 20px 10px;
    font-size: 20px;
`
export const BotonAgregarCarrito = styled.button`
  font-size: 15px;
  background-color: grey;
  height: 70px;
  width: 200px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 10% 40%;
  cursor: pointer;
`
