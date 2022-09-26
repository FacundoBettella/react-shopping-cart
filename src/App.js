import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Carousel, Title } from "./components";

import useProducts from "./hooks/useProducts";

import Home from "./pages/home/Home";
import Loading from "./components/loading";

const App = () => {
  const { products, loading } = useProducts();

  return (
    <Fragment>
      <GlobalStyle />
      <Title text={"Shopping Chart"} />

      {/* routes */}
      <Home>
        <Carousel 
          listOfProducts={products}
          loading={loading}
          onLoading={(loading) => <Loading  loading={loading}/>}
        />
      </Home>
    </Fragment>
  );
};

export default App;
