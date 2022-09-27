import styled from 'styled-components'
 
export const ProductContainer = styled.div`
    height: 500px;
    width: 250px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;    
`
export const ProductTitle = styled.h1`
 height: 60px;
`
 
export const ProductSubtitle = styled.h2`
      
`

export const ImageContainer = styled.div`
    height:200px;
    width: 225px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProductImage = styled.img`
    border-radius: 4px;
    min-width: 150px;
    min-height: 80px;
    max-width: 100%;
    max-height: 90%;
`
 
export const ProductDescription = styled.div`
    margin: 10px; 
    width: 200px;
    height: 55px;
`

export const Button = styled.button`
  border: none;
  color: red;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &:hover{
    color: orange;
  }
`

export const ButtonsContainer = styled.div`
margin: 20px 0px;
`
