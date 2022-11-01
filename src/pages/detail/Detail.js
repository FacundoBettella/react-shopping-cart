import React from "react";
import { useLocation } from "react-router-dom";
import {
  BotonAgregarCarrito,
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
import { useCarrito } from "./../../context/carritoContext.js";
import { Layout } from "../../components";

const Detail = ({ sizeManagment }) => {
  const { agregarAlCarrito } = useCarrito();
  const location = useLocation();

  const selectedProduct = location.state.product;

  function redondearCuotas() {
    return (selectedProduct.price / 6).toPrecision(4);
  }

  return (
    <div styles={{ width: "100%" }}>
      <Layout title={`${selectedProduct.title}`} />
      <ProductTitle sizeManagment={sizeManagment}>
        {" "}
        {selectedProduct.title}
      </ProductTitle>
      <DetailsContainer sizeManagment={sizeManagment}>
        <DetailsImage
          src={selectedProduct.image}
          alt={`${selectedProduct.title}`}
          sizeManagment={sizeManagment}
        />
        <DescriptionContainer sizeManagment={sizeManagment}>
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
          <BotonAgregarCarrito
            onClick={() => agregarAlCarrito(selectedProduct)}
          >
            Agregar al carrito
          </BotonAgregarCarrito>
        </DescriptionContainer>
      </DetailsContainer>
    </div>
  );
};

export { Detail };
