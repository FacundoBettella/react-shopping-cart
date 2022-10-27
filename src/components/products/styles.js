import styled from 'styled-components'
 
export const ProductsList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: ${(props) => props.sizeManagment ? "20px": "20px"};
    margin-bottom: ${(props) => props.sizeManagment ? "0px": "80px"};
`
