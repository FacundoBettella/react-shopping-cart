import styled from "styled-components";

export const DetailsImage = styled.img`
  width: ${(props) => (props.sizeManagment ? "100%" : "500px")};
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 8px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.sizeManagment ? "column" : "row")};
  padding: 5px 10px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.sizeManagment && "center"};
  text-align: ${(props) => props.sizeManagment && "justify"};
  margin: ${(props) => (props.sizeManagment ? "20px 0px" : "0px 20px;")};
`;

export const ProductTitle = styled.h1`
  margin: 20px 10px;
  text-align: ${(props) => props.sizeManagment && "center"};
`;

export const LargeDescription = styled.span`
  font-size: 25px;
`;

export const ProductPrice = styled.h2`
  margin: 20px 10px;
  font-size: 30px;
`;

export const CuotasSinInteres = styled.p`
  margin: 20px 0;
  font-size: 20px;
`;

export const ParrafoResaltadoEnvio = styled.span`
  font-weight: bold;
  color: green;
  align-items: center;
`;

export const ProductAvailable = styled.h3`
  margin: 20px 10px;
  font-size: 20px;
`;
export const ContenedorEnvioSucursal = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

export const BotonAgregarCarrito = styled.button`
  width: fit-content;
  font-size: 16px;
  background-color: var(--background);
  color: var(--accent);
  border: 1px solid white;
  font-weight: bold;
  height: 70px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 5% 40%;
  padding: 10px;
  cursor: pointer;

  :hover {
    color: var(--accent-hover);
  }

  :active {
    color: var(--text-secondary);
    background: var(--accent-hover);
  }
`;
