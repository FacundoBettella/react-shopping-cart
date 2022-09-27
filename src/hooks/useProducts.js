import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTONE } from "../firebase/firebase.config";
// import { assetsUtils } from "../utils/assetsUtil";

const useProducts = () => {
//   const [auxProducts, setAuxProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading ] = useState(true);

  const getProducts = async (entity) => {
    const dataResponse = await getDocs(collection(FIRESTONE, entity));
    // setAuxProducts(dataResponse.docs.map((doc) => ({ ...doc.data() })));
    setProducts(dataResponse.docs.map((doc) => ({ ...doc.data() })));
    setLoading(false);
  };
  
  useEffect(() => {
    getProducts("products");
  }, []);

//   const findProductsImage = (_products) => {
//     _products.forEach((product) => {
//       assetsUtils.forEach((image) => {
//         if (product.title.toLowerCase() === image.name.toLowerCase()) {
//           product.image = `../../assets/${image.name}`;
//         }
//       });
//     });
//     setProducts(_products);
//     setLoading(false);
//   };


//   useEffect(() => {
//     if (auxProducts.length > 0) findProductsImage(auxProducts);
//   }, [auxProducts]);

  return { products, loading };
};

export default useProducts;
