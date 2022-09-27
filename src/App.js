import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Products, Title } from "./components";
import AppleIpad from "./assets/Apple iPad.jpg";

const App = () => {
 
  return (
    <Fragment>
      <GlobalStyle />
      <Title text={"Shopping Chart"} />
      {/* routes */}
      <div>
        <img src={AppleIpad} style={{ width: "230px" }} />
      </div>
      <Products />
    </Fragment>
  );
};

export default App;
