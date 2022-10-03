import React, { Fragment } from "react";
import useSearch from "../../hooks/useSearch";
import { Product } from "../product";
import { ProductsList } from "../products/styles";
import { Searcher } from '../search-input'
import { useParams } from "react-router-dom";

 
export const Search = ({ loading, onLoading}) => {

  const { filter } = useParams();
  const { products } = useSearch(filter);
  return (
    <Fragment>
      <Searcher/>
      {loading ? onLoading() : (
        <ProductsList>
          {products.length>0 && products.map((product, index) => (
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
export default Search;
