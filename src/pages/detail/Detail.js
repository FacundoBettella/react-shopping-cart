import React, { useContext, Fragment } from "react";
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
import { carritoContext } from "./../../context/carritoContext.js";

const Detail = () => {
  const location = useLocation();
  const selectedProduct = location.state.product;

  const handleClick = () => {
    console.log("Se agrega al carrito");
  };

  function redondearCuotas() {
    return (selectedProduct.price / 6).toPrecision(4);
  }

  const {
    agregarAlCarrito,
  } = useContext(carritoContext);

  return (
    <Fragment>
      <ProductTitle> {selectedProduct.title} </ProductTitle>
      <DetailsContainer>
        <DetailsImage
          src={selectedProduct.image}
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
          <BotonAgregarCarrito onClick={() => agregarAlCarrito(selectedProduct)}>
            Agregar al carrito
          </BotonAgregarCarrito>
        </DescriptionContainer>
      </DetailsContainer>
    </Fragment>
  );
};

export { Detail };
