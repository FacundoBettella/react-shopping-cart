import React, { Fragment, useEffect, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Carousel, Title } from "./components";
import AppleIpad from "./assets/Apple iPad.jpg";

import { collection, getDocs } from "firebase/firestore";
import { FIRESTONE } from "./firebase/firebase.config";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (entity) => {
      const dataResponse = await getDocs(collection(FIRESTONE, entity));
      setProducts(dataResponse.docs.map((doc) => ({ ...doc.data() })));
    };

    getProducts("products");
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Title text={"Shopping Chart"} />
      {/* routes */}
      <div>
        <img src={AppleIpad} alt="appleIpad" style={{ width: "230px" }} />
      </div>

    <Carousel listOfProducts={products} />

    
    </Fragment>
  );
};

export default App;
