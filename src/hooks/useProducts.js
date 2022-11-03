import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTONE } from "../firebase/firebase.config";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async (entity) => {
    const dataResponse = await getDocs(collection(FIRESTONE, entity));

    setProducts(
      dataResponse.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };

  useEffect(() => {
    getProducts("products");
  }, []);

  return { products, setProducts, loading, getProducts };
};

export default useProducts;
