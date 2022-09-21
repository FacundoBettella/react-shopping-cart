import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Title } from "./components";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Title text={"Shopping Chart"} />
      {/* routes */}
    </Fragment>
  );
};

export default App;
