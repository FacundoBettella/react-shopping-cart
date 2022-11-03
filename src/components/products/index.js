import React, { Fragment, useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import { Product } from "../product";
import { ProductsList } from "./styles";
import { Loading } from "../../components";

const Products = ({ sizeManagment }) => {
  const { products, getProducts, loading } = useProducts();

  useEffect(() => {
    getProducts("products");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <Fragment>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <ProductsList sizeManagment={sizeManagment}>
          {products.length > 0 &&
            products.map((product, index) => (
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
