import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import {
  BotonAgregarCarrito,
//   ContenedorEnvio,
  ContenedorEnvioSucursal,
  CuotasSinInteres,
  DescriptionContainer,
  DetailsContainer,
  DetailsImage,
  LargeDescription,
  ParrafoResaltadoEnvio,
  ProductAvailable,
  ProductPrice,
  ProductTitle,
} from "./styles";
import { RiStore2Line } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";

const Detail = () => {
  const location = useLocation();
  const selectedProduct = location.state.product;

  const handleClick = () => {
    console.log("Se agrega al carrito");
  };

  function redondearCuotas() {
    return (selectedProduct.price / 6).toPrecision(4);
  }

  return (
    <Fragment>
      <ProductTitle> {selectedProduct.title} </ProductTitle>
      <DetailsContainer>
        <DetailsImage
          src={require(`../../assets/${selectedProduct.title}.jpg`)}
          alt={`${selectedProduct.title}`}
        />
        <DescriptionContainer>
          <LargeDescription>{selectedProduct.largDescription}</LargeDescription>
          <ProductAvailable>
            {selectedProduct.stock} disponibles
          </ProductAvailable>
          <ProductPrice>$ {selectedProduct.price}</ProductPrice>
          <CuotasSinInteres>
            6 Cuotas sin interés de ${redondearCuotas()}
          </CuotasSinInteres>
          <ContenedorEnvioSucursal>
            <p>
              {" "}
              <ParrafoResaltadoEnvio>
                <MdLocalShipping /> ENVIO GRATIS
              </ParrafoResaltadoEnvio>{" "}
              a Capital Federal{" "}
            </p>
            <p>
              {" "}
              <ParrafoResaltadoEnvio>Llega mañana</ParrafoResaltadoEnvio>{" "}
              comprando hoy antes de las 19hs
            </p>
          </ContenedorEnvioSucursal>
          <ContenedorEnvioSucursal>
            <RiStore2Line /> RETIRO GRATIS en sucursal
          </ContenedorEnvioSucursal>
          <BotonAgregarCarrito onClick={handleClick}>
            AGREGAR AL CARRITO
          </BotonAgregarCarrito>
        </DescriptionContainer>
      </DetailsContainer>
    </Fragment>
  );
};

export { Detail };
