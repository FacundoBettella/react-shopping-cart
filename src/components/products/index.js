import React, { useEffect, useState } from "react";
import { Product } from "../product";
import { collection, doc, getDocs } from "firebase/firestore";
import { FIRESTONE } from "../../firebase/firebase.config";
import { ProductsList } from "./styles";
 
 
const Products = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const getData = async (entity) => {
      try {
        const dataResponse = await getDocs(collection(FIRESTONE, entity));
        //return dataResponse.forEach((doc) => doc.data());
        setProducts(dataResponse.docs.map((doc) => ({ ...doc.data() })));
      } catch (e) {
        console.error("Error getting document: ", e);
      }
    };
    getData("products");
  }, []);
 
  return (
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
  );
};
 
export default Products;
