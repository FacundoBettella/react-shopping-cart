import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTONE } from "../firebase/firebase.config";

const useSearch = (filter) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading ] = useState(true);

  const normalize = (param)=>{
    return (param || '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
  }

  const normalizedFilter = normalize(filter);

  const getProducts = async (entity) => {
    const dataResponse = await getDocs(collection(FIRESTONE, entity));
    let products = dataResponse.docs.map((doc) => ({ ...doc.data() }))
    .filter( product => {
        return normalize(product.title).includes(normalizedFilter)
        || normalize(product.shortDescription).includes(normalizedFilter);
    }); 

    setProducts([...products]);
    setLoading(false);

  };

  useEffect(() => {
    getProducts("products");
  }, [filter]);


  return { products, loading };
};

export default useSearch;
