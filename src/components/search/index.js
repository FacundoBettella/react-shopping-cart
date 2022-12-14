import React, { Fragment } from "react";
import useSearch from "../../hooks/useSearch";
import { Product } from "../product";
import { ProductsList } from "../products/styles";
import { Searcher } from "../search-input";
import { useParams } from "react-router-dom";
import { ImageContainer, ProductImage } from "../product/styles";
import useResponsiveSize from "../../hooks/useResponsiveSize";

export const Search = ({ loading, onLoading }) => {
  const { filter } = useParams();
  const { products } = useSearch(filter);
  const [deviceSizeState] = useResponsiveSize();

  const notFoundUrl =
    "https://res.cloudinary.com/dflz1hojg/image/upload/v1665630008/not_found_2_ago6ci.jpg";

  const styles = {
    minHeight: deviceSizeState ? "90vh" : "87vh",
  };

  return (
    <div style={styles}>
      <Searcher param={filter} />
      {loading ? (
        onLoading()
      ) : (
        <>
          <ProductsList sizeManagment={deviceSizeState}>
            {products?.length > 0 &&
              products.map((product, index) => (
                <Product
                  key={index}
                  title={`${product?.title}`}
                  shortDescription={product?.shortDescription}
                  largDescription={product?.largDescription}
                  price={product?.price}
                  stock={product?.stock}
                  image={product?.image}
                />
              ))}
          </ProductsList>
          {products?.length === 0 && !loading && (
            <ImageContainer
              style={{ margin: "0 auto", height: "50%", width: "50%" }}
            >
              <br></br>
              <h3> No encontramos lo que estabas buscando </h3>
              <ProductImage
                src={notFoundUrl}
                style={{ height: "30%", width: "50%" }}
              />
            </ImageContainer>
          )}
        </>
      )}
    </div>
  );
};
export default Search;
