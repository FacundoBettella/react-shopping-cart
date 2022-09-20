import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import PresentationalTitle from "./components/presentationalTitle";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <PresentationalTitle text={"Shopping Chart"} />
    </Fragment>
  );
};

export default App;
