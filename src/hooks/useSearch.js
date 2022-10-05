import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTONE } from "../firebase/firebase.config";

const useSearch = (filter) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  const normalize = (param) => {
    return (param || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();
  };

  const normalizedFilter = normalize(filter);

  const getProducts = async (entity) => {
    const dataResponse = await getDocs(collection(FIRESTONE, entity));
    let products = dataResponse.docs
      .map((doc) => ({ ...doc.data() }))
      .filter((product) => {
        return (
          normalize(product.title).includes(normalizedFilter) ||
          normalize(product.shortDescription).includes(normalizedFilter)
        );
      });

    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts("products");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return { products, loading };
};

export default useSearch;
