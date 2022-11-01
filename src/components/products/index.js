import React, { Fragment } from "react";
import { Product } from "../product";
import { ProductsList } from "./styles";

const Products = ({ listOfProducts, loading, onLoading, sizeManagment }) => {
  return (
    <Fragment>
      {loading ? (
        onLoading()
      ) : (
        <ProductsList sizeManagment={sizeManagment}>
          {listOfProducts.length > 0 &&
            listOfProducts.map((product, index) => (
              <Product
                key={index}
                title={`${product?.title}`}
                shortDescription={product?.shortDescription}
                largDescription={product?.largDescription}
                price={product?.price}
                stock={product?.stock}
                image={product?.image}
                id={product?.id}
              />
            ))}
        </ProductsList>
      )}
    </Fragment>
  );
};
export default Products;
