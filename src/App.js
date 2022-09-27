import React, { Fragment } from "react";

import {
  Carousel,
  Products,
  Title,
  Loading,
  // ChangeAlertWithStorageListener,
} from "./components";
import { GlobalStyle } from "./styles/GlobalStyles";

import Home from "./pages/home/Home";

import useProducts from "./hooks/useProducts";
// import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const { products, loading } = useProducts();

  return (
    <Fragment>
      <GlobalStyle />
      <Title text={"Shopping Chart"} />

      {/* routes */}
      <Home loading={loading}>
        <Carousel
          listOfProducts={products}
          onLoading={(loading) => <Loading loading={loading} />}
        />
        <Products
          listOfProducts={products}
          onLoading={(loading) => <Loading loading={loading} />}
        />
      </Home>
      {/* <ChangeAlertWithStorageListener sincronize={sincronizeItem} /> */}
    </Fragment>
  );
}

export default App;
