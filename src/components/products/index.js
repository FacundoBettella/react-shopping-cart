import React, { Fragment } from "react";
import { Product } from "../product";
import { ProductsList } from "./styles";
 
 
const Products = ({ listOfProducts, loading, onLoading }) => {

  return (
    <Fragment>
      {loading ? onLoading() : (
        <ProductsList>
          {listOfProducts.length>0 && listOfProducts.map((product, index) => (
            <Product
                key={index}
                title={`${product?.title}`}
                shortDescription={product?.shortDescription}
                price={product?.price}
                stock={product?.stock}
                />
                ))}
        </ProductsList>
      )}
    </Fragment>
  );
};
export default Products;
